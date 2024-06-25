import React from "react";
import Button from "@mui/material/Button";
import DownloadIcon from '@mui/icons-material/Download';

const generateFileContent = () => {
    return "instructions go here";
};

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

const DownloadButton = () => {
    const handleDownload = () => {
      const content = generateFileContent();
      downloadFile(content, 'script.sh', 'text/x-shellscript');
    };
  
    return <Button variant="outlined" onClick={handleDownload} >Download Script {<DownloadIcon></DownloadIcon>}</Button>;
};
  
export default DownloadButton;