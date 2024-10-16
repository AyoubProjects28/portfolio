import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils";


const Code = ({ className, ...props}: ComponentPropsWithoutRef<"span">) => {
    return <span {...props} className={cn("bg-accent/30 font-mono border-accent p-1 -m-1", className)}/>;
}

export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start">
        <div className="flex-[2]">
            <h2 className="font-caption text-5xl text-primary">Ayoub Ala</h2>
            <h3 className="text-3xl font-caption">Software Engineer Junior</h3>
            <p>With a strong focus on back-end development, I specialize in <Code>Angular</Code> / <Code>Spring</Code>, 
                but I enjoy leveraging my broader skillset to tackle diverse challenges across the stack.
            </p>
        </div>
        <div className="flex-1">
            <img src="https://avatars.githubusercontent.com/u/151600303?v=4" className="w-full h-auto max-w-xs" alt="ayoub's picture"/>
        </div>
    </Section>
}