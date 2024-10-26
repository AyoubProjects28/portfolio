import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { BriefcaseBusiness, LucideIcon, School, ShoppingCart } from "lucide-react"
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

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
                    <div className="flex flex-col gap-4">
                        {WORKS.map((work,index) => (
                            <Work key={index} {...work}/>
                        ))}
                    </div>
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

const SIDE_PROJECTS : SideProjectProps[] = [
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

const WORKS: WorkProps[] = [
    {
        image: "https://media.licdn.com/dms/image/v2/D4D0BAQH-ZV832H4sdA/company-logo_100_100/company-logo_100_100/0/1705572256355/capgemini_logo?e=1737590400&v=beta&t=cFeZ_d7AMDds_Ad3cPnsrNBWXBJtXhGFdd9a0sFp7eE",
        company: "Capgemini",
        role: "Software Engineer Angular/Java for Stellantis",
        date: "Fév.–Juill. 2024",
        url: "/",
        stage: true
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4D0BAQEAY4v1FlZPuw/company-logo_100_100/company-logo_100_100/0/1725886352360/anyosfr_logo?e=1737590400&v=beta&t=XZFoKzlPRUiL3w9oaLVBBsJSFEV57CINVCq0qdDyNmg",
        company: "ANYOS",
        role: "Embedded Software Engineer",
        date: "Janv.–Juin. 2022",
        url: "/",
        stage: true
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQGrA-W-ZIsOoQ/company-logo_100_100/company-logo_100_100/0/1682510702496/xefi_logo?e=1737590400&v=beta&t=68FMYGWAyJz9CHJkt3kUVXOgw7pi_V25VLH2RepXgSk",
        company: "XEFI",
        role: "IT Technician",
        date: "Juin–Juill. 2023",
        url: "/",
        stage: true
    }
];

type WorkProps = {
    image: string,
    company: string,
    role: string,
    date: string,
    url?: string,
    stage?: boolean
};

const Work = (props: WorkProps) => {
    return (
        <a href={props.url} className="inline-flex items-center justify-between w-full hover:bg-accent/50 transition-colors p-1 rounded">
            <div className="gap-4 inline-flex items-center">
                <img src={props.image} alt={props.company} className="w-10 h-10 object-contain rounded-md"/>

                <div className="mr-auto">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">
                            {props.company}
                        </p>
                        {props.stage && <Badge variant="outline">Stage</Badge>}
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {props.role}
                    </p>
                </div>
            </div>
            <p className="text-xs text-end text-muted-foreground">
                {props.date}
            </p>
        </a>
    )
};