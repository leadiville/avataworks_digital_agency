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
        <button onClick={onclick} className={`btn rounded text-capitalize p-md-3 px-lg-4 "btn-primary" border border-inherit ${className}`}>
            <FontAwesomeIcon icon={icon as IconDefinition} width={"30px"} height={'auto'} />
            {text}
        </button>
    )
}