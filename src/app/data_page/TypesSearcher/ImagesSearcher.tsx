"use client";
import React, { useState, FC } from 'react';
import styles from "../data.module.css";

type showMap = {
    showSeven: boolean;
    showSix: boolean;
    showFive: boolean;
    setShowSeven: (showSeven: boolean) => void;
    setShowSix: (showSix: boolean) => void;
    setShowFive: (shFiveen: boolean) => void;
}

const ImageSearcher: FC<showMap> = ({ showSeven, showSix, showFive,
    setShowSeven, setShowSix, setShowFive }) => {

    const handleClickSeven = () => {
        setShowSeven(true);
        setShowSix(false);
        setShowFive(false);
    }

    const handleClickSix = () => {
        setShowSeven(false);
        setShowSix(true);
        setShowFive(false);
    }

    const handleClickFive = () => {
        setShowSeven(false);
        setShowSix(false);
        setShowFive(true);
    }

    return (
        <form className={styles.dataSearcher}>
            <h4>Select type of image: </h4>
            <div className={styles.dataSearcherRadio}>
                <span><input type="radio" onChange={handleClickSix} id="c-C3H2" name="image" value="c-C3H2"></input></span>
                <label htmlFor="c-C3H2">c-C3H2</label>
                <span><input type="radio" onChange={handleClickSeven} id="H2CO" name="image" value="H2CO"></input></span>
                <label htmlFor="H2CO">H2CO</label>
                <span><input type="radio" onChange={handleClickSix} id="13CN" name="image" value="13CN"></input></span>
                <label htmlFor="13CN">13CN</label>
                <span><input type="radio" onChange={handleClickSeven} id="CH3CN" name="image" value="CH3CN"></input></span>
                <label htmlFor="CH3CN">CH3CN</label>
                <span><input type="radio" onChange={handleClickSix} id="CO" name="image" value="CO"></input></span>
                <label htmlFor="CO">CO</label>
                <span><input type="radio" onChange={handleClickSeven} id="C2H" name="image" value="C2H"></input></span>
                <label htmlFor="C2H">C2H</label>
                <span><input type="radio" onChange={handleClickFive} id="H13CN" name="image" value="H13CN"></input></span>
                <label htmlFor="H13CN">H13CN</label>
                <span><input type="radio" onChange={handleClickSeven} id="HCN" name="image" value="HCN"></input></span>
                <label htmlFor="HCN">HCN</label>
                <span><input type="radio" onChange={handleClickSeven} id="13CO" name="image" value="13CO"></input></span>
                <label htmlFor="13CO">13CO</label>
                <span><input type="radio" onChange={handleClickFive} id="C17O" name="image" value="C17O"></input></span>
                <label htmlFor="C17O">C17O</label>
            </div>
            <div className={styles.dataSearcherRadio}>
                <span><input type="radio" onChange={handleClickFive} id="HCO+" name="image" value="HCO+"></input></span>
                <label htmlFor="HCO+">HCO+</label>
                <span><input type="radio" onChange={handleClickSix} id="N2D+" name="image" value="N2D+"></input></span>
                <label htmlFor="N2D+">N2D+</label>
                <span><input type="radio" onChange={handleClickFive} id="CS" name="image" value="CS"></input></span>
                <label htmlFor="CS">CS</label>
                <span><input type="radio" onChange={handleClickSeven} id="C18O" name="image" value="C18O"></input></span>
                <label htmlFor="C18O">C18O</label>
                <span><input type="radio" onChange={handleClickSeven} id="HC3N" name="image" value="HC3N"></input></span>
                <label htmlFor="HC3N">HC3N</label>
                <span><input type="radio" onChange={handleClickFive} id="H13CO+" name="image" value="H13CO+"></input></span>
                <label htmlFor="H13CO+">H13CO+</label>
                <span><input type="radio" onChange={handleClickFive} id="HC15N" name="image" value="HC15N"></input></span>
                <label htmlFor="HC15N">HC15N</label>
                <span><input type="radio" onChange={handleClickSix} id="DCN" name="image" value="DCN"></input></span>
                <label htmlFor="DCN">DCN</label>
                <span><input type="radio" onChange={handleClickFive} id="CN" name="image" value="CN"></input></span>
                <label htmlFor="CN">CN</label>
            </div>
        </form>
    )
} 

export default ImageSearcher;