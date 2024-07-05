import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';

/**
 * Generate the content of the file to be downloaded.
 * @returns {string} - The content of the file.
 */
const generateFileContent = () => {
    return "instructions go here";
};

/**
 * Trigger the download of a file with the specified content and filename.
 * @param {string} content - The content of the file.
 * @param {string} filename - The name of the file.
 * @param {string} contentType - The MIME type of the file.
 */
const downloadFile = (content: string, filename: string, contentType: string) => {
    const blob = new Blob([content], { type: contentType });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 0);
};

/**
 * DownloadButton component to trigger the download of a file.
 */
const DownloadButton = () => {
    const handleDownload = () => {
      const content = generateFileContent();
      downloadFile(content, 'script.sh', 'text/x-shellscript');
    };
  
    return <Button sx={{ position: 'fixed', 
                        bottom: 128, 
                        right: 96,
                        backgroundColor: 'white',
                        '&:hover': {
                          backgroundColor: '#ADD8E6'
                        } }} 
                  variant="outlined" onClick={handleDownload} >Download {<DownloadIcon />}</Button>;
};
  
export default DownloadButton;