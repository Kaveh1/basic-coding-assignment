import React from "react";
import UploadImage from "./components/UploadImage";
import Countdown from "./components/Countdown";

const routes = {
  "/countdown": () => <Countdown />,
  "/upload_image": () => <UploadImage />
};

export default routes;
