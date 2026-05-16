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
        <button onClick={onclick} className={`btn rounded text-capitalize px-4 py-3 border border-inherit fw-bold fs-5 ${className}`}>
            <FontAwesomeIcon icon={icon as IconDefinition} width={"40px"} height={'auto'} />
            {text}
        </button>
    )
}