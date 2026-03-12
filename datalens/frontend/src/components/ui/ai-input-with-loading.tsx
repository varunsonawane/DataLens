import { CornerRightUp, Square } from "lucide-react";
import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { useAutoResizeTextarea } from "@/hooks/use-auto-resize-textarea";

interface AIInputWithLoadingProps {
  id?: string;
  placeholder?: string;
  minHeight?: number;
  maxHeight?: number;
  loadingDuration?: number;
  thinkingDuration?: number;
  onSubmit?: (value: string) => void | Promise<void>;
  className?: string;
  autoAnimate?: boolean;
  isResponding?: boolean;
  onStop?: () => void;
}

export function AIInputWithLoading({
  id = "ai-input-with-loading",
  placeholder = "Ask me anything...",
  minHeight = 52,
  maxHeight = 200,
  loadingDuration = 30000,
  thinkingDuration = 1000,
  onSubmit,
  className,
  autoAnimate = false,
  isResponding = false,
  onStop,
}: AIInputWithLoadingProps) {
  const [inputValue, setInputValue] = useState("");
  const [submitted, setSubmitted] = useState(autoAnimate);

  const { textareaRef, adjustHeight } = useAutoResizeTextarea({
    minHeight,
    maxHeight,
  });

  // Sync external isResponding state
  useEffect(() => {
    setSubmitted(isResponding);
  }, [isResponding]);

  const handleSubmit = async () => {
    if (!inputValue.trim() || submitted) return;

    const text = inputValue;
    setInputValue("");
    adjustHeight(true);
    setSubmitted(true);

    await onSubmit?.(text);
  };

  const handleStop = () => {
    setSubmitted(false);
    onStop?.();
  };

  return (
    <div className={cn("w-full py-2 px-3", className)}>
      <div className="relative w-full">
        <div className="relative w-full rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/80 shadow-sm backdrop-blur-sm overflow-hidden focus-within:border-emerald-500/50 focus-within:ring-1 focus-within:ring-emerald-500/20 transition-all">
          <Textarea
            id={id}
            placeholder={placeholder}
            className={cn(
              "w-full bg-transparent border-none ring-0 focus-visible:ring-0 focus-visible:ring-offset-0",
              "pl-4 pr-14 py-3.5",
              "placeholder:text-slate-400 dark:placeholder:text-slate-500",
              "text-slate-900 dark:text-slate-100 resize-none text-sm leading-relaxed",
              "min-h-[52px]"
            )}
            ref={textareaRef}
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              adjustHeight();
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit();
              }
            }}
          />

          {/* Send / Stop button */}
          <div className="absolute right-3 bottom-3">
            {submitted ? (
              <button
                onClick={handleStop}
                className="w-8 h-8 flex items-center justify-center rounded-xl bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 transition-colors group"
                title="Stop generating"
                type="button"
              >
                <Square size={12} className="text-red-400 fill-red-400 group-hover:scale-110 transition-transform" />
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                disabled={!inputValue.trim()}
                className={cn(
                  "w-8 h-8 flex items-center justify-center rounded-xl transition-all",
                  inputValue.trim()
                    ? "bg-emerald-500 hover:bg-emerald-400 shadow-sm shadow-emerald-500/25"
                    : "bg-slate-100 dark:bg-slate-800"
                )}
                type="button"
                title="Send (Enter)"
              >
                <CornerRightUp
                  size={15}
                  className={cn(
                    "transition-colors",
                    inputValue.trim()
                      ? "text-white"
                      : "text-slate-400 dark:text-slate-500"
                  )}
                />
              </button>
            )}
          </div>
        </div>

        {/* Status hint */}
        <p className="text-[10px] text-center mt-1.5 text-slate-400 dark:text-slate-600">
          {submitted ? (
            <span className="flex items-center justify-center gap-1.5">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              AI is thinking…
            </span>
          ) : (
            <span>Enter to send · Shift+Enter for new line</span>
          )}
        </p>
      </div>
    </div>
  );
}
