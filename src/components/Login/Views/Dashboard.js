// src/components/Login/Views/Dashboard.js
import React from 'react';
import UserDashboard from './User_Dashboard';

export function SetBgImage() {
  return (
    <>
      <img
        className="top-section-bg-img-center---img"
        sizes="(max-width: 479px) 80vw, (max-width: 767px) 72vw, (max-width: 991px) 614px, (max-width: 1439px) 78vw, 1108px"
        src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695b_home-v1-hero-bg-image-cryptomatic-webflow-ecommerce-template.jpg"
        srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695b_home-v1-hero-bg-image-cryptomatic-webflow-ecommerce-template-p-500.jpg 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695b_home-v1-hero-bg-image-cryptomatic-webflow-ecommerce-template-p-800.jpg 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695b_home-v1-hero-bg-image-cryptomatic-webflow-ecommerce-template-p-1080.jpg 1080w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695b_home-v1-hero-bg-image-cryptomatic-webflow-ecommerce-template-p-1600.jpg 1600w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695b_home-v1-hero-bg-image-cryptomatic-webflow-ecommerce-template-p-2000.jpg 2000w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695b_home-v1-hero-bg-image-cryptomatic-webflow-ecommerce-template.jpg 2216w"
        style={{
          boxSizing: "border-box",
          border: "0px",
          verticalAlign: "middle",
          zIndex: -1,
          width: "78%",
          maxWidth: "1108px",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          position: "absolute",
          top: "25%",
          left: "0px",
          right: "0px",
          opacity: 1,
          filter: "blur(0px)",
        }}
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  text-size-adjust: 100%;
  font-family: sans-serif;
  height: 100%;
}

body {
  box-sizing: border-box;
  margin: 0px;
  min-height: 100%;
  background-color: #050505;
  color: #afafaf;
  font-family: Objectivity, sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.667em;
}
`,
        }}
      />
    </>
  );
}

export default function MyCopiedSite2() {
  return (
    <>
      <SetBgImage />
      <UserDashboard />
    </>
  );
}