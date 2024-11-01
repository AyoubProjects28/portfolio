import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";
import { Code } from "./Code";

export const Education = () => {
    return (
        <Section className="flex flex-col gap-4 items-start">
            <Badge variant={"outline"} className="text-lg">Education</Badge>
            <h2 className="pb-4 text-4xl font-semibold tracking-tight first:mt-0">
                My journey through academics...
            </h2>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-md text-muted-foreground">2021 - 2024</time>
                    <div className="flex items-start gap-4">
                        <img src="https://esisar.grenoble-inp.fr/uas/alias4/PROPRIETE_LOGO_TERTIAIRE/Grenoble+INP+-+Logo+RS+rond+-+Esisar+%28300x300%29.png" alt="Grenoble INP ESISAR" width={55} height={55} className="m-auto"/>
                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight mb-1">Grenoble INP - Esisar</h3>
                            <p className="text-sm text-muted-foreground">
                                <b>Master&apos;s Degree</b> in <Code>Computer Engineering</Code>, specializing in <i>Embedded Systems</i>. I gained a solid foundation in <b>Java</b> for back-end development and further built on this through <b>self-study</b> in web development.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="mb-10 ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-md text-muted-foreground">2024 (first semester)</time>
                    <div className="flex items-start gap-4">
                        <img src="https://play-lh.googleusercontent.com/Jhku_IAZpspqslD31OfyXQ5bnIi3RzEq8cShPkas9xKpwo4gv926IPykqrXUwCGUBVxu=w240-h480-rw" alt="HUST" width={55} height={55} className="m-auto rounded-md"/>
                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight mb-1">Hanoi University of Science and Technology (HUST)</h3>
                            <p className="text-sm text-muted-foreground">
                                <b>International exchange</b> focused on <Code>Data Science</Code>, <Code>Artificial Intelligence</Code>, <Code>Big Data</Code> and <Code>Data Scructures and Algorithms</Code>. This experience helped me expand my knowledge in advanced technologies and global teamwork.
                            </p>
                        </div>
                    </div>
                </li>
                <li className="ms-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-md text-muted-foreground">2019 - 2021</time>
                    <div className="flex items-start gap-4">
                        <img src="/assets/cpge_image.png" alt="CPGE Lycée Marceaux" width={55} height={55} className="m-auto"/>
                        <div>
                            <h3 className="text-2xl font-semibold tracking-tight mb-1">Preparatory Classes in Mathematics and Physics</h3>
                            <p className="text-sm text-muted-foreground">
                                <b>Intensive coursework</b> that paved my way into <b>engineering school</b>, strengthening my <i>problem-solving</i> skills and <i>analytical abilities</i>.
                            </p>
                        </div>
                    </div>
                </li>
            </ol>
        </Section>
    );
};

