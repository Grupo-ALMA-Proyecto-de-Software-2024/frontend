
interface TeamMember {
    fullName: string;
    institution: string;
    cityCountry: string;
    role: string;
    team: string;
    personalWebsite: string;
    email: string;
    expertise: string;
    photographLink: string;
}

const teamMembers: TeamMember[] = [

    {
        fullName: "Carolina Agurto Gangas",
        institution: "Universidad de Chile",
        cityCountry: "Santiago, Chile",
        role: "Co-I & Data delegee",
        team: "Upper Sco",
        personalWebsite: "https://das.uchile.cl/integrantes/carolina-belen-agurto-gangas/",
        email: "cagurto@das.uchile.cl",
        expertise: "mm-observations, multiwavelegnth analysis, young disks, radiative transfer modeling",
        photographLink: ""
    },
    
    {
        fullName: "Laura Pérez",
        institution: "Universidad de Chile",
        cityCountry: "Santiago, Chile",
        role: "Co-PI",
        team: "Upper Sco",
        personalWebsite: "https://das.uchile.cl/integrantes/laura-perez/",
        email: "lperez@das.uchile.cl",
        expertise: "Protoplanetary Disks, Planet Formation, mm-wave Interferometry",
        photographLink: "https://das.uchile.cl/wp-content/uploads/2020/07/lperez1.jpg"
    },
    
    {
        fullName: "Ke Zhang",
        institution: "University of Wisconsin-Madison",
        cityCountry: "Madison, USA",
        role: "PI",
        team: "N2H+",
        personalWebsite: "http://user.astro.wisc.edu/~kezhang/",
        email: "ke.zhang@wisc.edu",
        expertise: "Protoplanetary disk, Planet formation, Astrochemistry",
        photographLink: "https://www.astro.wisc.edu/wp-content/uploads/sites/1730/2021/11/KZ_photo_187_231_cy_100.jpg"
    },
    
    {
        fullName: "John Carpenter",
        institution: "Joint ALMA Observatory",
        cityCountry: "Santiago, Chile",
        role: "Co-I",
        team: "Upper Sco",
        personalWebsite: "https://www.alma.cl/~jcarpent/",
        email: "john.carpenter@alma.cl",
        expertise: "Protoplanetary disks, mm-wave interferometry",
        photographLink: "https://www.almaobservatory.org/wp-content/uploads/2017/01/John_Carpenter.jpg"
    },
    
    {
        fullName: "Miguel Vioque",
        institution: "European Southern Observatory",
        cityCountry: "Munich, Germany",
        role: "Co-I",
        team: "Lupus",
        personalWebsite: "https://mvioque.github.io",
        email: "miguel.vioque@eso.org",
        expertise: "Star and planet formation, stellar accretion, protoplanetary disks, clustering and environmental properties of forming stars ",
        photographLink: "https://mvioque.github.io/images/profile_large.jpg"
    },
    
    {
        fullName: "Leon Trapman",
        institution: "University of Wisconsin-Madison",
        cityCountry: "Madison, USA",
        role: "Co-I & Data delegee",
        team: "N2H+ & Theory",
        personalWebsite: "nan",
        email: "ltrapman@wisc.edu",
        expertise: "protoplanetary disks, thermochemical modeling, astrochemistry",
        photographLink: ""
    },
    
    {
        fullName: "Camilo González-Ruilova",
        institution: "Universidad Diego Portales - Universidad de Santiago de Chile ",
        cityCountry: "Santiago, Chile",
        role: "Co-I & Data delegee",
        team: "Ophiuchus",
        personalWebsite: "https://astronomia.udp.cl/es/researcher/camilo-gonzalez-ruilova/",
        email: "camilo.gonzalez3@mail.udp.cl",
        expertise: "Protoplanetary disks around substellar and  low mass  YSOs. Outflows and Envelopes around YSOs.",
        photographLink: "https://astronomia.udp.cl/wp-content/uploads/2023/09/017A2678UDP-scaled.jpg"
    },
    
    {
        fullName: "Benoît Tabone",
        institution: "IAS, CNRS, Paris-Saclay University",
        cityCountry: "Orsay, France",
        role: "Co-I",
        team: "Theory",
        personalWebsite: "nan",
        email: "benoit.tabone@universite-paris-saclay.fr",
        expertise: "Protoplanetary disks, astrochemistry, jets and winds, accretion, mm-wave interferometry, infrared spectroscopy spectroscopy",
        photographLink: "https://www.researchgate.net/profile/Benoit-Tabone"
    },
    
    {
        fullName: "Giovanni Rosotti",
        institution: "Dipartimento di Fisica, Università degli Studi di Milano",
        cityCountry: "Milano, Italy",
        role: "Co-I",
        team: "Theory",
        personalWebsite: "https://giovannirosotti.com/",
        email: "giovanni.rosotti@unimi.it",
        expertise: "Proto-planetary discs, accretion disc evolution and angular momentum transfer, disc-planet interaction, (sub)mm interferometry",
        photographLink: "https://giovannirosotti.com/wp-content/uploads/2021/11/img_6141-e1637924475137.jpg?w=685"
    },
    
    {
        fullName: "Paola Pinilla",
        institution: "Mullard Space Science Laboratory, University College London",
        cityCountry: "Holmbury St Mary, Dorking, Surrey, UK",
        role: "Co-PI",
        team: "Theory",
        personalWebsite: "https://paola-pinilla.com/",
        email: "p.pinilla@ucl.ac.uk",
        expertise: "Observations and models of protoplanetary disks ",
        photographLink: "https://www.dropbox.com/scl/fi/uln72deqjs7h3zoh2918x/Pinilla_Paola.jpg?rlkey=9aj5k53sc70d187q3nknsz0dq&dl=0"
    },
    
    {
        fullName: "Rossella Anania",
        institution: "Dipartimento di Fisica, Università degli Studi di Milano",
        cityCountry: "Milano, Italy",
        role: "Co-I",
        team: "Theory",
        personalWebsite: "nan",
        email: "rossella.anania@unimi.it",
        expertise: "Protoplanetary discs, external photoevaporation, numerical modeling",
        photographLink: "https://images.app.goo.gl/BW34yTBfqpSKhzgb9"
    },
    
    {
        fullName: "Anibal Sierra",
        institution: "Mullard Space Science Laboratory, University College London",
        cityCountry: "Dorking, Surrey, UK",
        role: "Co-I & Data delegee",
        team: "Upper Sco",
        personalWebsite: "https://anibalsierram.github.io/",
        email: "a.sierra@ucl.ac.uk",
        expertise: "Protoplanetary disks, radiative transfer, visibility modeling",
        photographLink: "https://anibalsierram.github.io/images/foto_lw.jpeg"
    },
    
    {
        fullName: "Kamber Schwarz",
        institution: "Max Planck Institute for Astronomy",
        cityCountry: "Heidelberg, Germany",
        role: "Co-I",
        team: "Theory",
        personalWebsite: "https://kamberschwarz.com/",
        email: "schwarz@mpia.de",
        expertise: "protoplanetary disks, mm-wave interferometry, infrared spectroscopy, thermochemcial modeling, astrochemistry",
        photographLink: "https://www.mpia.de/employee_images/114580-1660728272?t=eyJ3aWR0aCI6NDI2LCJoZWlnaHQiOjU0OCwiZml0IjoiY3JvcCIsImZpbGVfZXh0ZW5zaW9uIjoid2VicCJ9--27646ab4f30e7fedcf3f03ebd360565617825a1c"
    },
    
    {
        fullName: "Ilaria Pascucci",
        institution: "University of Arizona",
        cityCountry: "Tucson, Arizona, USA",
        role: "Co-PI",
        team: "Lupus",
        personalWebsite: "https://ilariapascucci.com/",
        email: "pascucci@arizona.edu",
        expertise: "protoplanetary disks, planet formation, spectroscopy from optical through to mm, exoplanet demographics",
        photographLink: "https://i0.wp.com/distantearths.com/Ilaria/wp-content/uploads/2014/10/LR-800px-5943_BW.jpg"
    },
    
    {
        fullName: "Lucas Cieza",
        institution: "Universidad Diego Portales",
        cityCountry: "Santiago, Chile",
        role: "Co-I",
        team: "Ophiuchus",
        personalWebsite: "https://astronomia.udp.cl/es/researcher/lucas-cieza/",
        email: "lucas.cieza@mail.udp.cl",
        expertise: "Protoplanetary disks, planet formation",
        photographLink: ""
    },
    
    {
        fullName: "James Miley ",
        institution: "Universidad de Santiago de Chile",
        cityCountry: "Santiago, Chile",
        role: "Co-I",
        team: "Upper Sco",
        personalWebsite: "https://sites.google.com/view/james-miley/home",
        email: "jmiley73@gmail.com",
        expertise: "Planet formation, protoplanetary discs and debris discs",
        photographLink: "https://pbs.twimg.com/profile_images/1537886056720130057/axCPr7Mk_400x400.jpg"
    },
    
    {
        fullName: "Dingshan Deng",
        institution: "University of Arizona",
        cityCountry: "Tucson, Arizona, USA",
        role: "Co-I & Data delegee",
        team: "Lupus",
        personalWebsite: "nan",
        email: "dingshandeng@arizona.edu",
        expertise: "protoplanetary disks, planet formation",
        photographLink: "https://drive.google.com/file/d/1C4cihIFpcK5138elg1JUOm0VMqcTZZKY/view?usp=sharing"
    },
    
    {
        fullName: "Michiel Hogerheijde",
        institution: "Leiden University & University of Amsterdam",
        cityCountry: "Leiden, the Netherlands",
        role: "Co-I",
        team: "nan",
        personalWebsite: "https://www.universiteitleiden.nl/en/staffmembers/michiel-hogerheijde#tab-1",
        email: "michiel@strw.leidenuniv.nl",
        expertise: "Protoplanetary disks, planet formation, interferometry at mm and ir wavelengths",
        photographLink: "https://www.universiteitleiden.nl/binaries/content/gallery/ul2/portraits/science/h/m.-hogerheijde-strw-200.jpg/m.-hogerheijde-strw-200.jpg/d200x250"
    },
    
    {
        fullName: "Aleksandra Kuznetsova",
        institution: "Flatiron Institute; University of Connecticut (from Aug, 2024 --)",
        cityCountry: "NYC, USA; Storrs, CT, USA",
        role: "Co-I",
        team: "Theory",
        personalWebsite: "https://www.astrokuznetsova.com/",
        email: "astro.kuznetsova@gmail.com",
        expertise: "nan",
        photographLink: ""
    },
    
];
