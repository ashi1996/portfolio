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
  location: LocationData | null;
  loading: boolean;
}

const useUserLocation = (): UserLocation => {
  const [ip, setIP] = useState('');
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchIP = async () => {
      try {
        const response = await axios.get<{ ip: string }>('https://api.ipify.org?format=json');
        if(response.data && response.data.ip){
            setIP(response.data.ip);
        }
      } catch (error) {
        console.log('Error fetching IP:', error);
      }
    };
    fetchIP();
  }, []);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await axios.get<LocationData>(`https://ipapi.co/${ip}/json/`);
        setLocation(response.data);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching location:', error);
      }
    };

    if (ip) {
      fetchLocation();
    }
  }, [ip]);

  return { ip, location, loading };
};

export default useUserLocation;
