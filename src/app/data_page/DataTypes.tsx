"use client";
import React, { useState, FC } from 'react';
import styles from "./data.module.css";

type ShowAS = {
    showImageAS: boolean;
    showVADPAS: boolean;
    showMeasurementAS: boolean;
    setShowImageAS: (showImageAS: boolean) => void;
    setShowVADPAS: (showVADPAS: boolean) => void;
    setShowMeasurementAS: (showMeasurementAS: boolean) => void;
}

type ShowGM = {
    showImageGM: boolean;
    showVADPGM: boolean;
    showMeasurementGM: boolean;
    setShowImageGM: (showImageGM: boolean) => void;
    setShowVADPGM: (showVADPGM: boolean) => void;
    setShowMeasurementGM: (showMeasurementGM: boolean) => void;
}

type ShowHD = {
    showImageHD: boolean;
    showVADPHD: boolean;
    showMeasurementHD: boolean;
    setShowImageHD: (showImageHD: boolean) => void;
    setShowVADPHD: (showVADPHD: boolean) => void;
    setShowMeasurementHD: (showMeasurementHD: boolean) => void;
}

type ShowIM = {
    showImageIM: boolean;
    showVADPIM: boolean;
    showMeasurementIM: boolean;
    setShowImageIM: (showImageIM: boolean) => void;
    setShowVADPIM: (showVADPIM: boolean) => void;
    setShowMeasurementIM: (showMeasurementIM: boolean) => void;
}

type ShowMWC = {
    showImageMWC: boolean;
    showVADPMWC: boolean;
    showMeasurementMWC: boolean;
    setShowImageMWC: (showImageMWC: boolean) => void;
    setShowVADPMWC: (showVADPMWC: boolean) => void;
    setShowMeasurementMWC: (showMeasurementMWC: boolean) => void;
}

const ASTypes: FC<ShowAS & { onSetAllFalseGM: () => void } & { onSetAllFalseHD: () => void } & { onSetAllFalseIM: () => void } & { onSetAllFalseMWC: () => void } > = ({ 
    showImageAS, showVADPAS, showMeasurementAS, setShowImageAS, setShowVADPAS, setShowMeasurementAS,
    onSetAllFalseGM, onSetAllFalseHD, onSetAllFalseIM, onSetAllFalseMWC }) => {
    const handleClickImage = () => {
        setShowImageAS(!showImageAS);
        setShowVADPAS(false);
        setShowMeasurementAS(false);
        onSetAllFalseGM();
        onSetAllFalseHD();
        onSetAllFalseIM();
        onSetAllFalseMWC();
    }
    const handleClickVADP = () => {
        setShowImageAS(false);
        setShowVADPAS(!showVADPAS);
        setShowMeasurementAS(false);
        onSetAllFalseGM();
        onSetAllFalseHD();
        onSetAllFalseIM();
        onSetAllFalseMWC();
    }
    const handleClickMeasurement = () => {
        setShowImageAS(false);    
        setShowVADPAS(false);
        setShowMeasurementAS(!showMeasurementAS);
        onSetAllFalseGM();
        onSetAllFalseHD();
        onSetAllFalseIM();
        onSetAllFalseMWC();
    }
    return (
        <div>
            <div className={styles.buttonsSearcher}>
                <button onClick={handleClickImage}>Images</button>
                <button onClick={handleClickVADP}>VADP</button>
                <button onClick={handleClickMeasurement}>Measurement Sets</button> 
            </div>
        </div>
    )
}

const GMTypes: FC<ShowGM & { onSetAllFalseAS: () => void } & { onSetAllFalseHD: () => void } & { onSetAllFalseIM: () => void } & { onSetAllFalseMWC: () => void } > = ({ 
    showImageGM, showVADPGM, showMeasurementGM, setShowImageGM, setShowVADPGM, setShowMeasurementGM,
    onSetAllFalseAS, onSetAllFalseHD, onSetAllFalseIM, onSetAllFalseMWC }) => {
    const handleClickImage = () => {
        setShowImageGM(!showImageGM);
        setShowVADPGM(false);
        setShowMeasurementGM(false);
        onSetAllFalseAS();
        onSetAllFalseHD();
        onSetAllFalseIM();
        onSetAllFalseMWC();
    }
    const handleClickVADP = () => {
        setShowImageGM(false);
        setShowVADPGM(!showVADPGM);
        setShowMeasurementGM(false);
        onSetAllFalseAS();
        onSetAllFalseHD();
        onSetAllFalseIM();
        onSetAllFalseMWC();
    }
    const handleClickMeasurement = () => {
        setShowImageGM(false);    
        setShowVADPGM(false);
        setShowMeasurementGM(!showMeasurementGM);
        onSetAllFalseAS();
        onSetAllFalseHD();
        onSetAllFalseIM();
        onSetAllFalseMWC();
    }
    return (
        <div>
            <div className={styles.buttonsSearcher}>
                <button onClick={handleClickImage}>Images</button>
                <button onClick={handleClickVADP}>VADP</button>
                <button onClick={handleClickMeasurement}>Measurement Sets</button> 
            </div>
        </div>
    )
}

const HDTypes: FC<ShowHD & { onSetAllFalseAS: () => void } & { onSetAllFalseGM: () => void } & { onSetAllFalseIM: () => void } & { onSetAllFalseMWC: () => void } > = ({ 
    showImageHD, showVADPHD, showMeasurementHD, setShowImageHD, setShowVADPHD, setShowMeasurementHD,
    onSetAllFalseAS, onSetAllFalseGM, onSetAllFalseIM, onSetAllFalseMWC }) => {
    const handleClickImage = () => {
        setShowImageHD(!showImageHD);
        setShowVADPHD(false);
        setShowMeasurementHD(false);
        onSetAllFalseAS();
        onSetAllFalseGM();
        onSetAllFalseIM();
        onSetAllFalseMWC();
    }
    const handleClickVADP = () => {
        setShowImageHD(false);
        setShowVADPHD(!showVADPHD);
        setShowMeasurementHD(false);
        onSetAllFalseAS();
        onSetAllFalseGM();
        onSetAllFalseIM();
        onSetAllFalseMWC();
    }
    const handleClickMeasurement = () => {
        setShowImageHD(false);    
        setShowVADPHD(false);
        setShowMeasurementHD(!showMeasurementHD);
        onSetAllFalseAS();
        onSetAllFalseGM();
        onSetAllFalseIM();
        onSetAllFalseMWC();
    }
    return (
        <div>
            <div className={styles.buttonsSearcher}>
                <button onClick={handleClickImage}>Images</button>
                <button onClick={handleClickVADP}>VADP</button>
                <button onClick={handleClickMeasurement}>Measurement Sets</button> 
            </div>
        </div>
    )
}

const IMTypes: FC<ShowIM & { onSetAllFalseAS: () => void } & { onSetAllFalseGM: () => void } & { onSetAllFalseHD: () => void } & { onSetAllFalseMWC: () => void } > = ({ 
    showImageIM, showVADPIM, showMeasurementIM, setShowImageIM, setShowVADPIM, setShowMeasurementIM,
    onSetAllFalseAS, onSetAllFalseGM, onSetAllFalseHD, onSetAllFalseMWC }) => {
    const handleClickImage = () => {
        setShowImageIM(!showImageIM);
        setShowVADPIM(false);
        setShowMeasurementIM(false);
        onSetAllFalseAS();
        onSetAllFalseGM();
        onSetAllFalseHD();
        onSetAllFalseMWC();
    }
    const handleClickVADP = () => {
        setShowImageIM(false);
        setShowVADPIM(!showVADPIM);
        setShowMeasurementIM(false);
        onSetAllFalseAS();
        onSetAllFalseGM();
        onSetAllFalseHD();
        onSetAllFalseMWC();
    }
    const handleClickMeasurement = () => {
        setShowImageIM(false);    
        setShowVADPIM(false);
        setShowMeasurementIM(!showMeasurementIM);
        onSetAllFalseAS();
        onSetAllFalseGM();
        onSetAllFalseHD();
        onSetAllFalseMWC();
    }
    return (
        <div>
            <div className={styles.buttonsSearcher}>
                <button onClick={handleClickImage}>Images</button>
                <button onClick={handleClickVADP}>VADP</button>
                <button onClick={handleClickMeasurement}>Measurement Sets</button> 
            </div>
        </div>
    )
}

const MWCTypes: FC<ShowMWC & { onSetAllFalseAS: () => void } & { onSetAllFalseGM: () => void } & { onSetAllFalseHD: () => void } & { onSetAllFalseIM: () => void } > = ({ 
    showImageMWC, showVADPMWC, showMeasurementMWC, setShowImageMWC, setShowVADPMWC, setShowMeasurementMWC,
    onSetAllFalseAS, onSetAllFalseGM, onSetAllFalseHD, onSetAllFalseIM }) => {
    const handleClickImage = () => {
        setShowImageMWC(!showImageMWC);
        setShowVADPMWC(false);
        setShowMeasurementMWC(false);
        onSetAllFalseAS();
        onSetAllFalseGM();
        onSetAllFalseHD();
        onSetAllFalseIM();
    }
    const handleClickVADP = () => {
        setShowImageMWC(false);
        setShowVADPMWC(!showVADPMWC);
        setShowMeasurementMWC(false);
        onSetAllFalseAS();
        onSetAllFalseGM();
        onSetAllFalseHD();
        onSetAllFalseIM();
    }
    const handleClickMeasurement = () => {
        setShowImageMWC(false);    
        setShowVADPMWC(false);
        setShowMeasurementMWC(!showMeasurementMWC);
        onSetAllFalseAS();
        onSetAllFalseGM();
        onSetAllFalseHD();
        onSetAllFalseIM();
    }
    return (
        <div>
            <div className={styles.buttonsSearcher}>
                <button onClick={handleClickImage}>Images</button>
                <button onClick={handleClickVADP}>VADP</button>
                <button onClick={handleClickMeasurement}>Measurement Sets</button> 
            </div>
        </div>
    )
}

const AuxTypes = () => {
    return (
        <div className={styles.buttonsSearcher}>
            <button>Images</button>
            <button>VADP</button>
            <button>Measurement Sets</button> 
        </div>
    )
}

export {ASTypes, GMTypes, HDTypes, IMTypes, MWCTypes, AuxTypes};