"use client";

import { Battery, Mic, Paperclip, Signal, Video, Wifi, Phone, MoreVertical, ChevronLeft } from "lucide-react";

export function PhoneFrame({
  children,
  className,
  heightClassName = "h-[min(72vh,700px)]",
}: {
  children: React.ReactNode;
  className?: string;
  heightClassName?: string;
}) {
  return (
    <div className={`relative w-full ${className ?? ""}`}>
      <div className="absolute -left-1 top-28 h-14 w-1 rounded-l-md bg-zinc-700" />
      <div className="absolute -left-1 top-44 h-8 w-1 rounded-l-md bg-zinc-700" />
      <div className="absolute -right-1 top-36 h-16 w-1 rounded-r-md bg-zinc-700" />

      <div className="rounded-[2.9rem] bg-zinc-900 p-2.5 shadow-2xl shadow-black/40 ring-1 ring-white/10">
        <div className={`relative flex ${heightClassName} flex-col overflow-hidden rounded-[2.4rem] bg-white text-foreground`}>
          <div className="absolute left-1/2 top-2 z-20 h-6 w-24 -translate-x-1/2 rounded-full bg-zinc-900" />
          {children}
        </div>
      </div>
    </div>
  );
}

export function StatusBar({ time = "14:32" }: { time?: string }) {
  return (
    <div className="flex items-center justify-between bg-wa-dark px-6 pt-3 text-xs font-semibold text-white">
      <span>{time}</span>
      <div className="flex items-center gap-1.5">
        <Signal className="h-3.5 w-3.5" />
        <Wifi className="h-3.5 w-3.5" />
        <Battery className="h-4 w-4" />
      </div>
    </div>
  );
}

export function ChatHeader({
  title,
  status,
  avatar,
}: {
  title: string;
  status: string;
  avatar: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-2 bg-wa-dark px-2 py-2.5 text-white">
      <ChevronLeft className="h-6 w-6" />
      {avatar}
      <div className="min-w-0 flex-1 leading-tight">
        <p className="truncate text-sm font-semibold">{title}</p>
        <p className="text-[11px] text-emerald-100/80">{status}</p>
      </div>
      <Video className="h-5 w-5 text-white/80" />
      <Phone className="h-5 w-5 text-white/80" />
      <MoreVertical className="h-5 w-5 text-white/80" />
    </div>
  );
}

export function ChatInput() {
  return (
    <div className="flex items-center gap-2 bg-zinc-50 px-2 py-2">
      <Paperclip className="h-5 w-5 text-zinc-400" />
      <div className="flex h-10 flex-1 items-center rounded-full bg-white px-4 text-sm text-zinc-400 ring-1 ring-black/5">
        Message
      </div>
      <Mic className="h-5 w-5 text-zinc-400" />
    </div>
  );
}
