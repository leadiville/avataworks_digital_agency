export const assignWorkImg = (title: string | undefined) => {
  const imgData: Record<string, string> = {
    "A-Bay Tours Ltd": "/Works/A-Bay Tours/ABay-Landscape.webp",
    "Regal Plastic Surgery Centre":
      "/Works/Regal Plastic Surgery/Regal_Landscape.webp",
    "Gynescope Specialist Hospital":
      "/Works/Gynescope/Gynescope_Landscape.webp",
    "Flournuts Chinchin": "/Works/FlourNuts Chinchin/Flournuts_Landscape.webp",
    "The Roundtable Lekki":
      "/Works/The RoundTable Lekki/Theroundtable-LandScape.webp",
    "Neighbour Tailor": "/Works/NeighborTailor/NeighborTailor-Landscape.png",
    "De-ethernex": "/Works/Deethernex/Landscape.png",
    Hairlyn: "/Works/Hairlyn/Hairlyn-Landscape.webp",
    "Precibelle Events": "/Works/Precibelle Events/Precibelle_Landscape.webp",
    PREL: "/Works/PREL/PREL_Landscape.webp",
  };
  return imgData[title ?? 0];
};
