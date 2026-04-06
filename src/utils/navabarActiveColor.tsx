"use client"
import { usePathname } from "next/navigation";

export const setActive = (text: string) => {
    const pathname = usePathname();
    return (text !== pathname) ? "text-primary" : "text-danger";
}

