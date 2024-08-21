import React, { useEffect, useState } from 'react';

export default function BgSvg() {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => setActive(true), 1000); // Add delay to see the animation
    }, []);

    return (
        <>
            <style>{`
                /***************************************************
                 * LaRose
                 * https://askander.vercel.app
                 **************************************************/

                svg .svg-elem-1{stroke-dashoffset:4002px;stroke-dasharray:4002px;-webkit-transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0s;transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0s}
                svg.active .svg-elem-1{stroke-dashoffset:8004px}
                svg .svg-elem-2{stroke-dashoffset:1404.7967529296875px;stroke-dasharray:1404.7967529296875px;-webkit-transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.12s;transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.12s}
                svg.active .svg-elem-2{stroke-dashoffset:2809.593505859375px}
                svg .svg-elem-3{stroke-dashoffset:1304.8067626953125px;stroke-dasharray:1304.8067626953125px;-webkit-transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.24s;transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.24s}
                svg.active .svg-elem-3{stroke-dashoffset:2609.613525390625px}
                svg .svg-elem-4{stroke-dashoffset:1055.8489990234375px;stroke-dasharray:1055.8489990234375px;-webkit-transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.36s;transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.36s}
                svg.active .svg-elem-4{stroke-dashoffset:2111.697998046875px}
                svg .svg-elem-5{stroke-dashoffset:1481.9356689453125px;stroke-dasharray:1481.9356689453125px;-webkit-transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.48s;transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.48s}
                svg.active .svg-elem-5{stroke-dashoffset:2963.871337890625px}
                svg .svg-elem-6{stroke-dashoffset:1649.124755859375px;stroke-dasharray:1649.124755859375px;-webkit-transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.6s;transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.6s}
                svg.active .svg-elem-6{stroke-dashoffset:3298.24951171875px}
                svg .svg-elem-7{stroke-dashoffset:4002px;stroke-dasharray:4002px;-webkit-transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.72s;transition:stroke-dashoffset 1s cubic-bezier(0.47,0,0.745,0.715) 0.72s}
                svg.active .svg-elem-7{stroke-dashoffset:8004px}
            `}</style>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlnsSvgjs="http://svgjs.dev/svgjs"
                width="100%"
                height="100%"
                style={{ position: "absolute", zIndex: "-1" }}
                preserveAspectRatio="none"
                viewBox="0 0 1440 560"
                className={active ? 'active' : ''}
            >
                <g mask="url(#SvgjsMask1000)" fill="none">
                    <rect width="1440" height="560" x="0" y="0" fill="#0e2a47" className="svg-elem-1"></rect>
                    <path d="M272.24 660.3C405.88 637.24 466.29 311.02 683.94 307.1 901.59 303.18 889.79 377.1 1095.64 377.1 1301.49 377.1 1402.94 307.35 1507.34 307.1" stroke="rgba(51,121,194,0.58)" strokeWidth="2" className="svg-elem-2"></path>
                    <path d="M393.47 670.79C558.91 654.36 668.36 301.86 946.65 301.67 1224.94 301.48 1348.54 542.58 1499.83 548.07" stroke="rgba(51,121,194,0.58)" strokeWidth="2" className="svg-elem-3"></path>
                    <path d="M797.84 628.61C892.59 616.03 849.89 408.26 1102.39 397.51 1354.9 386.76 1551.12 198.51 1711.5 195.91" stroke="rgba(51,121,194,0.58)" strokeWidth="2" className="svg-elem-4"></path>
                    <path d="M272.75 656.36C454.88 654.18 605.3 453.94 971.17 448.88 1337.05 443.82 1485.82 222.2 1669.6 219.28" stroke="rgba(51,121,194,0.58)" strokeWidth="2" className="svg-elem-5"></path>
                    <path d="M135.99 649.28C298.53 609.37 348.45 178.85 603.44 170.02 858.43 161.19 837.16 240.02 1070.89 240.02 1304.62 240.02 1420.17 170.21 1538.34 170.02" stroke="rgba(51,121,194,0.58)" strokeWidth="2" className="svg-elem-6"></path>
                </g>
                <defs>
                    <mask id="SvgjsMask1000">
                        <rect width="1440" height="560" fill="#ffffff" className="svg-elem-7"></rect>
                    </mask>
                </defs>
            </svg>
        </>
    );
}
