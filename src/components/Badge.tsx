import React from 'react'

interface BadgeI {
    text: string;
    style: string;
    textStyle?: string;
}
const Badge = ({ text, style, textStyle }: BadgeI) => {
    return (
        <div>
            <span className={`fw-bold hero-badge ${style}`}>
                <span className="badge-dot"></span>
                <span className={`badge-text text-lg-start text-center fs-lg-6 ${textStyle}`}>{text}</span>
            </span>
        </div>
    )
}

export default Badge