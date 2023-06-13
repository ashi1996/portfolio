declare global {
    interface Window {
      dataLayer: any[]; // Replace 'any' with the appropriate type for your dataLayer
    }
  }

interface GaAnalyticsClickParams {
    event: string;
    label: string;
    pageType: string;
    deviceType: string;
    section: string;
    data?: Record<string, any>;
  }
  
  export const ga_analytics_click = ({
    event,
    label,
    pageType,
    deviceType,
    section,
    data,
  }: GaAnalyticsClickParams) => {
    try {
      const additionalData = data ? { ...data } : '';
      window.dataLayer.push({
        event: event,
        label: label,
        pageType: pageType,
        deviceType: deviceType,
        section: section,
        ...additionalData,
      });
    
    } catch (error) {
      console.log(error);
    }
  };