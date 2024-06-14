import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { pinecone } from "../utils/pinecone-client";
import { PineconeStore } from "@langchain/pinecone";
import { formatDocumentsAsString } from "langchain/util/document";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";


async function initChain() {
    const model = new ChatOpenAI({});

    const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX ?? '');

    /* create vectorstore*/
    const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings({}),
        {
            pineconeIndex: pineconeIndex,
            textKey: 'text',
        },
    );

    return RunnableSequence.from([
        {
          question: (input: { question: string; chatHistory?: string }) =>
            input.question,
          chatHistory: (input: { question: string; chatHistory?: string }) =>
            input.chatHistory ?? "",
          context: async (input: { question: string; chatHistory?: string }) => {
            const relevantDocs = await vectorStore.asRetriever().invoke(input.question);
            const serialized = formatDocumentsAsString(relevantDocs);
            return serialized;
          },
        },
        model,
        new StringOutputParser(),
      ]);
}

export const chain = await initChain()