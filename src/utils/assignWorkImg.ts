export const assignWorkImg = (title: string | undefined) => {
  const imgData: Record<string, string> = {
    "A-Bay Tours Ltd": "/brands/Works/PREL/Screenshot\ 2026-04-14\ 150834.png",
    "Regal Plastic Surgery Centre": "/brands/Works/Regal Plastic Surgery/Landscape.png"
  };
  return imgData[title ?? 0];
};
