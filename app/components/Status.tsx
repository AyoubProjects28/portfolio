import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { BriefcaseBusiness, Code, Link, LucideIcon, School, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils";

export const Status = () => {
    return (
        <Section className="flex max-md:flex-col items-start gap-4">
            <div className="flex-[3] w-full">
                <Card className="w-full p-4 flex flex-col gap-2 w-full">  
                    <p className="text-lg text-muted-foreground">
                        Side, fun projects.
                    </p>
                    <div className="flex flex-col gap-4">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject key={index} logo={project.logo} title={project.title} description={project.description} url="/" state={project.state as SideProjectState}/>
                        ))}
                    </div>
                </Card>
            </div>
            <div className="flex-[2] w-full flex flex-col gap-4">
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">
                        Work
                    </p>
                </Card>
                <Card className="p-4 flex-1">
                    <p className="text-lg text-muted-foreground">
                        Contact me
                    </p>
                </Card>
            </div>
        </Section>
    )
};

const SIDE_PROJECTS = [
    {
        logo: School,
        title: "Private Tutoring Platform",
        description: "A platform for private tutoring lessons, with the goal of promoting my services as a tutor.",
        url: "https://www.private-tutoring-platform.com",
        state: 'Planned'
    },
    {
        logo: BriefcaseBusiness,
        title: "Software Engineering Portfolio",
        description: "A showcase of my skills and projects in software engineering, built with React.js, Next.js, Shadcn, and Tailwind CSS.",
        url: "https://www.software-engineering-portfolio.com",
        state: 'InProgress'
    },
    {
        logo: ShoppingCart,
        title: "Ecommerce Platform",
        description: "A robust and scalable e-commerce application developed with React, Spring, and MySQL.",
        url: "https://www.ecommerce-platform.com",
        state: 'InProgress'
    }
];

type SideProjectState = "Planned" | "InProgress" | "Completed";

type SideProjectProps = {
    logo: LucideIcon,
    title: string,
    description: string,
    url?: string,
    state: SideProjectState
};

const SideProject = (props: SideProjectProps) => {
    return (
        <a href={props.url} className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
            <span className="bg-accent text-accent-foreground p-3 rounded-sm">
                <props.logo/>
            </span>
            <div>
                <div className="flex items-center justify-between">
                    <div className="text-lg font-semibold">
                        {props.title}
                    </div>
                    <div className={cn(
                        "inline-flex items-center px-2 py-0.5 rounded-sm text-xs font-medium",
                        {
                            Planned: "bg-blue-500 text-blue-100",
                            InProgress: "bg-yellow-500 text-yellow-100",
                            Completed: "bg-green-500 text-green-100",
                        }[props.state],
                    )}>
                        {props.state}
                    </div>
                </div>

                <p className="text-lg text-muted-foreground" style={{ textAlign: "justify" }}>
                    {props.description}
                </p>

            </div>
        </a>
    )
};