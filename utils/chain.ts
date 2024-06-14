import { ChatOpenAI, OpenAIEmbeddings } from "@langchain/openai";
import { pinecone } from "../utils/pinecone-client";
import { PineconeStore } from "@langchain/pinecone";
import { formatDocumentsAsString } from "langchain/util/document";
import { PromptTemplate } from "@langchain/core/prompts";
import { StringOutputParser } from "@langchain/core/output_parsers";
import { RunnableSequence } from "@langchain/core/runnables";


async function initChain() {
    const model = new ChatOpenAI({});

    const pineconeIndex = pinecone.Index(process.env.PINECONE_INDEX ?? '');

    /* create vectorstore*/
    const vectorStore = await PineconeStore.fromExistingIndex(
        new OpenAIEmbeddings(),
        {
            pineconeIndex: pineconeIndex,
        },
    );

    const retriever = vectorStore.asRetriever();

    const questionPrompt = PromptTemplate.fromTemplate(
      `You are an AI chatbot named Halo who's sole purpose is to answer questions about Saurish's past experiences in computer science and why he would like to join the company Elicit. Use the following pieces of context to answer the question at the end.
      ----------------
      CONTEXT: {context}
      ----------------
      CHAT HISTORY: {chatHistory}
      ----------------
      QUESTION: {question}
      ----------------
      Now, create a helpful answer:`
    );

    const chain = RunnableSequence.from([
      {
        question: (input: { question: string; chatHistory?: string }) =>
          input.question,
        chatHistory: (input: { question: string; chatHistory?: string }) =>
          input.chatHistory ?? "",
        context: async (input: { question: string; chatHistory?: string }) => {
          const relevantDocs = await retriever.invoke(input.question);
          const serialized = formatDocumentsAsString(relevantDocs);
          return serialized;
        },
      },
      questionPrompt,
      model,
      new StringOutputParser(),
    ]);

    return chain;
}

export const chain = await initChain()