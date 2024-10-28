import { Badge } from "@/components/ui/badge"
import { Section } from "./Section"
import { AngularIcon } from "./icons/AngularIcon"
import { Code } from "./Code"
import { ReactIcon } from "./icons/ReactIcon"
import { SpringIcon } from "./icons/SpringIcon"

export const Skills = () => {
    return <Section className="flex flex-col gap-4 items-start">
        <Badge variant={"outline"} className="text-lg">Skills</Badge>
        <h2 className="pb-4 text-4xl font-semibold tracking-tight first:mt-0">
            I love working on...
        </h2>
        <div className="flex max-md:flex-col gap-4">
            <div className="flex flex-col gap-2 flex-1">
                <SpringIcon size={42} className="animate-pulse" style={{ animationDuration: "2s" }}/>
                <h3 className="text-2xl font-semibold tracking-tight">Spring & Java</h3>
                <p className="text-sm text-muted-foreground"><Code>Spring</Code> and <Code>Java</Code> are my <b>top choices</b> for building reliable <u>back-end</u> applications. Java is my <i>favorite</i> programming language, and I’m <b>passionate</b> about crafting robust, scalable software solutions.</p>            
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <AngularIcon size={42}/>
                <h3 className="text-2xl font-semibold tracking-tight">Angular</h3>
                <p className="text-sm text-muted-foreground">My <b>main</b> front-end framework is <Code>Angular</Code>. It lets me build <i>responsive</i>, intuitive interfaces that users <u>love</u>. Crafting the front-end is where I bring ideas to life.</p>            
            </div>
            <div className="flex flex-col gap-2 flex-1">
                <ReactIcon size={42} className="animate-spin" style={{animationDuration : "10s"}}/>
                <h3 className="text-2xl font-semibold tracking-tight">React & Next.js</h3>
                <p className="text-sm text-muted-foreground">With <Code>React</Code> and <Code>Next.js</Code>, I create fast, engaging web experiences. I love blending <b>creativity</b> with <b>performance</b> to create a perfect <u>user experience</u>.</p>            
            </div>
        </div>
    </Section>
}