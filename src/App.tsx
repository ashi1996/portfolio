import React, { useEffect } from "react";
import AppRoutes from '../src/appRoutes';
import './App.css';

import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  useEffect(() => {
    AOS.init({duration: 1000});
    AOS.refresh();
  }, []);

  return (
    <AppRoutes />
  );
}

export default App;
