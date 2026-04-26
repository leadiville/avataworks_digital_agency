import { faDotCircle, faList } from '@fortawesome/free-solid-svg-icons';
import { faListOl } from '@fortawesome/free-solid-svg-icons/faListOl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

                <ol type='a' className='scroller-track text-white bg-primary' >
                    {works.map((each, inx) => (
                        <li key={inx} className='item text-foreground p-2 text-white px-lg-0 px-4 fw-bold'><small className='d-flex align-items-center'><FontAwesomeIcon icon={faDotCircle} className='me-2 text-white bg-white rounded'/>{each}</small></li>
                    ))}
                </ol>
            </div>
        </div>)
}

export default ScrollerWorks