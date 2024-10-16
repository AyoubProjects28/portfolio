import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils";
import { AngularIcon } from "./icons/AngularIcon";
import { SpringIcon } from "./icons/SpringIcon";


const Code = ({ className, ...props}: ComponentPropsWithoutRef<"span">) => {
    return <span {...props} className={cn("bg-accent/30 font-mono border border-accent p-1 rounded-sm text-primary whitespace-nowrap", className)}/>;
}

export const Hero = () => {
    return <Section className="flex max-md:flex-col items-start">
        <div className="flex-[2]">
            <h2 className="font-caption text-5xl text-primary">Ayoub Ala</h2>
            <h3 className="text-3xl font-caption">Software Engineer Junior</h3>
            <p>With a strong focus on back-end development, I'm specialized in {" "}
                <Code>
                    <AngularIcon size={16} className="inline"/> Angular
                </Code>
                 - 
                <Code>
                    <SpringIcon size={16} className="inline"/> Spring
                </Code>, 
                but I enjoy leveraging my broader skillset to tackle diverse challenges across the stack.
            </p>
        </div>
        <div className="flex-1">
            <img src="https://avatars.githubusercontent.com/u/151600303?v=4" className="w-full h-auto max-w-xs" alt="ayoub's picture"/>
        </div>
    </Section>
}