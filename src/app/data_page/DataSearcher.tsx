"use client";
import { useState } from 'react';
import styles from "./data.module.css";
import { ASTypes, GMTypes, HDTypes, IMTypes, MWCTypes, AuxTypes } from './DataTypes';

const DataSearcher = () => {
    const [showAS,setShowAS] = useState(false);
    const [showGM,setShowGM] = useState(false);
    const [showHD,setShowHD] = useState(false);
    const [showIM,setShowIM] = useState(false);
    const [showMWC,setShowMWC] = useState(false);
    const [showAux,setShowAux] = useState(false);
    return (
        <div className={styles.dataSearcher}>
            <div>
                <h5>AS_209</h5>
                <ASTypes />
            </div>
            <div>
                <h5>GM_Aur</h5>
                <GMTypes />
            </div>
            <div>
                <h5>HD_163296</h5>
                <HDTypes />
            </div>
            <div>
                <h5>IM_Lup</h5>
                <IMTypes />
            </div>
            <div>
                <h5>MWC_480</h5>
                <MWCTypes />
            </div>
            <div>
                <h5>Aux</h5>
                <AuxTypes />
            </div>
        </div>
    )
}

export default DataSearcher;