import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "./Section"
import { GithubIcon } from "./icons/GithubIcon"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { LinkedinIcon } from "./icons/LinkedinIcon"
import { InstagramIcon } from "./icons/InstagramIcon"

export const Header = () => {
    return (
        <header className="sticky top-0 py-4">
            <Section className="flex items-baseline">
                <h1 className="text-lg font-bold text-primary">ayoubala.com</h1>
                <div className="flex-1"/>
                <ul className="flex items-center gap-2">
                    <Link href="https://github.com/AyoubProjects28" className={cn(buttonVariants({ variant: "outline" }))}>
                        <GithubIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/ayoub-ala-569094156" className={cn(buttonVariants({ variant: "outline" }))}>
                        <LinkedinIcon size={12} className="text-foreground"/>
                    </Link>
                    <Link href="https://www.instagram.com/ayoobdrx28/" className={cn(buttonVariants({ variant: "outline" }))}>
                        <InstagramIcon size={12} className="text-foreground"/>
                    </Link>
                </ul>
            </Section>
        </header>
    )
}