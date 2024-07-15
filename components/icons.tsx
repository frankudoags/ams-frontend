import React from "react"

export type IconProps = React.SVGProps<SVGSVGElement>



export const Icons = {
    amsLogo: (props: IconProps) => (
        <svg width="117" height="28" viewBox="0 0 117 28" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M0.84 3.712V28H6.888V16.96H16.2V11.488H6.888V5.824H16.2V0.399998H6.312L0.84 3.712ZM33.912 3.712V28H27.864V16.96H18.36V11.488H27.864V5.824H18.36V0.399998H28.248L33.912 3.712ZM42.5344 0.399998H48.0064L57.8944 9.712V16.96L48.5824 8.176V28H42.5344V0.399998ZM75.6064 0.399998H70.1824L60.2464 9.712V16.96L69.5584 8.176V28H75.6064V0.399998ZM83.7506 3.712V13.84L89.2226 17.104H99.1106V11.488H89.6066V6.064H99.1106V0.399998H89.2226L83.7506 3.712ZM116.823 14.8V24.736L111.159 28H101.463V22.576H110.775V17.104H101.271V11.488H111.159L116.823 14.8ZM89.7986 19.264H83.7506V24.736L89.3666 28H99.1106V22.576H89.7986V19.264ZM116.823 9.328H110.775V6.064H101.271V0.399998H111.159L116.823 3.712V9.328Z" fill="black" />
        </svg>
    )
};

export function ScanFaceIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M3 7V5a2 2 0 0 1 2-2h2" />
            <path d="M17 3h2a2 2 0 0 1 2 2v2" />
            <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
            <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
            <path d="M8 14s1.5 2 4 2 4-2 4-2" />
            <path d="M9 9h.01" />
            <path d="M15 9h.01" />
        </svg>
    )
}


export function XIcon(props: IconProps) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}