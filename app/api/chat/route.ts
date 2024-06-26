import { NextResponse } from 'next/server';
import { chain } from "@/utils/chain";
import { Message } from "../../../types/messages";

export async function POST(request: Request) {

    const body = await request.json();
    const question: string = body.query;
    const history: Message[] = body.history ?? [];

    const res = await chain.invoke({
            question: question,
            chatHistory: history.map(h => h.content).join("\n"),
        });

    // console.log(res);

    // no need for sources
    // const links: string[] = res.sourceDocuments ? Array.from(new Set(res.sourceDocuments.map((document: {metadata: {source: string}}) => document.metadata.source))) : [];
    return NextResponse.json({role: "assistant", content: res});
}