import { ComponentPropsWithoutRef } from "react"
import { Section } from "./Section"
import { cn } from "@/lib/utils";
import { AngularIcon } from "./icons/AngularIcon";
import { SpringIcon } from "./icons/SpringIcon";

const Code = ({ className, ...props}: ComponentPropsWithoutRef<"a">) => {
    return <a {...props} className={cn("bg-accent/30 font-mono border border-accent p-1 rounded-sm text-primary whitespace-nowrap px-1 py-0.5 hover:bg-accent/50 transition-colors", className)}/>;
}

export const Hero = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[2] flex flex-col gap-2">  
                <h2 className="font-caption text-5xl text-primary font-bold">Ayoub Ala</h2>
                <h3 className="text-3xl font-caption">Software Engineer Junior</h3>
                <p className="text-base">With a strong focus on back-end development, I'm specialized in {" "}

                    <Code className="inline-flex items-center gap-1" href="https://angular.io/">
                        <AngularIcon size={16} className="inline"/>Angular
                    </Code>
                    - 
                    <Code className="inline-flex items-center gap-1" href="https://spring.io/">
                        <SpringIcon size={16} className="inline"/> Spring
                    </Code>, 
                    but I enjoy leveraging my broader skillset to tackle diverse challenges across the stack. Living in {" "}
                    <Code className="inline-flex items-center gap-1">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/langfr-338px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png" style={{width: "16px", height: "auto"}} alt="french flag" className="inline"/> Paris
                    </Code>. 
                </p>
            </div>
            <div className="flex-1 max-md:m-auto ml-auto">
                <img src="https://avatars.githubusercontent.com/u/151600303?v=4" className="w-full h-auto rounded-full max-w-xs max-md:w-56 aspect-square" alt="ayoub's picture"/>
            </div>
        </Section>
    )
}