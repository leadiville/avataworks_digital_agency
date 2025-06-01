import Image from "next/image";
// import styles from "./page.module.css";

import Navbar from "./components/Navbar";
import { HeroCarousel } from "../../carousels/BootstrapCarousel";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
    </>
  )
}

