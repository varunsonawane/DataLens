import * as React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAutoScroll } from "@/hooks/use-auto-scroll";
import { cn } from "@/lib/utils";

interface ChatMessageListProps extends React.HTMLAttributes<HTMLDivElement> {
  smooth?: boolean;
}

const ChatMessageList = React.forwardRef<HTMLDivElement, ChatMessageListProps>(
  ({ className, children, smooth = false, ...props }, _ref) => {
    const { scrollRef, isAtBottom, scrollToBottom, disableAutoScroll } = useAutoScroll({
      smooth,
      content: children,
    });

    return (
      <div className="relative w-full h-full">
        <div
          className={cn("flex flex-col w-full h-full px-4 py-3 overflow-y-auto", className)}
          ref={scrollRef}
          onWheel={disableAutoScroll}
          onTouchMove={disableAutoScroll}
          {...props}
        >
          <div className="flex flex-col gap-4">{children}</div>
        </div>

        {!isAtBottom && (
          <Button
            onClick={scrollToBottom}
            size="icon"
            variant="outline"
            className="absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full shadow-md h-8 w-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
            aria-label="Scroll to bottom"
          >
            <ArrowDown className="h-3.5 w-3.5" />
          </Button>
        )}
      </div>
    );
  }
);
ChatMessageList.displayName = "ChatMessageList";

export { ChatMessageList };
