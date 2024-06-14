"use client";
import { useState, useRef, useEffect } from "react";
import { Message } from "../types/messages";
import { Send } from "react-feather";
import LoadingDots from "../components/LoadingDots";

export default function Halo() {
  const [message, setMessage] = useState<string>("");
  const [history, setHistory] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hello, I'm Halo! Feel free to ask me any questions about Saurish's past computer science projects or why he would like to join Elicit.",
    },
  ]);
  const lastMessageRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    if (message == "") return;
    setHistory((oldHistory) => [
      ...oldHistory,
      { role: "user", content: message },
    ]);
    setMessage("");
    setLoading(true);
    fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: message, history: history }),
    })
      .then(async (res) => {
        const r = await res.json();
        setHistory((oldHistory) => [...oldHistory, r]);
        setLoading(false);
      })
      .catch((err) => {
        alert(err);
      });
  };

  // const formatPageName = (url: string) => {
  //   // Split the URL by "/" and get the last segment
  //   const pageName = url.split("/").pop();

  //   // Split by "-" and then join with space
  //   if (pageName) {
  //     const formattedName = pageName.split("-").join(" ");

  //     // Capitalize only the first letter of the entire string
  //     return formattedName.charAt(0).toUpperCase() + formattedName.slice(1);
  //   }
  // };

  //scroll to bottom of chat
  // useEffect(() => {
  //   if (lastMessageRef.current) {
  //     lastMessageRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [history]);

  return (
    <form
      className="w-[340px] mt-8 h-[550px] -ml-4 md:-ml-[1.15rem] mx-auto md:w-[640px] p-4 rounded-lg border-2 border-[#065D63] bg-white mb-10 overflow-clip"
      onSubmit={(e) => {
        e.preventDefault();
        handleClick();
      }}
    >
      <div className="h-[474px] pr-4 min-w-full overflow-y-scroll flex flex-col justify-start">
        {history.map((message: Message, idx) => {
          const isLastMessage = idx === history.length - 1;
          switch (message.role) {
            case "assistant":
              return (
                <div
                  ref={isLastMessage ? lastMessageRef : null}
                  key={idx}
                  className="my-4 flex flex-1 gap-3 text-sm text-gray-600 items-center justify-start"
                >
                  <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                    <div className="rounded-full border bg-gray-100 p-1">
                      <svg
                        stroke="none"
                        fill="black"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                        ></path>
                      </svg>
                    </div>
                  </span>
                  <p className="leading-relaxed text-left break-words">
                    <span className="block font-bold text-gray-700 mb-1">
                      Halo
                    </span>
                    {message.content}
                  </p>
                </div>
              );
            case "user":
              return (
                <div
                  key={idx}
                  ref={isLastMessage ? lastMessageRef : null}
                  className="my-4 flex flex-1 gap-3 text-sm text-gray-600 items-center justify-end"
                >
                  <p className="leading-relaxed text-right break-words">
                    <span className="block font-bold text-gray-700 mb-1">
                      You
                    </span>
                    {message.content}
                  </p>
                  <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
                    <div className="rounded-full border bg-gray-100 p-1">
                      <svg
                        stroke="none"
                        fill="black"
                        strokeWidth="0"
                        viewBox="0 0 16 16"
                        height="20"
                        width="20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"></path>
                      </svg>
                    </div>
                  </span>
                </div>
              );
          }
        })}
        {loading && (
          <div
            ref={lastMessageRef}
            className="my-4 flex flex-1 gap-3 text-sm text-gray-600"
          >
            <span className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full">
              <div className="rounded-full border bg-gray-100 p-1">
                <svg
                  stroke="none"
                  fill="black"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  height="20"
                  width="20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                  ></path>
                </svg>
              </div>
            </span>
            <p className="leading-relaxed text-left break-words">
              <span className="block font-bold text-gray-700 mb-1">Halo</span>
              <LoadingDots />
            </p>
          </div>
        )}
      </div>

      {/* input area */}
      <div className="flex items-center pt-0">
        <form className="flex w-full items-center justify-center space-x-2">
          <textarea
            aria-label="chat input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message"
            className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm text-[#030712] placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleClick();
              }
            }}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleClick();
            }}
            className="inline-flex h-10 items-center justify-center rounded-md bg-[#065D63] px-4 py-2 text-sm font-medium text-[#f9fafb] hover:bg-[#111827E6] disabled:pointer-events-none disabled:opacity-50"
            type="submit"
            aria-label="Send"
            disabled={!message || loading}
          >
            <Send />
          </button>
        </form>
      </div>
    </form>
  );
}
