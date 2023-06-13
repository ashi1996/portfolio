import { useEffect, useState } from 'react';
import axios from 'axios';

interface LocationData {
  city: string;
  region: string;
  country_name: string;
  latitude: number;
  longitude: number;
}

interface UserLocation {
  ip: string;
  loading: boolean;
}

const useUserLocation = (): UserLocation => {
  const [ip, setIP] = useState('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get<{ ip: string }>('https://api.ipify.org?format=json');
        if(response.data && response.data.ip){
            setIP(response.data.ip);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log('Error fetching IP:', error);
      }
    };
    fetchIP();
  }, []);



  return { ip, loading };
};

export default useUserLocation;
