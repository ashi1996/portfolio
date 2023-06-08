import { useState } from 'react';

const useFileDownloader = (filePath:string, fileName:string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [downloadError, setDownloadError] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    setDownloadError(false);

    try {
      const response = await fetch(filePath);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      setIsLoading(false);
      console.log('Download success');
      // Additional actions upon successful download
    } catch (error) {
      setIsLoading(false);
      setDownloadError(true);
      console.error('Download error', error);
      // Additional error handling
    }
  };

  return {
    isLoading,
    downloadError,
    handleDownload,
  };
};

export default useFileDownloader;



