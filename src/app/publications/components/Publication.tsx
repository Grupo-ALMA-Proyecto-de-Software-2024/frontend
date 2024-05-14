// components/Publication.tsx

import { Publication as PublicationType } from '../data/publications';
import styles from './publication.module.css';
import { Button, Collapse } from 'antd';
import CollapsePanel from "antd/es/collapse/CollapsePanel";


interface Props {
    publication: PublicationType;
}

const Publication = ({ publication }: Props) => {
    return (
        <div className={ styles.publicationContainer }>
            <div className={ styles.imageGallery }>
                <img src={publication.image} alt="Visualization" className={styles.publicationImage} />
            </div>
            <div className={styles.publicationInfo}>
                <h3 className={styles.publicationTitle}>{publication.title}</h3>
                <Collapse
                    ghost
                    expandIconPosition='end'
                    bordered={false}
                    size="small"
                >
                    <CollapsePanel 
                        header={`${publication.authors} ${publication.journalInfo}`}
                        key="1"
                        className={styles.publicationAuthors}
                    >
                        <p className={styles.publicationDetails}>{publication.full_authors}</p>
                    </CollapsePanel>
                </Collapse>
                <p className={styles.publicationDetails}>{publication.summary}</p>
                <div className={styles.publicationLinks}>
                    <Button type="primary" href={publication.pdfLink} className={styles.link}>Arxiv PDF</Button>
                    <Button type="primary" href={publication.saoNasaLink} className={styles.link}>SAO/NASA ADS</Button>
                    <Button type="primary" href={publication.bibtexLink} className={styles.link}>Bibtex</Button>
                    <Button type="primary" href={publication.dataLink} className={styles.link}>Download Data</Button>
                </div>
            </div>
        </div>
    );
};

export default Publication;
