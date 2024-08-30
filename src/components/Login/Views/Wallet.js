import React, {useEffect} from "react";
import fadein from './fadein.css'

const useFadeInEffect = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }, []);
};


function Main() {
  return (
    <>
      <div
        className="top-section top-section-bg-img-center"
        style={{
          boxSizing: "border-box",
          overflow: "hidden",
          zIndex: 1,
          position: "relative",
          paddingTop: "380px",
          paddingBottom: "140px",
        }}
      >
        <div
          className="container-default w-container"
          style={{
            boxSizing: "border-box",
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "1316px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <div
            className="grid-2-columns _1-col-tablet gap-row-8px"
            style={{
              boxSizing: "border-box",
              gap: "28px",
              gridTemplateRows: "auto",
              gridTemplateColumns: "1fr 1fr",
              gridAutoColumns: "1fr",
              alignItems: "center",
              display: "grid",
              rowGap: "8px",
            }}
          >
            <div
              id="w-node-bc6f8e73-abc8-b69a-68e1-73c6d3a67216-710369d3"
              className="inner-container _558px _100-tablet"
              style={{
                boxSizing: "border-box",
                maxWidth: "558px",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <h1
                id="w-node-_64d41687-720e-ca5c-a050-26b768b07fca-710369d3"
                className="display-1 heading-color-gradient mg-bottom-0"
                style={{
                  boxSizing: "border-box",
                  margin: "0.67em 0px",
                  marginTop: "0px",
                  color: "white",
                  letterSpacing: "-2px",
                  fontSize: "72px",
                  fontWeight: 400,
                  lineHeight: "1.167em",
                  marginBottom: "0px",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(135deg, rgb(255, 255, 255) 25%, rgb(216, 230, 247))",
                  backgroundClip: "text",
                }}
              >
                Buy and trade cryptos like never before.
              </h1>
            </div>
            <div
              id="w-node-_64d41687-720e-ca5c-a050-26b768b07fcc-710369d3"
              className="inner-container _504px _100-tablet"
              style={{
                boxSizing: "border-box",
                maxWidth: "504px",
                gridArea: "span 1 / span 1 / span 1 / span 1",
                justifySelf: "end",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <p
                className="color-neutral-100 mg-bottom-32px"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  color: "white",
                  marginBottom: "32px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur eget odio tincidunt diam
                accumsan libero viverra a feugiat libero molestie aenean id
                scelerisque in integer sapien.
              </p>
              <div
                className="buttons-flex-container"
                style={{
                  boxSizing: "border-box",
                  columnGap: "24px",
                  display: "flex",
                }}
              >
                <div
                  className="btn-primary-wrapper"
                  style={{
                    boxSizing: "border-box",
                    borderRadius: "96px",
                    padding: "1px",
                    transition: "transform 0.3s",
                    overflow: "hidden",
                    zIndex: 1,
                    transformStyle: "preserve-3d",
                    display: "inline-block",
                    position: "relative",
                  }}
                >
                  <a
                    className="btn-primary w-button"
                    href="https://wealthwondersworld.webflow.io/home-pages/home-v1#"
                    style={{
                      boxSizing: "border-box",
                      transition: "color 0.3s",
                      border: "0px",
                      cursor: "pointer",
                      display: "inline-block",
                      borderRadius: "96px",
                      padding: "16px 32px",
                      textDecoration: "none",
                      color: "white",
                      textAlign: "center",
                      backgroundColor: "rgba(0, 0, 0, 0)",
                      backgroundImage:
                        "linear-gradient(135deg, rgb(86, 96, 112) 15%, rgb(6, 6, 6))",
                      justifyContent: "center",
                      fontWeight: 500,
                      lineHeight: "1.111em",
                    }}
                  >
                    Get started
                    <span
                      className="line-rounded-icon link-icon-right"
                      style={{
                        boxSizing: "border-box",
                        fontFamily: '"Line Rounded Icons", sans-serif',
                        marginLeft: "6px",
                        display: "inline-block",
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      
                    </span>
                  </a>
                  <div
                    className="btn-primary-border"
                    style={{
                      boxSizing: "border-box",
                      borderRadius: "96px",
                      inset: "0px",
                      zIndex: -1,
                      backgroundImage:
                        "linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0)), linear-gradient(135deg, rgb(86, 96, 112), rgb(6, 6, 6))",
                      position: "absolute",
                    }}
                  />
                </div>
                <a
                  className="btn-secondary w-button"
                  href="https://wealthwondersworld.webflow.io/about"
                  style={{
                    boxSizing: "border-box",
                    cursor: "pointer",
                    display: "inline-block",
                    border: "1px solid rgba(255, 255, 255, 0.26)",
                    borderRadius: "96px",
                    padding: "16px 32px",
                    textDecoration: "none",
                    transition:
                      "border-color 0.3s, transform 0.3s, background-color 0.3s, color 0.3s",
                    boxShadow: "0 4px 10px 0 #14142b0a",
                    color: "white",
                    textAlign: "center",
                    transformStyle: "preserve-3d",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    fontWeight: 500,
                    lineHeight: "1.111em",
                  }}
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </div>
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
            top: "8%",
            left: "0px",
            right: "0px",
            opacity: 1,
            filter: "blur(0px)",
          }}
        />
      </div>
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

function Description() {
  return (
    <>
      <div
        className="w-layout-blockcontainer container-default w-container"
        style={{
          boxSizing: "border-box",
          marginLeft: "auto",
          marginRight: "auto",
          display: "block",
          maxWidth: "1316px",
          paddingLeft: "24px",
          paddingRight: "24px",
        }}
      >
        <div
          className="card features-card"
          style={{
            boxSizing: "border-box",
            border: "1px solid #1e1e1e",
            borderRadius: "24px",
            borderStyle: "none",
            padding: "180px 80px",
            overflow: "hidden",
            zIndex: 1,
            rowGap: "140px",
            backgroundColor: "#050505",
            flexDirection: "column",
            display: "flex",
            position: "relative",
            opacity: 1,
            filter: "blur(0px)",
          }}
        >
          <div
            className="divider inside-card---top"
            style={{
              boxSizing: "border-box",
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0))",
              height: "1px",
              zIndex: 1,
              marginTop: "0px",
              marginBottom: "0px",
              position: "absolute",
              top: "0px",
              left: "0px",
              right: "0px",
            }}
          />
          <img
            className="bg-gradient-top height-26"
            sizes="(max-width: 479px) 93vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1268px"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa8_features-card-bg-top-cryptomatic-webflow-ecommerce-template.png"
            srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa8_features-card-bg-top-cryptomatic-webflow-ecommerce-template-p-500.png 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa8_features-card-bg-top-cryptomatic-webflow-ecommerce-template-p-800.png 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa8_features-card-bg-top-cryptomatic-webflow-ecommerce-template-p-1080.png 1080w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa8_features-card-bg-top-cryptomatic-webflow-ecommerce-template-p-1600.png 1600w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa8_features-card-bg-top-cryptomatic-webflow-ecommerce-template.png 2536w"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              maxWidth: "100%",
              display: "inline-block",
              zIndex: -1,
              objectFit: "cover",
              objectPosition: "50% 0%",
              borderTopLeftRadius: "24px",
              borderTopRightRadius: "24px",
              width: "100%",
              position: "absolute",
              top: "0px",
              left: "0px",
              right: "0px",
              height: "26%",
            }}
          />
          <div
            className="grid-2-columns _1-col-tablet gap-row-64px"
            style={{
              boxSizing: "border-box",
              gap: "28px",
              gridTemplateRows: "auto",
              gridTemplateColumns: "1fr 1fr",
              gridAutoColumns: "1fr",
              alignItems: "center",
              display: "grid",
              rowGap: "64px",
            }}
          >
            <img
              id="w-node-d9e12617-ce03-f00c-c812-d3cd9504d396-710369d3"
              alt="A Crypto Wallet From The Future - Cryptomatic X Webflow Template"
              sizes="(max-width: 479px) 87vw, (max-width: 767px) 86vw, (max-width: 991px) 85vw, (max-width: 1439px) 40vw, 540px"
              src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036951_crypto-wallet-from-the-future-image-cryptomatic-webflow-ecommerce-template.png"
              srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036951_crypto-wallet-from-the-future-image-cryptomatic-webflow-ecommerce-template-p-500.png 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036951_crypto-wallet-from-the-future-image-cryptomatic-webflow-ecommerce-template-p-800.png 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036951_crypto-wallet-from-the-future-image-cryptomatic-webflow-ecommerce-template.png 1084w"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                opacity: 1,
                filter: "blur(0px)",
              }}
            />
            <div
              id="w-node-cab063ba-de9b-9602-7315-1c907aaafdf5-710369d3"
              className="inner-container _466px _100-tablet"
              style={{
                boxSizing: "border-box",
                maxWidth: "466px",
                gridArea: "span 1 / span 1 / span 1 / span 1",
                justifySelf: "end",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <h2
                className="display-2 heading-color-gradient mg-bottom-0"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  color: "white",
                  letterSpacing: "-2px",
                  fontSize: "54px",
                  fontWeight: 400,
                  lineHeight: "1.222em",
                  marginBottom: "0px",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(135deg, rgb(255, 255, 255) 25%, rgb(216, 230, 247))",
                  backgroundClip: "text",
                }}
              >
                A crypto wallet from the future
              </h2>
              <p
                className="mg-bottom-24px"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "24px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur eget odio tincidunt diam
                accumsan libero viverra a feugiat libero molestie aenean id
                scelerisque in integer.
              </p>
              <div
                className="grid-1-column gap-row-20px"
                style={{
                  boxSizing: "border-box",
                  gridTemplateRows: "auto",
                  gridTemplateColumns: "1fr",
                  gridAutoColumns: "1fr",
                  display: "grid",
                  rowGap: "20px",
                }}
              >
                <div
                  id="w-node-eeeea74f-45e3-d157-c1cb-612e32195e1a-710369d3"
                  className="flex align-start gap-column-12px"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    columnGap: "12px",
                    alignItems: "flex-start",
                    gridArea: "span 1 / span 1 / span 1 / span 1",
                  }}
                >
                  <img
                    className="max-w-24px"
                    src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036947_checkmark-circle-cryptomatic-webflow-ecommerce-template.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      display: "inline-block",
                      maxWidth: "24px",
                    }}
                  />
                  <div
                    className="mg-top-2px"
                    style={{ boxSizing: "border-box", marginTop: "2px" }}
                  >
                    <div
                      className="text-200 medium color-neutral-100"
                      style={{
                        boxSizing: "border-box",
                        color: "white",
                        fontSize: "18px",
                        lineHeight: "1.111em",
                        fontWeight: 500,
                      }}
                    >
                      Lowest fees in market
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-_54e3bb24-a139-4870-b2c5-323aaf8892d6-710369d3"
                  className="flex align-start gap-column-12px"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    columnGap: "12px",
                    alignItems: "flex-start",
                    gridArea: "span 1 / span 1 / span 1 / span 1",
                  }}
                >
                  <img
                    className="max-w-24px"
                    src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036947_checkmark-circle-cryptomatic-webflow-ecommerce-template.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      display: "inline-block",
                      maxWidth: "24px",
                    }}
                  />
                  <div
                    className="mg-top-2px"
                    style={{ boxSizing: "border-box", marginTop: "2px" }}
                  >
                    <div
                      className="text-200 medium color-neutral-100"
                      style={{
                        boxSizing: "border-box",
                        color: "white",
                        fontSize: "18px",
                        lineHeight: "1.111em",
                        fontWeight: 500,
                      }}
                    >
                      Fast and secure transactions
                    </div>
                  </div>
                </div>
                <div
                  id="w-node-cdeee600-bb00-e114-7f3f-624dfc40fd6a-710369d3"
                  className="flex align-start gap-column-12px"
                  style={{
                    boxSizing: "border-box",
                    display: "flex",
                    columnGap: "12px",
                    alignItems: "flex-start",
                    gridArea: "span 1 / span 1 / span 1 / span 1",
                  }}
                >
                  <img
                    className="max-w-24px"
                    src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036947_checkmark-circle-cryptomatic-webflow-ecommerce-template.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      display: "inline-block",
                      maxWidth: "24px",
                    }}
                  />
                  <div
                    className="mg-top-2px"
                    style={{ boxSizing: "border-box", marginTop: "2px" }}
                  >
                    <div
                      className="text-200 medium color-neutral-100"
                      style={{
                        boxSizing: "border-box",
                        color: "white",
                        fontSize: "18px",
                        lineHeight: "1.111em",
                        fontWeight: 500,
                      }}
                    >
                      256-bit secure encryption
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="grid-2-columns _1-col-tablet gap-row-64px"
            style={{
              boxSizing: "border-box",
              gap: "28px",
              gridTemplateRows: "auto",
              gridTemplateColumns: "1fr 1fr",
              gridAutoColumns: "1fr",
              alignItems: "center",
              display: "grid",
              rowGap: "64px",
            }}
          >
            <div
              id="w-node-_9c982f23-6476-11a0-8453-f03d00152055-710369d3"
              className="inner-container _530px _100-tablet"
              style={{
                boxSizing: "border-box",
                maxWidth: "530px",
                gridArea: "span 1 / span 1 / span 1 / span 1",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <h2
                className="display-2 heading-color-gradient mg-bottom-0"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  color: "white",
                  letterSpacing: "-2px",
                  fontSize: "54px",
                  fontWeight: 400,
                  lineHeight: "1.222em",
                  marginBottom: "0px",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(135deg, rgb(255, 255, 255) 25%, rgb(216, 230, 247))",
                  backgroundClip: "text",
                }}
              >
                Bulletproof security by design
              </h2>
              <p
                className="mg-bottom-0"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur eget odio tincidunt diam
                accumsan libero viverra a feugiat.
              </p>
              <div
                className="divider _40px _24px-tablet"
                style={{
                  boxSizing: "border-box",
                  backgroundImage:
                    "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0))",
                  height: "1px",
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              />
              <div
                className="inner-container _420px _100-tablet"
                style={{ boxSizing: "border-box", maxWidth: "420px" }}
              >
                <div
                  className="grid-2-columns _2-col-mbl gap-row-24px"
                  style={{
                    boxSizing: "border-box",
                    gap: "28px",
                    gridTemplateRows: "auto",
                    gridTemplateColumns: "1fr 1fr",
                    gridAutoColumns: "1fr",
                    alignItems: "center",
                    display: "grid",
                    rowGap: "24px",
                  }}
                >
                  <div
                    id="w-node-_939053c0-b8af-a969-68fa-38cd4ba2b745-710369d3"
                    style={{
                      boxSizing: "border-box",
                      gridArea: "span 1 / span 1 / span 1 / span 1",
                      alignSelf: "start",
                    }}
                  >
                    <div
                      className="display-3 mg-bottom-4px"
                      style={{
                        boxSizing: "border-box",
                        color: "white",
                        fontSize: "34px",
                        fontWeight: 400,
                        lineHeight: "1.294em",
                        marginBottom: "4px",
                      }}
                    >
                      0.
                    </div>
                    <div style={{ boxSizing: "border-box" }}>
                      Security incidents
                    </div>
                  </div>
                  <div
                    id="w-node-_80e70f76-90bc-f508-a125-0bd5a72d1f79-710369d3"
                    style={{
                      boxSizing: "border-box",
                      gridArea: "span 1 / span 1 / span 1 / span 1",
                      alignSelf: "start",
                    }}
                  >
                    <div
                      className="display-3 mg-bottom-4px"
                      style={{
                        boxSizing: "border-box",
                        color: "white",
                        fontSize: "34px",
                        fontWeight: 400,
                        lineHeight: "1.294em",
                        marginBottom: "4px",
                      }}
                    >
                      256bits
                    </div>
                    <div style={{ boxSizing: "border-box" }}>
                      AES Encryption
                    </div>
                  </div>
                  <div
                    id="w-node-_1a25ddf3-c6b2-b040-dd70-57fbffbd677d-710369d3"
                    style={{
                      boxSizing: "border-box",
                      gridArea: "span 1 / span 1 / span 1 / span 1",
                      alignSelf: "start",
                    }}
                  >
                    <div
                      className="display-3 mg-bottom-4px"
                      style={{
                        boxSizing: "border-box",
                        color: "white",
                        fontSize: "34px",
                        fontWeight: 400,
                        lineHeight: "1.294em",
                        marginBottom: "4px",
                      }}
                    >
                      100%
                    </div>
                    <div style={{ boxSizing: "border-box" }}>
                      Encrypted data
                    </div>
                  </div>
                  <div
                    id="w-node-_891a2990-ddf3-8049-ece8-67cd3058d43e-710369d3"
                    style={{
                      boxSizing: "border-box",
                      gridArea: "span 1 / span 1 / span 1 / span 1",
                      alignSelf: "start",
                    }}
                  >
                    <div
                      className="display-3 mg-bottom-4px"
                      style={{
                        boxSizing: "border-box",
                        color: "white",
                        fontSize: "34px",
                        fontWeight: 400,
                        lineHeight: "1.294em",
                        marginBottom: "4px",
                      }}
                    >
                      CISA+
                    </div>
                    <div style={{ boxSizing: "border-box" }}>
                      Security certification
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-_25a48a09-9f85-c5e7-3813-0bdbb12e9cce-710369d3"
              className="max-w-464px max-w-100-tablet"
              style={{
                boxSizing: "border-box",
                maxWidth: "464px",
                justifySelf: "end",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <img
                id="w-node-_9c982f23-6476-11a0-8453-f03d00152054-710369d3"
                alt="Bulletproof Security - Cryptomatic X Webflow Template"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 86vw, (max-width: 991px) 85vw, (max-width: 1439px) 39vw, 464px"
                src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036949_bulletproof-security-image-cryptomatic-webflow-ecommerce-template.png"
                srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036949_bulletproof-security-image-cryptomatic-webflow-ecommerce-template-p-500.png 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036949_bulletproof-security-image-cryptomatic-webflow-ecommerce-template.png 924w"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                }}
              />
            </div>
          </div>
          <img
            className="bg-gradient-bottom height-26"
            sizes="(max-width: 479px) 93vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1268px"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa7_features-card-bg-bottom-cryptomatic-webflow-ecommerce-template.png"
            srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa7_features-card-bg-bottom-cryptomatic-webflow-ecommerce-template-p-500.png 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa7_features-card-bg-bottom-cryptomatic-webflow-ecommerce-template-p-800.png 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa7_features-card-bg-bottom-cryptomatic-webflow-ecommerce-template-p-1080.png 1080w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa7_features-card-bg-bottom-cryptomatic-webflow-ecommerce-template-p-1600.png 1600w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036aa7_features-card-bg-bottom-cryptomatic-webflow-ecommerce-template.png 2536w"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              maxWidth: "100%",
              display: "inline-block",
              zIndex: -1,
              objectFit: "cover",
              objectPosition: "50% 100%",
              borderBottomRightRadius: "24px",
              borderBottomLeftRadius: "24px",
              width: "100%",
              position: "absolute",
              bottom: "0px",
              left: "0px",
              right: "0px",
              height: "26%",
            }}
          />
          <div
            className="divider inside-card---bottom"
            style={{
              boxSizing: "border-box",
              backgroundImage:
                "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0))",
              height: "1px",
              zIndex: 1,
              marginTop: "0px",
              marginBottom: "0px",
              position: "absolute",
              bottom: "0px",
              left: "0px",
              right: "0px",
            }}
          />
        </div>
      </div>
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

function Description2() {

  useFadeInEffect();

  return (
    <div
      className="w-layout-blockcontainer container-default w-container fade-in"
      style={{
        boxSizing: "border-box",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        maxWidth: "1316px",
        paddingLeft: "24px",
        paddingRight: "24px",
      }}
    >
      <section
        className="section"
        style={{
          boxSizing: "border-box",
          display: "block",
          paddingTop: "240px",
          paddingBottom: "240px",
        }}
      >
        <div
          className="w-layout-blockcontainer container-default w-container"
          style={{
            boxSizing: "border-box",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            maxWidth: "1316px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <div
            className="heading-and-content-grid mg-bottom-32px mg-bottom-48px-tablet"
            style={{
              boxSizing: "border-box",
              marginBottom: "32px",
              columnGap: "40px",
              gridTemplateRows: "auto",
              gridTemplateColumns: "1fr auto",
              gridAutoColumns: "1fr",
              justifyContent: "space-between",
              alignItems: "flex-end",
              display: "grid",
            }}
          >
            <div
              className="inner-container _724px _100-tablet"
              style={{
                boxSizing: "border-box",
                maxWidth: "724px",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <h2
                className="display-2 heading-color-gradient mg-bottom-0"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  color: "white",
                  letterSpacing: "-2px",
                  fontSize: "54px",
                  fontWeight: 400,
                  lineHeight: "1.222em",
                  marginBottom: "0px",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(135deg, rgb(255, 255, 255) 25%, rgb(216, 230, 247))",
                  backgroundClip: "text",
                }}
              >
                Fully featured to buy, trade and invest in crypto
              </h2>
            </div>
            <a
              className="btn-secondary w-button"
              href="https://wealthwondersworld.webflow.io/features"
              style={{
                boxSizing: "border-box",
                cursor: "pointer",
                display: "inline-block",
                border: "1px solid rgba(255, 255, 255, 0.26)",
                borderRadius: "96px",
                padding: "16px 32px",
                textDecoration: "none",
                transition:
                  "border-color 0.3s, transform 0.3s, background-color 0.3s, color 0.3s",
                boxShadow: "0 4px 10px 0 #14142b0a",
                color: "white",
                textAlign: "center",
                transformStyle: "preserve-3d",
                backgroundColor: "rgba(0, 0, 0, 0)",
                fontWeight: 500,
                lineHeight: "1.111em",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              Browse all features
            </a>
          </div>
          <div
            className="grid-2-columns _1-col-tablet gap-row-64px"
            style={{
              boxSizing: "border-box",
              gap: "28px",
              gridTemplateRows: "auto",
              gridTemplateColumns: "1fr 1fr",
              gridAutoColumns: "1fr",
              alignItems: "center",
              display: "grid",
              rowGap: "64px",
            }}
          >
            <a
              id="w-node-_504ad8f7-e46e-0225-87f4-1a917b8e2a87-710369d3"
              className="text-decoration-none w-inline-block"
              href="https://wealthwondersworld.webflow.io/features"
              style={{
                boxSizing: "border-box",
                backgroundColor: "rgba(0, 0, 0, 0)",
                transition: "color 0.3s",
                color: "white",
                maxWidth: "100%",
                display: "inline-block",
                textDecoration: "none",
                gridArea: "span 1 / span 1 / span 1 / span 1",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <img
                className="link-item-dark-image mg-bottom-24px"
                alt="Easy To Create Wallet - Cryptomatic X Webflow Template"
                sizes="(max-width: 479px) 100vw, (max-width: 991px) 95vw, (max-width: 1439px) 47vw, 620px"
                src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036958_easy-to-create-wallet-image-cryptomatic-webflow-ecommerce-template.png"
                srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036958_easy-to-create-wallet-image-cryptomatic-webflow-ecommerce-template-p-500.png 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036958_easy-to-create-wallet-image-cryptomatic-webflow-ecommerce-template-p-800.png 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036958_easy-to-create-wallet-image-cryptomatic-webflow-ecommerce-template.png 1240w"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                  marginBottom: "24px",
                  filter: "saturate(100%) contrast(100%)",
                }}
              />
              <div
                className="flex align-start gap-column-16px"
                style={{
                  boxSizing: "border-box",
                  columnGap: "16px",
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img
                  className="max-w-48px max-w-40px-mbl"
                  alt="Easy To Create Wallet - Cryptomatic X Webflow Template"
                  src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036956_easy-to-create-wallet-circle-image-cryptomatic-webflow-ecommerce-template.png"
                  style={{
                    boxSizing: "border-box",
                    border: "0px",
                    verticalAlign: "middle",
                    display: "inline-block",
                    maxWidth: "48px",
                  }}
                />
                <div
                  className="grid-1-column gap-row-12px width-100"
                  style={{
                    boxSizing: "border-box",
                    gridTemplateRows: "auto",
                    gridTemplateColumns: "1fr",
                    gridAutoColumns: "1fr",
                    display: "grid",
                    width: "100%",
                    rowGap: "12px",
                  }}
                >
                  <div
                    className="flex align-center space-between"
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h3
                      className="display-3 link-heading-white mg-bottom-0"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        fontSize: "34px",
                        fontWeight: 400,
                        lineHeight: "1.294em",
                        marginBottom: "0px",
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      Easy to create wallet
                    </h3>
                    <div
                      className="line-rounded-icon diagonal-link-arrow icon-size-24px"
                      style={{
                        boxSizing: "border-box",
                        fontFamily: '"Line Rounded Icons", sans-serif',
                        lineHeight: "1em",
                        color: "white",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "24px",
                        maxWidth: "24px",
                        minHeight: "24px",
                        maxHeight: "24px",
                        marginLeft: "12px",
                        fontSize: "24px",
                        display: "flex",
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      
                    </div>
                  </div>
                  <div
                    className="inner-container _500px _100-tablet"
                    style={{ boxSizing: "border-box", maxWidth: "500px" }}
                  >
                    <p
                      className="color-neutral-400 mg-bottom-0"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        color: "#afafaf",
                        marginBottom: "0px",
                      }}
                    >
                      Lorem ipsum dolor sit amet consectetur eget odio tincidunt
                      diam accumsan libero viverra a feugiat libero molestie non
                      aenean id lorem scelerisque in integer.
                    </p>
                  </div>
                </div>
              </div>
            </a>
            <div
              id="w-node-b8daf65b-1856-e8ac-c4a3-892e948f8268-710369d3"
              className="inner-container _580px _100-tablet"
              style={{
                boxSizing: "border-box",
                maxWidth: "580px",
                width: "100%",
                gridArea: "span 1 / span 1 / span 1 / span 1",
                justifySelf: "end",
              }}
            >
              <a
                className="move-y--3px-on-hover text-decoration-none width-100 w-inline-block"
                href="https://wealthwondersworld.webflow.io/features"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  transition: "color 0.3s",
                  color: "white",
                  maxWidth: "100%",
                  display: "inline-block",
                  width: "100%",
                  textDecoration: "none",
                  transformStyle: "preserve-3d",
                  transitionProperty: "transform",
                  opacity: 1,
                  filter: "blur(0px)",
                }}
              >
                <div
                  className="flex align-start gap-column-16px"
                  style={{
                    boxSizing: "border-box",
                    columnGap: "16px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    className="max-w-48px max-w-40px-mbl"
                    alt="Send And Receive Any Time - Cryptomatic X Webflow Template"
                    src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036954_send-and-receive-circle-image-cryptomatic-webflow-ecommerce-template.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      display: "inline-block",
                      maxWidth: "48px",
                    }}
                  />
                  <div
                    className="grid-1-column gap-row-12px width-100"
                    style={{
                      boxSizing: "border-box",
                      gridTemplateRows: "auto",
                      gridTemplateColumns: "1fr",
                      gridAutoColumns: "1fr",
                      display: "grid",
                      width: "100%",
                      rowGap: "12px",
                    }}
                  >
                    <div
                      className="flex align-center space-between"
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3
                        className="display-3 link-heading-white mg-bottom-0"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          fontSize: "34px",
                          fontWeight: 400,
                          lineHeight: "1.294em",
                          marginBottom: "0px",
                          color: "white",
                        }}
                      >
                        Send & receive any time
                      </h3>
                      <div
                        className="line-rounded-icon diagonal-link-arrow icon-size-24px"
                        style={{
                          boxSizing: "border-box",
                          fontFamily: '"Line Rounded Icons", sans-serif',
                          lineHeight: "1em",
                          color: "white",
                          justifyContent: "center",
                          alignItems: "center",
                          minWidth: "24px",
                          maxWidth: "24px",
                          minHeight: "24px",
                          maxHeight: "24px",
                          marginLeft: "12px",
                          fontSize: "24px",
                          display: "flex",
                        }}
                      >
                        
                      </div>
                    </div>
                    <div
                      className="inner-container _438px _100-tablet"
                      style={{ boxSizing: "border-box", maxWidth: "438px" }}
                    >
                      <p
                        className="color-neutral-400 mg-bottom-0"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          color: "#afafaf",
                          marginBottom: "0px",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur eget odio
                        tincidunt diam accumsan libero viverra a feugiat libero
                        molestie non aenean id lorem.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <div
                className="divider _64px _40px-tablet"
                style={{
                  boxSizing: "border-box",
                  backgroundImage:
                    "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0))",
                  height: "1px",
                  marginTop: "64px",
                  marginBottom: "64px",
                  opacity: 1,
                  filter: "blur(0px)",
                }}
              />
              <a
                className="move-y--3px-on-hover text-decoration-none width-100 w-inline-block"
                href="https://wealthwondersworld.webflow.io/features"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  transition: "color 0.3s",
                  color: "white",
                  maxWidth: "100%",
                  display: "inline-block",
                  width: "100%",
                  textDecoration: "none",
                  transformStyle: "preserve-3d",
                  transitionProperty: "transform",
                  opacity: 1,
                  filter: "blur(0px)",
                }}
              >
                <div
                  className="flex align-start gap-column-16px"
                  style={{
                    boxSizing: "border-box",
                    columnGap: "16px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    className="max-w-48px max-w-40px-mbl"
                    alt="View Charts & Reports - Cryptomatic X Webflow Template"
                    src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036955_charts-and-reports-circle-image-cryptomatic-webflow-ecommerce-template.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      display: "inline-block",
                      maxWidth: "48px",
                    }}
                  />
                  <div
                    className="grid-1-column gap-row-12px width-100"
                    style={{
                      boxSizing: "border-box",
                      gridTemplateRows: "auto",
                      gridTemplateColumns: "1fr",
                      gridAutoColumns: "1fr",
                      display: "grid",
                      width: "100%",
                      rowGap: "12px",
                    }}
                  >
                    <div
                      className="flex align-center space-between"
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3
                        className="display-3 link-heading-white mg-bottom-0"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          fontSize: "34px",
                          fontWeight: 400,
                          lineHeight: "1.294em",
                          marginBottom: "0px",
                          color: "white",
                        }}
                      >
                        View charts & reports
                      </h3>
                      <div
                        className="line-rounded-icon diagonal-link-arrow icon-size-24px"
                        style={{
                          boxSizing: "border-box",
                          fontFamily: '"Line Rounded Icons", sans-serif',
                          lineHeight: "1em",
                          color: "white",
                          justifyContent: "center",
                          alignItems: "center",
                          minWidth: "24px",
                          maxWidth: "24px",
                          minHeight: "24px",
                          maxHeight: "24px",
                          marginLeft: "12px",
                          fontSize: "24px",
                          display: "flex",
                        }}
                      >
                        
                      </div>
                    </div>
                    <div
                      className="inner-container _438px _100-tablet"
                      style={{ boxSizing: "border-box", maxWidth: "438px" }}
                    >
                      <p
                        className="color-neutral-400 mg-bottom-0"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          color: "#afafaf",
                          marginBottom: "0px",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur eget odio
                        tincidunt diam accumsan libero viverra a feugiat libero
                        molestie non aenean id lorem.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
              <div
                className="divider _64px _40px-tablet"
                style={{
                  boxSizing: "border-box",
                  backgroundImage:
                    "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0))",
                  height: "1px",
                  marginTop: "64px",
                  marginBottom: "64px",
                  opacity: 1,
                  filter: "blur(0px)",
                }}
              />
              <a
                className="move-y--3px-on-hover text-decoration-none width-100 w-inline-block"
                href="https://wealthwondersworld.webflow.io/features"
                style={{
                  boxSizing: "border-box",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  transition: "color 0.3s",
                  color: "white",
                  maxWidth: "100%",
                  display: "inline-block",
                  width: "100%",
                  textDecoration: "none",
                  transformStyle: "preserve-3d",
                  transitionProperty: "transform",
                  opacity: 1,
                  filter: "blur(0px)",
                }}
              >
                <div
                  className="flex align-start gap-column-16px"
                  style={{
                    boxSizing: "border-box",
                    columnGap: "16px",
                    display: "flex",
                    alignItems: "flex-start",
                  }}
                >
                  <img
                    className="max-w-48px max-w-40px-mbl"
                    alt="Earn Passively - Cryptomatic X Webflow Template"
                    src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036957_earn-passively-circle-image-cryptomatic-webflow-ecommerce-template.png"
                    style={{
                      boxSizing: "border-box",
                      border: "0px",
                      verticalAlign: "middle",
                      display: "inline-block",
                      maxWidth: "48px",
                    }}
                  />
                  <div
                    className="grid-1-column gap-row-12px width-100"
                    style={{
                      boxSizing: "border-box",
                      gridTemplateRows: "auto",
                      gridTemplateColumns: "1fr",
                      gridAutoColumns: "1fr",
                      display: "grid",
                      width: "100%",
                      rowGap: "12px",
                    }}
                  >
                    <div
                      className="flex align-center space-between"
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <h3
                        className="display-3 link-heading-white mg-bottom-0"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          fontSize: "34px",
                          fontWeight: 400,
                          lineHeight: "1.294em",
                          marginBottom: "0px",
                          color: "rgb(255, 255, 255)",
                        }}
                      >
                        Earn passively
                      </h3>
                      <div
                        className="line-rounded-icon diagonal-link-arrow icon-size-24px"
                        style={{
                          boxSizing: "border-box",
                          fontFamily: '"Line Rounded Icons", sans-serif',
                          lineHeight: "1em",
                          color: "white",
                          justifyContent: "center",
                          alignItems: "center",
                          minWidth: "24px",
                          maxWidth: "24px",
                          minHeight: "24px",
                          maxHeight: "24px",
                          marginLeft: "12px",
                          fontSize: "24px",
                          display: "flex",
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      >
                        
                      </div>
                    </div>
                    <div
                      className="inner-container _438px _100-tablet"
                      style={{ boxSizing: "border-box", maxWidth: "438px" }}
                    >
                      <p
                        className="color-neutral-400 mg-bottom-0"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          color: "#afafaf",
                          marginBottom: "0px",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur eget odio
                        tincidunt diam accumsan libero viverra a feugiat libero
                        molestie non aenean id lorem.
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
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
    </div>
  );
}

function Description3() {
  return (
    <>
      <section
        className="position-relative---z-index-1"
        style={{
          boxSizing: "border-box",
          display: "block",
          zIndex: 1,
          position: "relative",
        }}
      >
        <div
          className="w-layout-blockcontainer container-default position-relative---z-index-1 w-container"
          style={{
            boxSizing: "border-box",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            maxWidth: "1316px",
            paddingLeft: "24px",
            paddingRight: "24px",
            zIndex: 1,
            position: "relative",
          }}
        >
          <div
            className="cta-card"
            style={{
              boxSizing: "border-box",
              borderRadius: "24px",
              padding: "200px 72px",
              zIndex: 1,
              columnGap: "40px",
              backdropFilter: "blur(10px)",
              backgroundColor: "rgba(5, 5, 5, 0.05)",
              gridTemplateRows: "auto",
              gridTemplateColumns: "1fr auto",
              gridAutoColumns: "1fr",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: "90px",
              display: "grid",
              position: "relative",
              opacity: 1,
              filter: "blur(0px)",
            }}
          >
            <img
              id="w-node-d9237c4d-000e-8e87-6d1e-9c8167c20f5d-710369d3"
              className="bg-gradient-top"
              sizes="(max-width: 479px) 93vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1268px"
              src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695a_cta-card-gradient-top-cryptomatic-webflow-ecommerce-template.png"
              srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695a_cta-card-gradient-top-cryptomatic-webflow-ecommerce-template-p-500.png 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695a_cta-card-gradient-top-cryptomatic-webflow-ecommerce-template-p-800.png 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695a_cta-card-gradient-top-cryptomatic-webflow-ecommerce-template-p-1080.png 1080w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695a_cta-card-gradient-top-cryptomatic-webflow-ecommerce-template-p-1600.png 1600w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695a_cta-card-gradient-top-cryptomatic-webflow-ecommerce-template.png 2536w"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                zIndex: -1,
                objectFit: "cover",
                objectPosition: "50% 0%",
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                width: "100%",
                position: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                gridArea: "span 1 / span 1 / span 1 / span 1",
              }}
            />
            <div
              className="inner-container _608px"
              style={{
                boxSizing: "border-box",
                maxWidth: "608px",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <h2
                className="display-2 heading-color-gradient mg-bottom-0"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  color: "white",
                  letterSpacing: "-2px",
                  fontSize: "54px",
                  fontWeight: 400,
                  lineHeight: "1.222em",
                  marginBottom: "0px",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(135deg, rgb(255, 255, 255) 25%, rgb(216, 230, 247))",
                  backgroundClip: "text",
                }}
              >
                Try the crypto wallet of the future, today.
              </h2>
              <p
                className="mg-bottom-0"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "0px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur in aenean a in tempor
                varius amet aliquam suspendisse et tortor orci natoque dui.
              </p>
            </div>
            <div
              className="buttons-flex-container"
              style={{
                boxSizing: "border-box",
                columnGap: "24px",
                display: "flex",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <div
                className="btn-primary-wrapper"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "96px",
                  padding: "1px",
                  transition: "transform 0.3s",
                  overflow: "hidden",
                  zIndex: 1,
                  transformStyle: "preserve-3d",
                  display: "inline-block",
                  position: "relative",
                }}
              >
                <a
                  className="btn-primary w-button"
                  href="https://wealthwondersworld.webflow.io/home-pages/home-v1#"
                  style={{
                    boxSizing: "border-box",
                    transition: "color 0.3s",
                    border: "0px",
                    cursor: "pointer",
                    display: "inline-block",
                    borderRadius: "96px",
                    padding: "16px 32px",
                    textDecoration: "none",
                    color: "white",
                    textAlign: "center",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    backgroundImage:
                      "linear-gradient(135deg, rgb(86, 96, 112) 15%, rgb(6, 6, 6))",
                    justifyContent: "center",
                    fontWeight: 500,
                    lineHeight: "1.111em",
                  }}
                >
                  Get started
                  <span
                    className="line-rounded-icon link-icon-right"
                    style={{
                      boxSizing: "border-box",
                      fontFamily: '"Line Rounded Icons", sans-serif',
                      marginLeft: "6px",
                      display: "inline-block",
                    }}
                  >
                    
                  </span>
                </a>
                <div
                  className="btn-primary-border"
                  style={{
                    boxSizing: "border-box",
                    borderRadius: "96px",
                    inset: "0px",
                    zIndex: -1,
                    backgroundImage:
                      "linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0)), linear-gradient(135deg, rgb(86, 96, 112), rgb(6, 6, 6))",
                    position: "absolute",
                  }}
                />
              </div>
              <a
                className="btn-secondary w-button"
                href="https://wealthwondersworld.webflow.io/about"
                style={{
                  boxSizing: "border-box",
                  cursor: "pointer",
                  display: "inline-block",
                  border: "1px solid rgba(255, 255, 255, 0.26)",
                  borderRadius: "96px",
                  padding: "16px 32px",
                  textDecoration: "none",
                  transition:
                    "border-color 0.3s, transform 0.3s, background-color 0.3s, color 0.3s",
                  boxShadow: "0 4px 10px 0 #14142b0a",
                  color: "white",
                  textAlign: "center",
                  transformStyle: "preserve-3d",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  fontWeight: 500,
                  lineHeight: "1.111em",
                }}
              >
                Learn more
              </a>
            </div>
            <img
              id="w-node-_92d59e9b-235e-7058-253c-c4c5d164a819-710369d3"
              className="bg-gradient-bottom"
              sizes="(max-width: 479px) 93vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1268px"
              src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036959_cta-card-gradient-bottom-cryptomatic-webflow-ecommerce-template.png"
              srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036959_cta-card-gradient-bottom-cryptomatic-webflow-ecommerce-template-p-500.png 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036959_cta-card-gradient-bottom-cryptomatic-webflow-ecommerce-template-p-800.png 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036959_cta-card-gradient-bottom-cryptomatic-webflow-ecommerce-template-p-1080.png 1080w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036959_cta-card-gradient-bottom-cryptomatic-webflow-ecommerce-template-p-1600.png 1600w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036959_cta-card-gradient-bottom-cryptomatic-webflow-ecommerce-template.png 2536w"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                zIndex: -1,
                objectFit: "cover",
                objectPosition: "50% 100%",
                borderBottomRightRadius: "24px",
                borderBottomLeftRadius: "24px",
                width: "100%",
                position: "absolute",
                bottom: "0px",
                left: "0px",
                right: "0px",
                gridArea: "span 1 / span 1 / span 1 / span 1",
              }}
            />
          </div>
          <img
            className="cta-section-bg-image"
            sizes="(max-width: 1439px) 86vw, 1124px"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103693d_footer-v2-bg-shape-cryptomatic-webflow-ecommerce-template.png"
            srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103693d_footer-v2-bg-shape-cryptomatic-webflow-ecommerce-template-p-500.png 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103693d_footer-v2-bg-shape-cryptomatic-webflow-ecommerce-template-p-800.png 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103693d_footer-v2-bg-shape-cryptomatic-webflow-ecommerce-template-p-1080.png 1080w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103693d_footer-v2-bg-shape-cryptomatic-webflow-ecommerce-template.png 1686w"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              zIndex: -1,
              mixBlendMode: "lighten",
              width: "86%",
              maxWidth: "1124px",
              display: "block",
              position: "absolute",
              top: "0px",
              left: "-190px",
              opacity: 1,
              filter: "blur(0px)",
            }}
          />
        </div>
      </section>
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

function Description4() {
  return (
    <>
      <section
        className="section bg-secondary-1 overflow-hidden"
        style={{
          boxSizing: "border-box",
          display: "block",
          backgroundColor: "#050505",
          paddingTop: "240px",
          paddingBottom: "240px",
          overflow: "hidden",
        }}
      >
        <div
          className="w-layout-blockcontainer container-default position-relative---z-index-1 w-container"
          style={{
            boxSizing: "border-box",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            maxWidth: "1316px",
            paddingLeft: "24px",
            paddingRight: "24px",
            zIndex: 1,
            position: "relative",
            opacity: 1,
            filter: "blur(0px)",
          }}
        >
          <div
            className="floating-shapes-section---content"
            style={{
              boxSizing: "border-box",
              margin: "260px auto 290px",
              textAlign: "center",
              maxWidth: "720px",
            }}
          >
            <h2
              className="display-2 mg-bottom-4px"
              style={{
                boxSizing: "border-box",
                marginTop: "0px",
                color: "white",
                letterSpacing: "-2px",
                fontSize: "54px",
                fontWeight: 400,
                lineHeight: "1.222em",
                marginBottom: "4px",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              We support 1,000+ different cryptos & tokens
            </h2>
            <div
              className="inner-container _666px center"
              style={{
                boxSizing: "border-box",
                marginLeft: "auto",
                marginRight: "auto",
                maxWidth: "666px",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <p
                className="mg-bottom-40px mg-bottom-24px-tablet"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "40px",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. In aenean a in tempor
                varius amet aliquam suspendisse et tortor orci natoque dui
                lectus convallis massa id turpis amer vel lorem viverra aenean
                arcu dui sapien.
              </p>
            </div>
            <a
              className="btn-secondary w-button"
              href="https://wealthwondersworld.webflow.io/integrations"
              style={{
                boxSizing: "border-box",
                cursor: "pointer",
                display: "inline-block",
                border: "1px solid rgba(255, 255, 255, 0.26)",
                borderRadius: "96px",
                padding: "16px 32px",
                textDecoration: "none",
                transition:
                  "border-color 0.3s, transform 0.3s, background-color 0.3s, color 0.3s",
                boxShadow: "0 4px 10px 0 #14142b0a",
                color: "white",
                textAlign: "center",
                transformStyle: "preserve-3d",
                backgroundColor: "rgba(0, 0, 0, 0)",
                fontWeight: 500,
                lineHeight: "1.111em",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              Browse all cryptos
            </a>
          </div>
          <img
            className="floating-bg-shape _01"
            sizes="(max-width: 479px) 64px, (max-width: 767px) 80px, (max-width: 991px) 100px, 174px"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697d_floating-bg-shape-1-cryptomatic-webflow-ecommerce-template.jpg"
            srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697d_floating-bg-shape-1-cryptomatic-webflow-ecommerce-template-p-500.jpg 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697d_floating-bg-shape-1-cryptomatic-webflow-ecommerce-template.jpg 696w"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "174px",
              top: "184px",
              left: "0px",
            }}
          />
          <img
            className="floating-bg-shape _02"
            sizes="(max-width: 479px) 80px, (max-width: 767px) 100px, (max-width: 991px) 120px, 198px"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697e_floating-bg-shape-2-cryptomatic-webflow-ecommerce-template.jpg"
            srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697e_floating-bg-shape-2-cryptomatic-webflow-ecommerce-template-p-500.jpg 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697e_floating-bg-shape-2-cryptomatic-webflow-ecommerce-template.jpg 792w"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "198px",
              top: "72px",
              left: "4%",
            }}
          />
          <img
            className="floating-bg-shape _03"
            sizes="(max-width: 479px) 72px, (max-width: 767px) 90px, (max-width: 991px) 110px, 160px"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369cd_floating-bg-shape-3-cryptomatic-webflow-ecommerce-template.jpg"
            srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369cd_floating-bg-shape-3-cryptomatic-webflow-ecommerce-template-p-500.jpg 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369cd_floating-bg-shape-3-cryptomatic-webflow-ecommerce-template.jpg 640w"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "160px",
              top: "24px",
              left: "36%",
            }}
          />
          <img
            className="floating-bg-shape _04"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369cb_floating-bg-shape-4-cryptomatic-webflow-ecommerce-template.jpg"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "120px",
              top: "210px",
              right: "32%",
            }}
          />
          <img
            className="floating-bg-shape _05"
            sizes="(max-width: 479px) 80px, (max-width: 767px) 100px, (max-width: 991px) 120px, 206px"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697b_floating-bg-shape-5-cryptomatic-webflow-ecommerce-template.jpg"
            srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697b_floating-bg-shape-5-cryptomatic-webflow-ecommerce-template-p-500.jpg 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697b_floating-bg-shape-5-cryptomatic-webflow-ecommerce-template-p-800.jpg 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697b_floating-bg-shape-5-cryptomatic-webflow-ecommerce-template.jpg 824w"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "206px",
              top: "0px",
              right: "3%",
            }}
          />
          <img
            className="floating-bg-shape _06"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369cc_floating-bg-shape-6-cryptomatic-webflow-ecommerce-template.jpg"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "150px",
              top: "254px",
              right: "6%",
            }}
          />
          <img
            className="floating-bg-shape _07"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369ce_floating-bg-shape-7-cryptomatic-webflow-ecommerce-template.jpg"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "122px",
              top: "480px",
              left: "29%",
            }}
          />
          <img
            className="floating-bg-shape _08"
            sizes="(max-width: 479px) 100px, (max-width: 767px) 120px, (max-width: 991px) 140px, 268px"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369ca_floating-bg-shape-8-cryptomatic-webflow-ecommerce-template.jpg"
            srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369ca_floating-bg-shape-8-cryptomatic-webflow-ecommerce-template-p-500.jpg 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369ca_floating-bg-shape-8-cryptomatic-webflow-ecommerce-template-p-800.jpg 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369ca_floating-bg-shape-8-cryptomatic-webflow-ecommerce-template.jpg 1072w"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "268px",
              bottom: "180px",
              left: "-4px",
            }}
          />
          <img
            className="floating-bg-shape _09"
            sizes="(max-width: 479px) 100vw, (max-width: 767px) 80px, (max-width: 991px) 120px, 254px"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369d0_floating-bg-shape-9-cryptomatic-webflow-ecommerce-template.jpg"
            srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369d0_floating-bg-shape-9-cryptomatic-webflow-ecommerce-template-p-500.jpg 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369d0_floating-bg-shape-9-cryptomatic-webflow-ecommerce-template-p-800.jpg 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369d0_floating-bg-shape-9-cryptomatic-webflow-ecommerce-template.jpg 1016w"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "254px",
              top: "350px",
              right: "-120px",
            }}
          />
          <img
            className="floating-bg-shape _10"
            sizes="(max-width: 479px) 128px, (max-width: 767px) 160px, (max-width: 991px) 180px, 276px"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697c_floating-bg-shape-10-cryptomatic-webflow-ecommerce-template.jpg"
            srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697c_floating-bg-shape-10-cryptomatic-webflow-ecommerce-template-p-500.jpg 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697c_floating-bg-shape-10-cryptomatic-webflow-ecommerce-template-p-800.jpg 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697c_floating-bg-shape-10-cryptomatic-webflow-ecommerce-template-p-1080.jpg 1080w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697c_floating-bg-shape-10-cryptomatic-webflow-ecommerce-template.jpg 1104w"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "276px",
              bottom: "16px",
              left: "32%",
            }}
          />
          <img
            className="floating-bg-shape _11"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e280710369cf_floating-bg-shape-11-cryptomatic-webflow-ecommerce-template.jpg"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "110px",
              bottom: "172px",
              right: "16%",
            }}
          />
          <img
            className="floating-bg-shape _12"
            sizes="(max-width: 767px) 120px, (max-width: 991px) 140px, 258px"
            src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697a_floating-bg-shape-12-cryptomatic-webflow-ecommerce-template.jpg"
            srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697a_floating-bg-shape-12-cryptomatic-webflow-ecommerce-template-p-500.jpg 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697a_floating-bg-shape-12-cryptomatic-webflow-ecommerce-template-p-800.jpg 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103697a_floating-bg-shape-12-cryptomatic-webflow-ecommerce-template.jpg 1032w"
            style={{
              boxSizing: "border-box",
              border: "0px",
              verticalAlign: "middle",
              display: "inline-block",
              zIndex: -1,
              mixBlendMode: "lighten",
              position: "absolute",
              maxWidth: "258px",
              bottom: "100px",
              right: "2%",
            }}
          />
        </div>
      </section>
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

function Description5() {
  return (
    <>
      <section
        className="section pd-top-0"
        style={{
          boxSizing: "border-box",
          display: "block",
          paddingBottom: "240px",
          paddingTop: "0px",
        }}
      >
        <div
          className="w-layout-blockcontainer container-default w-container"
          style={{
            boxSizing: "border-box",
            marginLeft: "auto",
            marginRight: "auto",
            display: "block",
            maxWidth: "1316px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          <div
            className="inner-container _640px center"
            style={{
              boxSizing: "border-box",
              marginLeft: "auto",
              marginRight: "auto",
              maxWidth: "640px",
              opacity: 1,
              filter: "blur(0px)",
            }}
          >
            <div
              className="text-center"
              style={{ boxSizing: "border-box", textAlign: "center" }}
            >
              <h2
                className="display-2 heading-color-gradient mg-bottom-24px"
                style={{
                  boxSizing: "border-box",
                  marginTop: "0px",
                  marginBottom: "24px",
                  color: "white",
                  letterSpacing: "-2px",
                  fontSize: "54px",
                  fontWeight: 400,
                  lineHeight: "1.222em",
                  WebkitTextFillColor: "transparent",
                  backgroundImage:
                    "linear-gradient(135deg, rgb(255, 255, 255) 25%, rgb(216, 230, 247))",
                  backgroundClip: "text",
                }}
              >
                How does Cryptoverse app work?
              </h2>
            </div>
          </div>
          <div
            className="card accordion-and-image-card mg-bottom-48px"
            style={{
              boxSizing: "border-box",
              border: "1px solid #1e1e1e",
              borderRadius: "24px",
              backgroundColor: "#050505",
              marginBottom: "48px",
              borderStyle: "none",
              padding: "100px 80px",
              overflow: "hidden",
              zIndex: 1,
              columnGap: "16px",
              gridTemplateRows: "auto",
              gridTemplateColumns: "1.35fr 1fr",
              gridAutoColumns: "1fr",
              alignItems: "center",
              display: "grid",
              position: "relative",
              opacity: 1,
              filter: "blur(0px)",
            }}
          >
            <img
              id="w-node-_7d61414e-f702-ac9e-6dfb-7b6500051820-710369d3"
              className="bg-gradient-top"
              sizes="(max-width: 479px) 93vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1268px"
              src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695e_accordion-card-bg-top-cryptomatic-webflow-ecommerce-template.png"
              srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695e_accordion-card-bg-top-cryptomatic-webflow-ecommerce-template-p-500.png 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695e_accordion-card-bg-top-cryptomatic-webflow-ecommerce-template-p-800.png 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695e_accordion-card-bg-top-cryptomatic-webflow-ecommerce-template-p-1080.png 1080w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695e_accordion-card-bg-top-cryptomatic-webflow-ecommerce-template-p-1600.png 1600w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695e_accordion-card-bg-top-cryptomatic-webflow-ecommerce-template.png 2536w"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                zIndex: -1,
                objectFit: "cover",
                objectPosition: "50% 0%",
                borderTopLeftRadius: "24px",
                borderTopRightRadius: "24px",
                width: "100%",
                position: "absolute",
                top: "0px",
                left: "0px",
                right: "0px",
                gridArea: "span 1 / span 1 / span 1 / span 1",
              }}
            />
            <div
              className="inner-container _600px _100-tablet"
              style={{
                boxSizing: "border-box",
                maxWidth: "600px",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <div
                className="accordion-item-wrapper"
                style={{
                  boxSizing: "border-box",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                  transformStyle: "preserve-3d",
                  width: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="accordion-content-wrapper"
                  style={{
                    boxSizing: "border-box",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <div
                    className="accordion-header"
                    style={{
                      boxSizing: "border-box",
                      columnGap: "16px",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      className="max-w-48px max-w-40px-mbl"
                      alt="Create An Account - Cryptomatic X Webflow Template"
                      src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695c_create-an-account-circle-icon-cryptomatic-webflow-ecommerce-template.png"
                      style={{
                        boxSizing: "border-box",
                        border: "0px",
                        verticalAlign: "middle",
                        display: "inline-block",
                        maxWidth: "48px",
                      }}
                    />
                    <h3
                      className="display-3 mg-bottom-0"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        color: "white",
                        fontSize: "34px",
                        fontWeight: 400,
                        lineHeight: "1.294em",
                        marginBottom: "0px",
                      }}
                    >
                      Create an account
                    </h3>
                    <div
                      className="accordion-icon-wrapper"
                      style={{
                        boxSizing: "border-box",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "24px",
                        maxWidth: "24px",
                        minHeight: "24px",
                        maxHeight: "24px",
                        marginLeft: "auto",
                        display: "flex",
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div
                        className="accordion-btn-line horizontal"
                        style={{
                          boxSizing: "border-box",
                          borderRadius: "20px",
                          backgroundColor: "white",
                          width: "18px",
                          height: "2px",
                          position: "absolute",
                        }}
                      />
                      <div
                        className="accordion-btn-line vertical"
                        style={{
                          boxSizing: "border-box",
                          borderRadius: "20px",
                          backgroundColor: "white",
                          position: "absolute",
                          width: "2px",
                          height: "18px",
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="acordion-body pd-left-64px"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      paddingLeft: "64px",
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      opacity: 1,
                      width: "600px",
                    }}
                  >
                    <div
                      className="accordion-spacer"
                      style={{ boxSizing: "border-box", minHeight: "8px" }}
                    />
                    <div
                      className="inner-container _504px"
                      style={{ boxSizing: "border-box", maxWidth: "504px" }}
                    >
                      <p
                        className="mg-bottom-0"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur eget odio
                        tincidunt diam accumsan libero viverra a feugiat libero
                        molestie non aenean id lorem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="divider _48px"
                style={{
                  boxSizing: "border-box",
                  backgroundImage:
                    "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0))",
                  height: "1px",
                  marginTop: "48px",
                  marginBottom: "48px",
                }}
              />
              <div
                className="accordion-item-wrapper"
                style={{
                  boxSizing: "border-box",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                  transformStyle: "preserve-3d",
                  width: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="accordion-content-wrapper"
                  style={{
                    boxSizing: "border-box",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <div
                    className="accordion-header"
                    style={{
                      boxSizing: "border-box",
                      columnGap: "16px",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      className="max-w-48px max-w-40px-mbl"
                      alt="Easy To Create Wallet - Cryptomatic X Webflow Template"
                      src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036956_easy-to-create-wallet-circle-image-cryptomatic-webflow-ecommerce-template.png"
                      style={{
                        boxSizing: "border-box",
                        border: "0px",
                        verticalAlign: "middle",
                        display: "inline-block",
                        maxWidth: "48px",
                      }}
                    />
                    <h3
                      className="display-3 mg-bottom-0"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        color: "white",
                        fontSize: "34px",
                        fontWeight: 400,
                        lineHeight: "1.294em",
                        marginBottom: "0px",
                      }}
                    >
                      Create your wallet
                    </h3>
                    <div
                      className="accordion-icon-wrapper"
                      style={{
                        boxSizing: "border-box",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "24px",
                        maxWidth: "24px",
                        minHeight: "24px",
                        maxHeight: "24px",
                        marginLeft: "auto",
                        display: "flex",
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div
                        className="accordion-btn-line horizontal"
                        style={{
                          boxSizing: "border-box",
                          borderRadius: "20px",
                          backgroundColor: "white",
                          width: "18px",
                          height: "2px",
                          position: "absolute",
                        }}
                      />
                      <div
                        className="accordion-btn-line vertical"
                        style={{
                          boxSizing: "border-box",
                          borderRadius: "20px",
                          backgroundColor: "white",
                          position: "absolute",
                          width: "2px",
                          height: "18px",
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="acordion-body pd-left-64px"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      paddingLeft: "64px",
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      opacity: 1,
                      width: "600px",
                    }}
                  >
                    <div
                      className="accordion-spacer"
                      style={{ boxSizing: "border-box", minHeight: "8px" }}
                    />
                    <div
                      className="inner-container _504px"
                      style={{ boxSizing: "border-box", maxWidth: "504px" }}
                    >
                      <p
                        className="mg-bottom-0"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur eget odio
                        tincidunt diam accumsan libero viverra a feugiat libero
                        molestie non aenean id lorem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="divider _48px"
                style={{
                  boxSizing: "border-box",
                  backgroundImage:
                    "linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0))",
                  height: "1px",
                  marginTop: "48px",
                  marginBottom: "48px",
                }}
              />
              <div
                className="accordion-item-wrapper"
                style={{
                  boxSizing: "border-box",
                  transition: "transform 0.3s",
                  cursor: "pointer",
                  transformStyle: "preserve-3d",
                  width: "100%",
                  display: "flex",
                }}
              >
                <div
                  className="accordion-content-wrapper"
                  style={{
                    boxSizing: "border-box",
                    flexDirection: "column",
                    justifyContent: "center",
                    width: "100%",
                    display: "flex",
                  }}
                >
                  <div
                    className="accordion-header"
                    style={{
                      boxSizing: "border-box",
                      columnGap: "16px",
                      alignItems: "center",
                      display: "flex",
                    }}
                  >
                    <img
                      className="max-w-48px max-w-40px-mbl"
                      alt="Earn Passively - Cryptomatic X Webflow Template"
                      src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e28071036957_earn-passively-circle-image-cryptomatic-webflow-ecommerce-template.png"
                      style={{
                        boxSizing: "border-box",
                        border: "0px",
                        verticalAlign: "middle",
                        display: "inline-block",
                        maxWidth: "48px",
                      }}
                    />
                    <h3
                      className="display-3 mg-bottom-0"
                      style={{
                        boxSizing: "border-box",
                        marginTop: "0px",
                        color: "white",
                        fontSize: "34px",
                        fontWeight: 400,
                        lineHeight: "1.294em",
                        marginBottom: "0px",
                      }}
                    >
                      Buy & trade crypto
                    </h3>
                    <div
                      className="accordion-icon-wrapper"
                      style={{
                        boxSizing: "border-box",
                        justifyContent: "center",
                        alignItems: "center",
                        minWidth: "24px",
                        maxWidth: "24px",
                        minHeight: "24px",
                        maxHeight: "24px",
                        marginLeft: "auto",
                        display: "flex",
                        transform:
                          "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(180deg) skew(0deg, 0deg)",
                        transformStyle: "preserve-3d",
                      }}
                    >
                      <div
                        className="accordion-btn-line horizontal"
                        style={{
                          boxSizing: "border-box",
                          borderRadius: "20px",
                          backgroundColor: "white",
                          width: "18px",
                          height: "2px",
                          position: "absolute",
                        }}
                      />
                      <div
                        className="accordion-btn-line vertical"
                        style={{
                          boxSizing: "border-box",
                          borderRadius: "20px",
                          backgroundColor: "white",
                          position: "absolute",
                          width: "2px",
                          height: "18px",
                          transform:
                            "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(90deg) skew(0deg, 0deg)",
                          transformStyle: "preserve-3d",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="acordion-body pd-left-64px"
                    style={{
                      boxSizing: "border-box",
                      overflow: "hidden",
                      paddingLeft: "64px",
                      transform:
                        "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                      transformStyle: "preserve-3d",
                      opacity: 1,
                      width: "600px",
                    }}
                  >
                    <div
                      className="accordion-spacer"
                      style={{ boxSizing: "border-box", minHeight: "8px" }}
                    />
                    <div
                      className="inner-container _504px"
                      style={{ boxSizing: "border-box", maxWidth: "504px" }}
                    >
                      <p
                        className="mg-bottom-0"
                        style={{
                          boxSizing: "border-box",
                          marginTop: "0px",
                          marginBottom: "0px",
                        }}
                      >
                        Lorem ipsum dolor sit amet consectetur eget odio
                        tincidunt diam accumsan libero viverra a feugiat libero
                        molestie non aenean id lorem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="w-node-be0b5c5c-2484-6396-3092-45bd9c6d8247-710369d3"
              className="width-100 max-w-356px center-tablet"
              style={{
                boxSizing: "border-box",
                width: "100%",
                maxWidth: "356px",
                justifySelf: "end",
                opacity: 1,
                filter: "blur(0px)",
              }}
            >
              <img
                id="w-node-cace78b8-439a-24b3-8fd4-1a443c85d564-710369d3"
                alt="How Does Cryptomatic App Work - Cryptomatic X Webflow Template"
                src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695d_how-does-cryptomatic-app-work-cryptomatic-webflow-ecommerce-template.png"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  maxWidth: "100%",
                  display: "inline-block",
                }}
              />
            </div>
            <img
              id="w-node-d1aa16f5-98d5-d383-ab6c-5efbe29a9c44-710369d3"
              className="bg-gradient-bottom"
              sizes="(max-width: 479px) 93vw, (max-width: 991px) 95vw, (max-width: 1439px) 96vw, 1268px"
              src="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695f_accordion-card-bg-bottom-cryptomatic-webflow-ecommerce-template.png"
              srcSet="https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695f_accordion-card-bg-bottom-cryptomatic-webflow-ecommerce-template-p-500.png 500w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695f_accordion-card-bg-bottom-cryptomatic-webflow-ecommerce-template-p-800.png 800w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695f_accordion-card-bg-bottom-cryptomatic-webflow-ecommerce-template-p-1080.png 1080w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695f_accordion-card-bg-bottom-cryptomatic-webflow-ecommerce-template-p-1600.png 1600w, https://cdn.prod.website-files.com/66cb9ec4ecc3e280710368c3/66cb9ec4ecc3e2807103695f_accordion-card-bg-bottom-cryptomatic-webflow-ecommerce-template.png 2536w"
              style={{
                boxSizing: "border-box",
                border: "0px",
                verticalAlign: "middle",
                maxWidth: "100%",
                display: "inline-block",
                zIndex: -1,
                objectFit: "cover",
                objectPosition: "50% 100%",
                borderBottomRightRadius: "24px",
                borderBottomLeftRadius: "24px",
                width: "100%",
                position: "absolute",
                bottom: "0px",
                left: "0px",
                right: "0px",
                gridArea: "span 1 / span 1 / span 1 / span 1",
              }}
            />
          </div>
          <div
            className="buttons-flex-container center"
            style={{
              boxSizing: "border-box",
              columnGap: "24px",
              display: "flex",
              justifyContent: "center",
              opacity: 1,
              filter: "blur(0px)",
            }}
          >
            <div
              className="btn-primary-wrapper"
              style={{
                boxSizing: "border-box",
                borderRadius: "96px",
                padding: "1px",
                transition: "transform 0.3s",
                overflow: "hidden",
                zIndex: 1,
                transformStyle: "preserve-3d",
                display: "inline-block",
                position: "relative",
              }}
            >
              <a
                className="btn-primary w-button"
                href="https://www.apple.com/app-store/"
                target="_blank"
                style={{
                  boxSizing: "border-box",
                  transition: "color 0.3s",
                  border: "0px",
                  cursor: "pointer",
                  display: "inline-block",
                  borderRadius: "96px",
                  padding: "16px 32px",
                  textDecoration: "none",
                  color: "white",
                  textAlign: "center",
                  backgroundColor: "rgba(0, 0, 0, 0)",
                  backgroundImage:
                    "linear-gradient(135deg, rgb(86, 96, 112) 15%, rgb(6, 6, 6))",
                  justifyContent: "center",
                  fontWeight: 500,
                  lineHeight: "1.111em",
                }}
              >
                Download the app
                <span
                  className="line-rounded-icon link-icon-right"
                  style={{
                    boxSizing: "border-box",
                    fontFamily: '"Line Rounded Icons", sans-serif',
                    marginLeft: "6px",
                    display: "inline-block",
                  }}
                >
                  
                </span>
              </a>
              <div
                className="btn-primary-border"
                style={{
                  boxSizing: "border-box",
                  borderRadius: "96px",
                  inset: "0px",
                  zIndex: -1,
                  backgroundImage:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0)), linear-gradient(135deg, rgb(86, 96, 112), rgb(6, 6, 6))",
                  position: "absolute",
                }}
              />
            </div>
          </div>
        </div>
      </section>
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


export default function MyCopiedSite() {
  return (
    <>
      <Main />
      <Description />
      <Description2 />
      <Description3 />
      <Description4 />
      <Description5 />
    </>
  );
}
