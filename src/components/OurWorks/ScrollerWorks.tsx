import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ScrollerWorks = () => {

    const works = [
        "A-Bay Tours Ltd",
        "Regal Plastic Surgery Centre",
        "Gynescope Specialist Hospital",
        "Flournuts Chinchin",
        "The Roundtable Lekki",
        "Neighbour Tailor",
        "De-ethernex",
        "Hairlyn",
        "Precibelle Events",
        "PREL",
        "Fenuaza Premium Paint",
        "Skinvault Cosmetics"
    ];

    return (
        <div className="container-fluid px-0 mx-0">
            <div className="scroller-container">

                <ul className='scroller-track text-white bg-primary' >
                    {works.map((each, inx) => (
                        <li key={inx} className='item text-foreground p-2 text-white px-0'><small className='d-flex align-items-center'>{each}</small></li>
                    ))}
                </ul>
            </div>
        </div>)
}

export default ScrollerWorks