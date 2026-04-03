import React from 'react'

const HeroAnimation = () => {
    return (
        <div className="hero-visual">
            <svg
                className="diagram-svg"
                viewBox="0 0 480 480"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* <!-- Grid lines --> */}
                <defs>
                    <pattern
                        id="grid"
                        width="48"
                        height="48"
                        patternUnits="userSpaceOnUse"
                    >
                        <path
                            d="M 48 0 L 0 0 0 48"
                            fill="none"
                            stroke="#0575BB"
                            stroke-width="0.5"
                            opacity="0.15"
                        />
                    </pattern>
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                </defs>
                <rect width="480" height="480" fill="url(#grid)" />
                {/* <!-- Outer ring --> */}
                <circle
                    cx="240"
                    cy="240"
                    r="180"
                    stroke="#0575BB"
                    stroke-width="1"
                    stroke-dasharray="4 6"
                    opacity="0.3"
                    className="node-ring"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="130"
                    stroke="#0575BB"
                    stroke-width="1"
                    opacity="0.15"
                />
                {/* <!-- Central node --> */}
                <circle
                    cx="240"
                    cy="240"
                    r="48"
                    fill="rgba(5,117,187,0.1)"
                    stroke="#0575BB"
                    stroke-width="2"
                />
                <circle
                    cx="240"
                    cy="240"
                    r="32"
                    fill="#0575BB"
                    filter="url(#glow)"
                />
                <text
                    x="240"
                    y="236"
                    text-anchor="middle"
                    fill="white"
                    font-size="9"
                    font-family="Syne,sans-serif"
                    font-weight="700"
                >
                    AVATA
                </text>
                <text
                    x="240"
                    y="250"
                    text-anchor="middle"
                    fill="rgba(255,255,255,0.8)"
                    font-size="8"
                    font-family="DM Sans,sans-serif"
                >
                    WORKS
                </text>
                {/* <!-- Connector lines --> */}
                <line
                    x1="240"
                    y1="192"
                    x2="240"
                    y2="100"
                    stroke="#0575BB"
                    stroke-width="1.5"
                    className="dash-flow"
                    opacity="0.6"
                />
                <line
                    x1="284"
                    y1="213"
                    x2="380"
                    y2="152"
                    stroke="#00C2FF"
                    stroke-width="1.5"
                    className="dash-flow"
                    opacity="0.6"
                />
                <line
                    x1="284"
                    y1="267"
                    x2="380"
                    y2="328"
                    stroke="#0575BB"
                    stroke-width="1.5"
                    className="dash-flow"
                    opacity="0.6"
                />
                <line
                    x1="240"
                    y1="288"
                    x2="240"
                    y2="380"
                    stroke="#00C2FF"
                    stroke-width="1.5"
                    className="dash-flow"
                    opacity="0.6"
                />
                <line
                    x1="196"
                    y1="267"
                    x2="100"
                    y2="328"
                    stroke="#0575BB"
                    stroke-width="1.5"
                    className="dash-flow"
                    opacity="0.6"
                />
                <line
                    x1="196"
                    y1="213"
                    x2="100"
                    y2="152"
                    stroke="#00C2FF"
                    stroke-width="1.5"
                    className="dash-flow"
                    opacity="0.6"
                />
                {/* <!-- Satellite nodes --> */}
                {/* <!-- Social --> */}
                <circle
                    cx="240"
                    cy="84"
                    r="28"
                    fill="rgba(5,117,187,0.12)"
                    stroke="#0575BB"
                    stroke-width="1.5"
                    className="blink-1"
                />
                <circle
                    cx="240"
                    cy="84"
                    r="6"
                    fill="#0575BB"
                    className="node-pulse"
                />
                <text
                    x="240"
                    y="120"
                    text-anchor="middle"
                    fill="#0575BB"
                    font-size="9"
                    font-family="DM Sans,sans-serif"
                    font-weight="600"
                >
                    Social
                </text>
                {/* <!-- Creative --> */}
                <circle
                    cx="396"
                    cy="136"
                    r="28"
                    fill="rgba(0,194,255,0.1)"
                    stroke="#00C2FF"
                    stroke-width="1.5"
                    className="blink-2"
                />
                <circle cx="396" cy="136" r="6" fill="#00C2FF" />
                <text
                    x="396"
                    y="172"
                    text-anchor="middle"
                    fill="#00C2FF"
                    font-size="9"
                    font-family="DM Sans,sans-serif"
                    font-weight="600"
                >
                    Creative
                </text>
                {/* <!-- Web --> */}
                <circle
                    cx="396"
                    cy="344"
                    r="28"
                    fill="rgba(5,117,187,0.12)"
                    stroke="#0575BB"
                    stroke-width="1.5"
                    className="blink-3"
                />
                <circle cx="396" cy="344" r="6" fill="#0575BB" />
                <text
                    x="396"
                    y="380"
                    text-anchor="middle"
                    fill="#0575BB"
                    font-size="9"
                    font-family="DM Sans,sans-serif"
                    font-weight="600"
                >
                    Web
                </text>
                {/* <!-- Analytics --> */}
                <circle
                    cx="240"
                    cy="396"
                    r="28"
                    fill="rgba(0,194,255,0.1)"
                    stroke="#00C2FF"
                    stroke-width="1.5"
                    className="blink-1"
                />
                <circle cx="240" cy="396" r="6" fill="#00C2FF" />
                <text
                    x="240"
                    y="432"
                    text-anchor="middle"
                    fill="#00C2FF"
                    font-size="9"
                    font-family="DM Sans,sans-serif"
                    font-weight="600"
                >
                    Analytics
                </text>
                {/* <!-- Ads --> */}
                <circle
                    cx="84"
                    cy="344"
                    r="28"
                    fill="rgba(5,117,187,0.12)"
                    stroke="#0575BB"
                    stroke-width="1.5"
                    className="blink-2"
                />
                <circle cx="84" cy="344" r="6" fill="#0575BB" />
                <text
                    x="84"
                    y="380"
                    text-anchor="middle"
                    fill="#0575BB"
                    font-size="9"
                    font-family="DM Sans,sans-serif"
                    font-weight="600"
                >
                    Ads
                </text>
                {/* <!-- AI Engine --> */}
                <circle
                    cx="84"
                    cy="136"
                    r="28"
                    fill="rgba(0,194,255,0.1)"
                    stroke="#00C2FF"
                    stroke-width="1.5"
                    className="blink-3"
                />
                <circle cx="84" cy="136" r="6" fill="#00C2FF" />
                <text
                    x="84"
                    y="172"
                    text-anchor="middle"
                    fill="#00C2FF"
                    font-size="9"
                    font-family="DM Sans,sans-serif"
                    font-weight="600"
                >
                    AI Engine
                </text>
                {/* <!-- Corner label --> */}
                <rect
                    x="12"
                    y="12"
                    width="80"
                    height="22"
                    rx="4"
                    fill="rgba(5,117,187,0.1)"
                    stroke="#0575BB"
                    stroke-width="0.5"
                />
                <text
                    x="52"
                    y="26"
                    text-anchor="middle"
                    fill="#0575BB"
                    font-size="8"
                    font-family="DM Sans,sans-serif"
                    font-weight="600"
                >
                    A.W Digital Agency
                </text>
            </svg>
        </div>)
}

export default HeroAnimation