"use client";
import { useState } from 'react';
import styles from "./data.module.css";
import ImageSearcher from './TypesSearcher/ImagesSearcher';
import VADPSearcher from './TypesSearcher/VADPSearcher';
import MeasurementSetSearcher from './TypesSearcher/MeasurementSetSearcher';
import SevenGroupSearcher from './MoleculeSearcher/SevenGroupSearcher';
import SixGroupSearcher from './MoleculeSearcher/SixGroupSearcher';
import FiveGroupSearcher from './MoleculeSearcher/SevenGroupSearcher';

const DataSearcher = () => {

    const [showImage, setShowImage] = useState(false);
    const [showVADP, setShowVADP] = useState(false);
    const [showMeasurement, setShowMeasurement] = useState(false);

    const setOnlyImage = () => {
        setShowImage(true)
        setShowVADP(false)
        setShowMeasurement(false)
    }
    
    const setOnlyVADP = () => {
        setShowImage(false)
        setShowVADP(true)
        setShowMeasurement(false)
    }
    
    const setOnlyMeasurement = () => {
        setShowImage(false)
        setShowVADP(false)
        setShowMeasurement(true)
    }

    const [showSeven, setShowSeven] = useState(false)
    const [showSix, setShowSix] = useState(false)
    const [showFive, setShowFive] = useState(false)
    
    return (
        <div>
            <form className={styles.dataSearcher}>
                <h4>Select category: </h4>
                <div className={styles.dataSearcherRadio}>
                    <span><input type="radio" id="AS" name="category" value="AS_209"></input></span>
                    <label htmlFor="AS">AS_209</label>
                    <span><input type="radio" id="GM" name="category" value="GM_Aur"></input></span>
                    <label htmlFor="GM">GM_Aur</label>
                    <span><input type="radio" id="HD" name="category" value="HD_163296"></input></span>
                    <label htmlFor="HD">HD_163296</label>
                    <span><input type="radio" id="IM" name="category" value="IM_Lup"></input></span>
                    <label htmlFor="IM">IM_Lup</label>
                    <span><input type="radio" id="MWC" name="category" value="MWC_480"></input></span>
                    <label htmlFor="MWC">MWC_480</label>
                    <span><input type="radio" id="aux" name="category" value="Aux"></input></span>
                    <label htmlFor="aux">Aux</label>
                </div>
            </form>
            <form className={styles.dataSearcher}>
                <h4>Select type of data: </h4>
                <div className={styles.dataSearcherRadio}>
                    <span><input type="radio" onChange={()=>setOnlyImage()} id="images" name="category" value="Images"></input></span>
                    <label htmlFor="images">Images</label>
                    <span><input type="radio" onChange={()=>setOnlyVADP()} id="vadp" name="category" value="VADP"></input></span>
                    <label htmlFor="vadp">VADP</label>
                    <span><input type="radio" onChange={()=>setOnlyMeasurement()} id="measurement" name="category" value="Measurement Sets"></input></span>
                    <label htmlFor="measurement">Measurement Sets</label>
                </div>
            </form>
            { showImage ? <div><ImageSearcher showSeven={showSeven} showSix={showSix} showFive={showFive} 
                            setShowSeven={setShowSeven} setShowSix={setShowSix} setShowFive={setShowFive}/> 
                            { showSeven ? <SevenGroupSearcher /> : null} 
                            { showSix ? <SixGroupSearcher /> : null} 
                            { showFive ? <FiveGroupSearcher /> : null} 
                            </div> : null }
            { showVADP ? <VADPSearcher /> : null }
            { showMeasurement ? <MeasurementSetSearcher /> : null }
        </div>
    )
}

export default DataSearcher;