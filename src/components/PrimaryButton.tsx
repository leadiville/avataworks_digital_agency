import { faPhone, IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IPrimaryBtn {
    icon?: IconDefinition | string;
    text: string;
    className?: string;
}

export default ({ icon, text, className }: IPrimaryBtn) => {

    return (
        <button className={`btn rounded-pill me-2 my-1 text-capitalize "btn-primary" ${className}`}>
            <i className="fas fa-play-circle me-2"><FontAwesomeIcon icon={icon as IconDefinition} width={'auto'} height={'auto'} /></i>
            {text}
        </button>
    )
}