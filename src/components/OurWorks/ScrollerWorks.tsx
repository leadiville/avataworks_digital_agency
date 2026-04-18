import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ScrollerWorks = () => {

    const works = ["Neighbor Tailor", "Deeternex", "Floornuts", "Regal", "Deeternex", "Floornuts", "Regal", "Deeternex", "Floornuts", "Regal", "Deeternex", "Floornuts", "Regal", "Deeternex", "Floornuts", "Regal", "Deeternex", "Floornuts", "Regal", "Deeternex", "Floornuts", "Regal", "Deeternex", "Floornuts", "Regal"]

    return (
        <div className="container-fluid px-0 mx-0">
            <div className="scroller-container">

                <ul className='scroller-track bg-primaryLight' >
                    {works.map((each, inx) => (
                        <li key={inx} className='item text-foreground p-2'><small className='d-flex align-items-center'><FontAwesomeIcon icon={faDotCircle} className='text-primary me-2' width={10} height={10} />{each}</small></li>
                    ))}
                </ul>
            </div>
        </div>)
}

export default ScrollerWorks