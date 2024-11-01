import { Card } from "@/components/ui/card"
import { Section } from "./Section"
import { ArrowUpRight, BriefcaseBusiness, CircuitBoard, LucideIcon, School, ShoppingCart } from "lucide-react"
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
                    <div className="flex flex-col gap-3">
                        {SIDE_PROJECTS.map((project, index) => (
                            <SideProject key={index} logo={project.logo} title={project.title} description={project.description} url={project.url} state={project.state as SideProjectState}/>
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
                <Card className="p-4 flex-1 flex flex-col gap-2">
                    <p className="text-lg text-muted-foreground">
                        Contact me
                    </p>
                    <ContactCard name="Ayoub Ala" image="https://avatars.githubusercontent.com/u/151600303?v=4" mediumImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgV3rvl_AvDgG9o7p9b_b1sb1ZVChFrvuNQ&s" description="On Linkedin" url="https://www.linkedin.com/in/ayoub-ala-569094156"/>
                    <ContactCard name="ayoubalapro28" image="https://avatars.githubusercontent.com/u/151600303?v=4" mediumImage="https://static.vecteezy.com/system/resources/previews/020/964/377/non_2x/gmail-mail-icon-for-web-design-free-png.png" description="Email me for any inquiries" url="ayoubalapro28@gmail.com"/>
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
        logo: ShoppingCart,
        title: "Ecommerce Platform",
        description: "A robust and scalable e-commerce application developed with React, Spring, and MySQL.",
        url: "https://github.com/AyoubProjects28/ecommerce-app",
        state: 'InProgress'
    },
    {
        logo: BriefcaseBusiness,
        title: "Software Engineering Portfolio",
        description: "A showcase of my skills and projects in software engineering, built with React.js, Next.js, Shadcn, and Tailwind CSS.",
        url: "https://github.com/AyoubProjects28/portfolio",
        state: 'Completed'
    },
    {
        logo: CircuitBoard,
        title: "Arduino Alarm System",
        description: "Intrusion detection system developed with Arduino Uno, using analog signal processing without libraries.",
        state: "Completed"
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
        <a href={props.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded">
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

                <p className="text-lg text-muted-foreground">
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
        url: "https://www.capgemini.com/fr-fr/",
        internship: true
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4D0BAQEAY4v1FlZPuw/company-logo_100_100/company-logo_100_100/0/1725886352360/anyosfr_logo?e=1737590400&v=beta&t=XZFoKzlPRUiL3w9oaLVBBsJSFEV57CINVCq0qdDyNmg",
        company: "ANYOS",
        role: "Embedded Software Engineer",
        date: "Janv.–Juin. 2022",
        url: "https://www.anyos.fr/",
        internship: true
    },
    {
        image: "https://media.licdn.com/dms/image/v2/D4E0BAQGrA-W-ZIsOoQ/company-logo_100_100/company-logo_100_100/0/1682510702496/xefi_logo?e=1737590400&v=beta&t=68FMYGWAyJz9CHJkt3kUVXOgw7pi_V25VLH2RepXgSk",
        company: "XEFI",
        role: "IT Technician",
        date: "Juin–Juill. 2023",
        url: "https://www.xefi.com/",
        internship: true
    }
];

type WorkProps = {
    image: string,
    company: string,
    role: string,
    date: string,
    url?: string,
    internship?: boolean
};

const Work = (props: WorkProps) => {
    return (
        <a href={props.url} target="_blank" rel="noreferrer" className="inline-flex items-center justify-between w-full hover:bg-accent/50 transition-colors p-1 rounded">
            <div className="gap-4 inline-flex items-center">
                <img src={props.image} alt={props.company} className="w-10 h-10 object-contain rounded-md"/>

                <div className="mr-auto">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">
                            {props.company}
                        </p>
                        {props.internship && <Badge variant="outline">Internship</Badge>}
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

type ContactCardProps = {
    image: string,
    mediumImage: string,
    name: string,
    description: string,
    url: string
};

const ContactCard = (props: ContactCardProps) => {
    const isEmail = props.url.match(/^.+@.+\..+$/);
    const url = isEmail ? `mailto:${props.url}?subject=Reaching%20Out%20for%20Potential%20Collaboration&body=Hello%20Ayoub%20ALA,%0A%0AWe%20came%20across%20your%20profile%20and%20are%20interested%20in%20discussing%20a%20potential%20collaboration.%0A%0AWe%20look%20forward%20to%20hearing%20from%20you.%0A%0ABest%20regards,` : props.url;
    return (    
        <a
            href={url}
            className="w-full hover:bg-accent/50 transition-colors p-1 rounded"
            target="_blank"
            rel="noreferrer"
        >
            <Card className="p-3 bg-accent/10 flex items-center gap-4 hover:bg-accent/30 transition-colors group">
                <div className="relative">
                    <img src={props.image} alt={props.name} className="w-10 h-10 rounded-full object-contain"/>
                    <img src={props.mediumImage} alt={props.name} className="w-4 h-4 absolute -bottom-1 -right-1"/>
                </div>
                <div className="mr-auto">
                    <div className="flex items-center gap-2">
                        <p className="text-lg font-semibold">
                            {props.name}
                        </p>
                    </div>
                    <p className="text-xs text-muted-foreground">
                        {props.description}
                    </p>
                </div> 
                <ArrowUpRight className="mr-4 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" size={16}/>
            </Card>
        </a>
    )
};
