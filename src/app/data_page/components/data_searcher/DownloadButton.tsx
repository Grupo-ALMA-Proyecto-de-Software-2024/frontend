import React, { FC } from "react";
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';
import almaClient from '@api/client';

/**
 * Props for the DownloadButton component.
 */
interface DownloadButtonProps {
  allSelections: Set<string>;
}

/**
 * Generate the content of the file to be downloaded.
 * @returns {string} - The content of the file.
 */
const generateFileContent = (allSelections: Set<string>) => {
    return almaClient.generateDownloadScriptFromString(allSelections);
};

/**
 * Trigger the download of a file with the specified content and filename.
 * @param {string} content - The content of the file.
 * @param {string} filename - The name of the file.
 * @param {string} contentType - The MIME type of the file.
 */
const downloadFile = (url: string, filename: string, contentType: string) => {
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
const DownloadButton: FC<DownloadButtonProps> = ({ allSelections }) => {
    const handleDownload = async () => {
      const url = generateFileContent(allSelections);
      downloadFile(await url, 'script.sh', 'text/x-shellscript');
    };
  
    return (
      <Button 
        sx={{ 
          position: 'fixed', 
          bottom: 20, 
          right: 20,
          backgroundColor: 'white',
          boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
          borderRadius: '4px',
          padding: '8px 16px',
          zIndex: 1000,
          '&:hover': {
            backgroundColor: '#ADD8E6'
          }
        }} 
        variant="outlined" 
        onClick={handleDownload}
        endIcon={<DownloadIcon />}
      >
        DOWNLOAD
      </Button>
    );
};
  
export default DownloadButton;