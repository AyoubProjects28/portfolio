import { ComponentPropsWithoutRef } from "react"

export const AngularIcon = (props: ComponentPropsWithoutRef<"svg">  & {size?: number}) => {
    return (
        <svg 
        width={props.size}
        height={props.size}
        viewBox="0 0 256 250" 
        version="1.1" 
        preserveAspectRatio="xMidYMid"
        {...props}
        >
            <g>
                <path d="M256,45.1787083 L246.756071,190.336865 L158.373321,0 L256,45.1787083 Z M194.783035,232.875768 L128.000576,270.981182 L61.2169653,232.875768 L74.7998577,199.957744 L181.200142,199.957744 L194.783035,232.875768 Z M128.000576,72.2488146 L162.994709,157.325468 L93.005291,157.325468 L128.000576,72.2488146 Z M9.14940313,190.336865 L0,45.1787083 L97.626679,0 L9.14940313,190.336865 Z" 
                fill="currentColor"></path>
                <path d="M256,45.1787083 L246.756071,190.336865 L158.373321,0 L256,45.1787083 Z M194.783035,232.875768 L128.000576,270.981182 L61.2169653,232.875768 L74.7998577,199.957744 L181.200142,199.957744 L194.783035,232.875768 Z M128.000576,72.2488146 L162.994709,157.325468 L93.005291,157.325468 L128.000576,72.2488146 Z M9.14940313,190.336865 L0,45.1787083 L97.626679,0 L9.14940313,190.336865 Z" 
                fill="currentColor"></path>
            </g>
        </svg>
    )
}