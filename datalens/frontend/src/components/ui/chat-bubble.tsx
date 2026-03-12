import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { MessageLoading } from "@/components/ui/message-loading";

// ── ChatBubble ──────────────────────────────────────────────────────────────
interface ChatBubbleProps {
  variant?: "sent" | "received";
  layout?: "default" | "ai";
  className?: string;
  children: React.ReactNode;
}

export function ChatBubble({ variant = "received", layout = "default", className, children }: ChatBubbleProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-2",
        variant === "sent" && "flex-row-reverse",
        className
      )}
    >
      {children}
    </div>
  );
}

// ── ChatBubbleMessage ────────────────────────────────────────────────────────
interface ChatBubbleMessageProps {
  variant?: "sent" | "received";
  isLoading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function ChatBubbleMessage({ variant = "received", isLoading, className, children }: ChatBubbleMessageProps) {
  return (
    <div
      className={cn(
        "rounded-2xl px-4 py-2.5 text-sm max-w-[80%] leading-relaxed",
        variant === "sent"
          ? "bg-black text-white dark:bg-white dark:text-black rounded-tr-sm"
          : "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 rounded-tl-sm",
        className
      )}
    >
      {isLoading ? (
        <div className="flex items-center py-1">
          <MessageLoading />
        </div>
      ) : (
        children
      )}
    </div>
  );
}

// ── ChatBubbleAvatar ─────────────────────────────────────────────────────────
interface ChatBubbleAvatarProps {
  src?: string;
  fallback?: string;
  className?: string;
}

export function ChatBubbleAvatar({ src, fallback = "AI", className }: ChatBubbleAvatarProps) {
  return (
    <Avatar className={cn("h-8 w-8 shrink-0", className)}>
      {src && <AvatarImage src={src} />}
      <AvatarFallback className="text-xs font-semibold bg-gradient-to-br from-emerald-400 to-sky-500 text-white">
        {fallback}
      </AvatarFallback>
    </Avatar>
  );
}

// ── ChatBubbleAction ─────────────────────────────────────────────────────────
interface ChatBubbleActionProps {
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function ChatBubbleAction({ icon, onClick, className }: ChatBubbleActionProps) {
  return (
    <Button variant="ghost" size="icon" className={cn("h-6 w-6", className)} onClick={onClick}>
      {icon}
    </Button>
  );
}

export function ChatBubbleActionWrapper({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("flex items-center gap-1 mt-2", className)}>{children}</div>;
}
