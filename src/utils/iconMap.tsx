import { faBasketShopping, faCalendarCheck, faCartShopping, faChartLine, faHandshake, faLaptop, faLightbulb, faPencil, faPeopleGroup, faPlaneDeparture, faRectangleAd, faShirt, faUserDoctor, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { faGears } from "@fortawesome/free-solid-svg-icons/faGears";


export const iconMap: Record<string, IconDefinition> = {
    handshake: faHandshake,
    lightbulb: faLightbulb,
    chartLine: faChartLine,
    gears: faGears,
    pencil: faPencil,
    laptopCode: faLaptop,
    rectangleAd: faRectangleAd
}

export const getCategoryIcon = (category: string) => {
    const map: Record<string, IconDefinition> = {
        "Travel & Tourism": faPlaneDeparture,
        "Healthcare": faUserDoctor,
        "Food": faBasketShopping,
        "Events & Community": faPeopleGroup,
        "E-commerce": faCartShopping,
        "Beauty and Fashion": faShirt,
        "Events": faCalendarCheck
    };

    return map[category] || "fa-briefcase"; // fallback
};
