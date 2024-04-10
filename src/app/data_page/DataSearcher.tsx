"use client";
import { useState } from 'react';
import styles from "./data.module.css";
import { ASTypes, GMTypes, HDTypes, IMTypes, MWCTypes, AuxTypes } from './DataTypes';
import { AS_Images, AS_VADP, AS_Measurement } from './data_sections/ASSections';
import { GM_Images, GM_VADP, GM_Measurement } from './data_sections/GMSections';
import { HD_Images, HD_VADP, HD_Measurement } from './data_sections/HDSections';
import { IM_Images, IM_VADP, IM_Measurement } from './data_sections/IMSections';
import { MWC_Images, MWC_VADP, MWC_Measurement } from './data_sections/MWCSections';

const DataSearcher = () => {

    const [showImageAS, setShowImageAS] = useState(false);
    const [showVADPAS, setShowVADPAS] = useState(false);
    const [showMeasurementAS, setShowMeasurementAS] = useState(false);

    const [showImageGM, setShowImageGM] = useState(false);
    const [showVADPGM, setShowVADPGM] = useState(false);
    const [showMeasurementGM, setShowMeasurementGM] = useState(false);

    const [showImageHD, setShowImageHD] = useState(false);
    const [showVADPHD, setShowVADPHD] = useState(false);
    const [showMeasurementHD, setShowMeasurementHD] = useState(false);

    const [showImageIM, setShowImageIM] = useState(false);
    const [showVADPIM, setShowVADPIM] = useState(false);
    const [showMeasurementIM, setShowMeasurementIM] = useState(false);

    const [showImageMWC, setShowImageMWC] = useState(false);
    const [showVADPMWC, setShowVADPMWC] = useState(false);
    const [showMeasurementMWC, setShowMeasurementMWC] = useState(false);

    const handleSetAllFalseAS = () => {
        setShowImageAS(false);
        setShowVADPAS(false);
        setShowMeasurementAS(false);
    }

    const handleSetAllFalseGM = () => {
        setShowImageGM(false);
        setShowVADPGM(false);
        setShowMeasurementGM(false);
    }

    const handleSetAllFalseHD = () => {
        setShowImageHD(false);
        setShowVADPHD(false);
        setShowMeasurementHD(false);
    }

    const handleSetAllFalseIM = () => {
        setShowImageIM(false);
        setShowVADPIM(false);
        setShowMeasurementIM(false);
    }

    const handleSetAllFalseMWC = () => {
        setShowImageMWC(false);
        setShowVADPMWC(false);
        setShowMeasurementMWC(false);
    }

    return (
        <div>
            <div className={styles.dataSearcher}>
                <div>
                    <h5>AS_209</h5>
                    <ASTypes showImageAS={showImageAS} showVADPAS={showVADPAS} showMeasurementAS={showMeasurementAS} 
                    setShowImageAS={setShowImageAS} setShowVADPAS={setShowVADPAS} setShowMeasurementAS={setShowMeasurementAS}
                    onSetAllFalseGM={handleSetAllFalseGM} onSetAllFalseHD={handleSetAllFalseHD} onSetAllFalseIM={handleSetAllFalseIM} onSetAllFalseMWC={handleSetAllFalseMWC} />
                </div>
                <div>
                    <h5>GM_Aur</h5>
                    <GMTypes showImageGM={showImageGM} showVADPGM={showVADPGM} showMeasurementGM={showMeasurementGM} 
                    setShowImageGM={setShowImageGM} setShowVADPGM={setShowVADPGM} setShowMeasurementGM={setShowMeasurementGM}
                    onSetAllFalseAS={handleSetAllFalseAS} onSetAllFalseHD={handleSetAllFalseHD} onSetAllFalseIM={handleSetAllFalseIM} onSetAllFalseMWC={handleSetAllFalseMWC} />
                </div>
                <div>
                    <h5>HD_163296</h5>
                    <HDTypes showImageHD={showImageHD} showVADPHD={showVADPHD} showMeasurementHD={showMeasurementHD} 
                    setShowImageHD={setShowImageHD} setShowVADPHD={setShowVADPHD} setShowMeasurementHD={setShowMeasurementHD}
                    onSetAllFalseAS={handleSetAllFalseAS} onSetAllFalseGM={handleSetAllFalseGM} onSetAllFalseIM={handleSetAllFalseIM} onSetAllFalseMWC={handleSetAllFalseMWC} />
                </div>
                <div>
                    <h5>IM_Lup</h5>
                    <IMTypes showImageIM={showImageIM} showVADPIM={showVADPIM} showMeasurementIM={showMeasurementIM} 
                    setShowImageIM={setShowImageIM} setShowVADPIM={setShowVADPIM} setShowMeasurementIM={setShowMeasurementIM}
                    onSetAllFalseAS={handleSetAllFalseAS} onSetAllFalseGM={handleSetAllFalseGM} onSetAllFalseHD={handleSetAllFalseHD} onSetAllFalseMWC={handleSetAllFalseMWC} />
                </div>
                <div>
                    <h5>MWC_480</h5>
                    <MWCTypes showImageMWC={showImageMWC} showVADPMWC={showVADPMWC} showMeasurementMWC={showMeasurementMWC} 
                    setShowImageMWC={setShowImageMWC} setShowVADPMWC={setShowVADPMWC} setShowMeasurementMWC={setShowMeasurementMWC}
                    onSetAllFalseAS={handleSetAllFalseAS} onSetAllFalseGM={handleSetAllFalseGM} onSetAllFalseHD={handleSetAllFalseHD} onSetAllFalseIM={handleSetAllFalseIM} />
                </div>
                <div>
                    <h5>Aux</h5>
                    <AuxTypes />
                </div>
            </div>
            { showImageAS ? <AS_Images /> : null }
            { showVADPAS ? <AS_VADP /> : null }
            { showMeasurementAS ? <AS_Measurement /> : null }
            { showImageGM ? <GM_Images /> : null }
            { showVADPGM ? <GM_VADP /> : null }
            { showMeasurementGM ? <GM_Measurement /> : null }
            { showImageHD ? <HD_Images /> : null }
            { showVADPHD ? <HD_VADP /> : null }
            { showMeasurementHD ? <HD_Measurement /> : null }
            { showImageIM ? <IM_Images /> : null }
            { showVADPIM ? <IM_VADP /> : null }
            { showMeasurementIM ? <IM_Measurement /> : null }
            { showImageMWC ? <MWC_Images /> : null }
            { showVADPMWC ? <MWC_VADP /> : null }
            { showMeasurementMWC ? <MWC_Measurement /> : null }
        </div>
    )
}

export default DataSearcher;