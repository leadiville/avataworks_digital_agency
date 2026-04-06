import React from 'react'

interface BadgeI {
    text: string;
    style: string;
}
const Badge = ({ text, style }: BadgeI) => {
    return (
        <div>
            <span className={`fw-bold hero-badge ${style}`}>
                <span className="badge-dot"></span>
                <span className="badge-text text-primary text-lg-start text-center">{text}</span>
            </span>
        </div>
    )
}

export default Badge