import React from 'react';
import UploadImage from './components/UploadImage';
import Countdown from './components/Countdown';
import LandingPage from './components/LandingPage';

const routes = {
  '/': () => <LandingPage />,
  '/countdown': () => <Countdown />,
  '/upload_image': () => <UploadImage />
};

export default routes;
