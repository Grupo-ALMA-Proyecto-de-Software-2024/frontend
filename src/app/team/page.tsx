import type { Metadata } from "next";
import Image from 'next/image';
import styles from './team.module.css';
import { Collapse } from "antd";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import teamMembers from './data/teamMembers';

export const metadata: Metadata = {
    title: "Alma: Age-PRO - Team",
    description: "Generated by create next app",
  };


const Team = () => {
    return (
        <div className={styles.teamContainer}>
            <div className={styles.teamDescription}>
                <h1>Our Team</h1>
                <p>We are a diverse group of researchers, from different institutions worldwide.</p>
                <h2>We acknowledge funding from:</h2>
                <p>(In alphabetical order)</p>
                <p>&#10025; Agencia Nacional de Investigación, <a href="https://anid.cl/" className="underline">ANID</a></p>
                <p>&#10025; <a href="https://www.humboldt-foundation.de/en/" className="underline">Alexander von Humboldt Foundation</a></p>
                <p>&#10025; Centro de Astrofísica y Tecnologías Afines, <a href="https://cata.cl/" className="underline">CATA</a></p>
                <p>&#10025; European Research Council, <a href="https://erc.europa.eu/homepage" className="underline">ERC</a></p>
                <p>&#10025; <a href="https://www.fondazionecariplo.it/en/index.html" className="underline">Fondazione Cariplo</a></p>
                <p>&#10025; National Radio Astronomy Observatory, <a href="https://public.nrao.edu/" className="underline">NRAO</a></p>
                <p>&#10025; Millennium Nucleus on Young Exoplanets and their Moons, <a href="https://youngexoplanets.github.io/" className="underline">YEMS</a></p>
                <p>&#10025; National Science Foundation, <a href="https://www.nsf.gov/" className="underline">NSF</a></p>
                <p>&#10025; UK Research and Innovation, <a href="https://www.ukri.org/" className="underline">UKRI</a></p>

                <h2>We thank the U.Chile student team that created this site:</h2>
                <p>&#10025; <a href="https://github.com/pabloskewes" className="underline">Pablo Skewes</a></p>
                <p>&#10025; <a href="https://github.com/Diego-Carmona" className="underline">Diego Carmona</a></p>
                <p>&#10025; <a href="https://github.com/nicolascarcamo" className="underline">Nicolás Cárcamo</a></p>
                <p>&#10025; <a href="https://github.com/Lu-desu" className="underline">Luciano Provide</a>l</p>
                <p>&#10025; <a href="https://github.com/bverab" className="underline">Bastián Vera</a></p>
                <p>&#10025; <a href="https://github.com/Franzo1" className="underline">Franz Widerstrom</a></p>
                {/* <h2>Institutions</h2>
                <Image src="/institutions/wisconsinlogo.png" alt="Institution 17" width={250} height={150} />
                <Image src="/institutions/uchilelogo.jpg" alt="Institution 1" width={250} height={100} />
                <Image src="/institutions/ulondonlogo.png" alt="Institution 2" width={250} height={120} />
                <Image src="/institutions/uarizonalogo.png" alt="Institution 3" width={250} height={150} />
                <Image src="/institutions/almajoint.png" alt="Institution 4" width={80} height={100} />
                <Image src="/institutions/astrologo.png" alt="Institution 3" width={250} height={100} />
                <Image src="/institutions/amsterdamlogo.png" alt="Institution 5" width={250} height={100} />
                <Image src="/institutions/cnrslogo.gif" alt="Institution 6" width={100} height={100} />  
                <Image src="/institutions/deglistudilogo.png" alt="Institution 7" width={250} height={50} />
                <Image src="/institutions/leidenlogo.png" alt="Institution 8" width={250} height={100} />
                <Image src="/institutions/maxplancklogo.jpg" alt="Institution 9" width={120} height={80} />
                <Image src="/institutions/mssllogo.jpg" alt="Institution 10" width={200} height={100} />  
                <Image src="/institutions/esologo.png" alt="Institution 11" width={80} height={100} />
                <Image src="/institutions/iaslogo.jpg" alt="Institution 12" width={100} height={100} />
                <Image src="/institutions/parissaclaylogo.png" alt="Institution 13" width={250} height={100} />
                <Image src="/institutions/uconnlogo.png" alt="Institution 14" width={200} height={80} />  
                <Image src="/institutions/udplogo.jpg" alt="Institution 15" width={150} height={150} />
                <Image src="/institutions/usachlogo.png" alt="Institution 16" width={220} height={100} /> */}
                    
            </div>
            <div className={styles.memberGrid}>
                {teamMembers.map(member => (
                    <Collapse key={member.fullName}>
                        <CollapsePanel
                            header={
                                <div className={styles.collapseCard}>
                                    <Image src={`/team/${member.fullName.split(' ')[0].toLowerCase()}.jpg`}
                                        alt={member.fullName}
                                        width={170}
                                        height={170}
                                        className={styles.memberImage}
                                    />
                                    <div className={styles.memberName}>{member.fullName}</div>
                                    <div className={styles.memberRole}>{member.role}</div>
                                    <div className={styles.memberInstitution}>{member.institution}</div>
                                </div>
                            }
                            key={member.fullName}
                            showArrow={false}
                        >
                            <div className={styles.memberInfo}>
                                {member.cityCountry !== "nan" && <p><strong>Location:</strong> {member.cityCountry}</p>}
                                {member.team !== "nan" && <p><strong>AGE-PRO Team:</strong> {member.team}</p>}
                                {member.personalWebsite !== "nan" && <p><strong>Personal Website:</strong> <a href={member.personalWebsite}>{member.personalWebsite}</a></p>}
                                {member.email !== "nan" && <p><strong>Email:</strong> <a href={`mailto:${member.email}`}>{member.email}</a></p>}
                                {member.expertise !== "nan" && <p><strong>Expertise:</strong> {member.expertise}</p>}
                            </div>
                        </CollapsePanel>
                    </Collapse>
                ))}
            </div>
        </div>
    );
};

export default Team;