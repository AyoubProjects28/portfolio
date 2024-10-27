import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

export const Code = ({ className, ...props}: ComponentPropsWithoutRef<"a">) => {
    return <a {...props} className={cn("bg-accent/30 font-mono border border-accent p-1 rounded-sm text-primary whitespace-nowrap px-1 py-0.5 hover:bg-accent/50 transition-colors", className)}/>;
}