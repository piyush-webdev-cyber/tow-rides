"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMessageSquare, FiX, FiSend } from "react-icons/fi";

type ChatAuthor = "user" | "bot";

type ChatMessage = {
  id: string;
  author: ChatAuthor;
  text: string;
  timestamp: number;
};

const cannedResponses: Array<{ keywords: string[]; response: string }> = [
  {
    keywords: ["price", "cost", "charge", "charges"],
    response:
      "Tow Rides shares transparent pricing before dispatch. Share your pickup and drop-off points and we’ll confirm the exact quote instantly.",
  },
  {
    keywords: ["eta", "time", "long", "minutes", "arrive"],
    response:
      "Our average arrival time is under 20 minutes in metro zones. Once we confirm your booking, you’ll receive live driver tracking and status updates.",
  },
  {
    keywords: ["location", "pickup", "drop", "where"],
    response:
      "Let us know your pickup landmark and, if you have one, the drop-off workshop. Our command center will guide the driver right to you.",
  },
  {
    keywords: ["documents", "papers", "insurance", "policy"],
    response:
      "We support basic roadside insurance documentation. Upload or mention your policy details during confirmation and we’ll issue a digital invoice.",
  },
  {
    keywords: ["contact", "number", "call"],
    response:
      "You can call our 24/7 hotline anytime at +91 93160 62600. We’ll stay on the line until help arrives.",
  },
];

const defaultResponse =
  "Thanks for the details! A Tow Rides dispatcher will review your request right away. If this is an emergency, call us at +91 93160 62600 so we can prioritise your rescue.";

const initialGreeting: ChatMessage = {
  id: "welcome",
  author: "bot",
  text: "Hey there! 👋 I’m your Tow Rides assistant. Tell me what happened and where you’re stranded—we’ll get a rescue on the way.",
  timestamp: Date.now(),
};

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([initialGreeting]);
  const [isTyping, setIsTyping] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const stored = sessionStorage.getItem("towrides:chat-open");
    if (stored === "true") {
      setOpen(true);
    }
  }, [mounted]);

  useEffect(() => {
    sessionStorage.setItem("towrides:chat-open", open ? "true" : "false");
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const node = containerRef.current;
    if (!node) return;
    node.scrollTop = node.scrollHeight;
  }, [messages, open, isTyping]);

  const getBotResponse = (input: string): string => {
    const lower = input.toLowerCase();
    for (const { keywords, response } of cannedResponses) {
      if (keywords.some((keyword) => lower.includes(keyword))) {
        return response;
      }
    }
    return defaultResponse;
  };

  const addMessage = (author: ChatAuthor, text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `${author}-${Date.now()}-${Math.random().toString(16).slice(2)}`,
        author,
        text,
        timestamp: Date.now(),
      },
    ]);
  };

  const handleSend = () => {
    const trimmed = message.trim();
    if (trimmed.length === 0) {
      return;
    }
    addMessage("user", trimmed);
    setMessage("");
    setIsTyping(true);

    window.setTimeout(() => {
      addMessage("bot", getBotResponse(trimmed));
      setIsTyping(false);
    }, 900 + Math.random() * 600);
  };

  return (
    <>
      <AnimatePresence>
        {!open && (
          <motion.button
            key="chat-trigger"
            type="button"
            onClick={() => setOpen(true)}
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 60 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border-2 border-black bg-primary px-3 py-2 text-xs font-semibold uppercase tracking-wide text-white shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-primary/40"
            aria-label="Need instant chat"
          >
            <FiMessageSquare className="text-lg" />
            <span className="hidden sm:inline">Chat</span>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-6 right-6 z-50 w-[300px] max-w-[85vw]"
          >
            <div className="overflow-hidden rounded-3xl border-2 border-black bg-white shadow-[0_26px_60px_rgba(0,0,0,0.18)]">
              <div className="flex items-center justify-between bg-primary px-4 py-3 text-white">
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-white/80">Tow Rides</p>
                  <p className="text-lg font-semibold">Instant Support</p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-full border border-white/40 p-2 transition hover:bg-white hover:text-black"
                  aria-label="Close chat"
                >
                  <FiX />
                </button>
              </div>
              <div className="flex max-h-[320px] flex-col gap-4 px-4 py-4 text-sm text-accent-black/80">
                <div
                  ref={containerRef}
                  className="flex-1 space-y-3 overflow-y-auto pr-1"
                  aria-live="polite"
                  aria-label="Support conversation"
                >
                  {messages.map((chatMessage) => (
                    <div
                      key={chatMessage.id}
                      className={`flex ${chatMessage.author === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl border-2 border-black px-4 py-3 text-sm leading-relaxed ${
                          chatMessage.author === "user"
                            ? "bg-primary text-white"
                            : "bg-white text-accent-black shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
                        }`}
                      >
                        {chatMessage.text}
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex justify-start"
                    >
                      <div className="rounded-2xl border-2 border-dashed border-black/20 bg-white px-4 py-3 text-xs uppercase tracking-wide text-accent-black/50">
                        Dispatcher is typing…
                      </div>
                    </motion.div>
                  )}
                </div>
                <div className="space-y-3">
                  <label className="flex flex-col gap-1 text-xs font-semibold uppercase tracking-wide text-accent-black/70">
                    Your Message
                    <div className="flex items-end gap-2">
                      <textarea
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                        placeholder="Describe your location and the problem…"
                        rows={2}
                        className="w-full rounded-2xl border-2 border-black bg-white px-3 py-2 text-sm text-accent-black placeholder:text-accent-black/40 focus:outline-none focus:ring-4 focus:ring-primary/30"
                      />
                      <button
                        type="button"
                        onClick={handleSend}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-black bg-primary text-white transition hover:-translate-y-0.5"
                        aria-label="Send message"
                      >
                        <FiSend />
                      </button>
                    </div>
                  </label>
                </div>
              </div>
              <div className="border-t border-black/10 bg-black/5 px-4 py-2 text-[11px] uppercase tracking-[0.3em] text-accent-black/60">
                24/7 command center
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


