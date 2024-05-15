// data/publications.ts

export interface Publication {
    title: string;
    authors: string;
    full_authors: string;
    journalInfo: string;
    summary: string;
    image: string;
    pdfLink: string;
    bibtexLink: string;
    dataLink: string;
    saoNasaLink: string;
}

const publicationsData: Publication[] = [
    {
        title: "MAPS I. Program Overview and Highlights",
        authors: "Öberg et al.",
        full_authors: "Karin I. Öberg, Viviana V. Guzmán, Catherine Walsh, Yuri Aikawa, Edwin A. Bergin, Charles J. Law, Ryan A. Loomis, Felipe Alarcón, Sean M. Andrews, Jaehan Bae, Jennifer B. Bergner, Yann Boehler, Alice S. Booth, Arthur D. Bosman, Jenny K. Calahan, Gianni Cataldi, L. Ilsedore Cleeves, Ian Czekala, Kenji Furuya, Jane Huang, John D. Ilee, Nicolas T. Kurtovic, Romane Le Gal, Yao Liu, Feng Long, François Ménard, Hideko Nomura, Laura M. Pérez, Chunhua Qi, Kamber R. Schwarz, Anibal Sierra, Richard Teague, Takashi Tsukagoshi, Yoshihide Yamato, Merel L. R. van't Hoff, Abygail R. Waggoner, David J. Wilner, Ke Zhang",
        journalInfo: "2021, ApJS, 257, 1",
        summary: "The MAPS project set out to map the distribution of molecules in planet-forming disks at unprecedented detail. The results show an astonishing diversity in abundances and distributions of key chemicals across planet-forming disks, including a wealth of chemical substructures. The inferred range of chemical environment within which planets assemble implies that planetary chemical compositions, including access to water and organics, may vary substantially between one planetary system and another.",
        image: "/MAPS/examplePublication.png",
        pdfLink: "#",
        bibtexLink: "#",
        dataLink: "#",
        saoNasaLink: "#",
    },
    {
        title: "MAPS I. Program Overview and Highlights",
        authors: "Öberg et al.",
        full_authors: "Karin I. Öberg, Viviana V. Guzmán, Catherine Walsh, Yuri Aikawa, Edwin A. Bergin, Charles J. Law, Ryan A. Loomis, Felipe Alarcón, Sean M. Andrews, Jaehan Bae, Jennifer B. Bergner, Yann Boehler, Alice S. Booth, Arthur D. Bosman, Jenny K. Calahan, Gianni Cataldi, L. Ilsedore Cleeves, Ian Czekala, Kenji Furuya, Jane Huang, John D. Ilee, Nicolas T. Kurtovic, Romane Le Gal, Yao Liu, Feng Long, François Ménard, Hideko Nomura, Laura M. Pérez, Chunhua Qi, Kamber R. Schwarz, Anibal Sierra, Richard Teague, Takashi Tsukagoshi, Yoshihide Yamato, Merel L. R. van't Hoff, Abygail R. Waggoner, David J. Wilner, Ke Zhang",
        journalInfo: "2021, ApJS, 257, 1",
        summary: "The MAPS project set out to map the distribution of molecules in planet-forming disks at unprecedented detail. The results show an astonishing diversity in abundances and distributions of key chemicals across planet-forming disks, including a wealth of chemical substructures. The inferred range of chemical environment within which planets assemble implies that planetary chemical compositions, including access to water and organics, may vary substantially between one planetary system and another.",
        image: "/MAPS/examplePublication.png",
        pdfLink: "#",
        bibtexLink: "#",
        dataLink: "#",
        saoNasaLink: "#",
    },
    {
        title: "MAPS I. Program Overview and Highlights",
        authors: "Öberg et al.",
        full_authors: "Karin I. Öberg, Viviana V. Guzmán, Catherine Walsh, Yuri Aikawa, Edwin A. Bergin, Charles J. Law, Ryan A. Loomis, Felipe Alarcón, Sean M. Andrews, Jaehan Bae, Jennifer B. Bergner, Yann Boehler, Alice S. Booth, Arthur D. Bosman, Jenny K. Calahan, Gianni Cataldi, L. Ilsedore Cleeves, Ian Czekala, Kenji Furuya, Jane Huang, John D. Ilee, Nicolas T. Kurtovic, Romane Le Gal, Yao Liu, Feng Long, François Ménard, Hideko Nomura, Laura M. Pérez, Chunhua Qi, Kamber R. Schwarz, Anibal Sierra, Richard Teague, Takashi Tsukagoshi, Yoshihide Yamato, Merel L. R. van't Hoff, Abygail R. Waggoner, David J. Wilner, Ke Zhang",
        journalInfo: "2021, ApJS, 257, 1",
        summary: "The MAPS project set out to map the distribution of molecules in planet-forming disks at unprecedented detail. The results show an astonishing diversity in abundances and distributions of key chemicals across planet-forming disks, including a wealth of chemical substructures. The inferred range of chemical environment within which planets assemble implies that planetary chemical compositions, including access to water and organics, may vary substantially between one planetary system and another.",
        image: "/MAPS/examplePublication.png",
        pdfLink: "#",
        bibtexLink: "#",
        dataLink: "#",
        saoNasaLink: "#",
    },
    // Add more publications as needed
];

/*
// Assuming the backend API endpoint to fetch publications is '/api/publications'
export const fetchPublications = async (): Promise<Publication[]> => {
    const response = await fetch('/api/publications');
    if (!response.ok) {
        throw new Error('Failed to fetch publications');
    }
    return response.json();
};
*/

export default publicationsData;

