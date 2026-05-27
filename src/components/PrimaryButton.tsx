import { IconDefinition } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface IPrimaryBtn {
    icon?: IconDefinition | string;
    text: string;
    className?: string;
    onclick?: () => void;
}

export default ({ icon, text, className, onclick }: IPrimaryBtn) => {

    return (
        <button onClick={onclick} className={` ${className} btn rounded text-capitalize py-lg-3 px-lg-5 px-3 py-2 fw-bold border fs-lg-5`}>
            <FontAwesomeIcon icon={icon as IconDefinition} width={50} height={100} className="fs-lg-5" />
            {text}
        </button>
    )
}