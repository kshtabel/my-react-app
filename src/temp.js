import React from "react";

export default function Component() {
  return (
    <>
      <div
        id="rundreisen"
        className="container-fluid header-divider"
        style={{
          boxSizing: "border-box",
          marginRight: "auto",
          marginLeft: "auto",
          height: "100%",
          maxWidth: "1600px",
          paddingLeft: "55px",
          paddingRight: "55px",
          paddingTop: "46px",
        }}
      >
        <h3
          className="header-divider__title"
          style={{
            boxSizing: "border-box",
            marginBottom: "12.5px",
            marginTop: "0px",
            fontFamily: "inherit",
            fontWeight: "normal",
            fontStyle: "normal",
            fontStretch: "normal",
            lineHeight: 1,
            textAlign: "center",
            fontSize: "22px",
            color: "rgb(121, 121, 121)",
          }}
        >
          RUNDREISEN (1)
        </h3>
        <hr
          style={{
            boxSizing: "content-box",
            height: "0px",
            borderWidth: "1px 0px 0px",
            borderImage: "initial",
            borderRightStyle: "initial",
            borderBottomStyle: "initial",
            borderLeftStyle: "initial",
            borderRightColor: "initial",
            borderBottomColor: "initial",
            borderLeftColor: "initial",
            borderTopStyle: "solid",
            marginTop: "23px",
            marginBottom: "50px",
            borderTopColor: "rgb(151, 151, 151)",
          }}
        />
        <div
          className="row collapse grid-gallery in grid-gallery--one-column"
          style={{
            boxSizing: "border-box",
            marginLeft: "-5px",
            marginRight: "-5px",
            gap: "10px",
            gridTemplateColumns: "1fr",
            paddingBottom: "49px",
            display: "grid",
          }}
        >
          <div
            className="grid-gallery__item"
            style={{ boxSizing: "border-box", maxHeight: "400px" }}
          >
            <a
              className="box-teaser box-teaser--spacing"
              href="https://www.designreisen.de/luxusreisen/rundreise-indonesien-island-paradise"
              style={{
                boxSizing: "border-box",
                backgroundColor: "transparent",
                textDecoration: "none",
                transition: "color 0.1s ease-in-out",
                color: "rgb(170, 128, 85)",
                overflow: "hidden",
                position: "relative",
                width: "100%",
                marginBottom: "0px",
                display: "flex",
              }}
            >
              <img
                className="box-teaser__img"
                alt="Indonesien -  Island Paradise"
                src="https://www.designreisen.de/fileadmin/_processed_/7/d/csm_ps_RRIndonesien_IslandParadise_Tag6-9Ubud_b52c625a76.jpg"
                title="Indonesien -  Island Paradise"
                style={{
                  boxSizing: "border-box",
                  border: "0px",
                  verticalAlign: "middle",
                  height: "auto",
                  objectFit: "cover",
                  width: "100%",
                }}
              />
              <div
                className="box-teaser__desc text-truncate"
                style={{
                  boxSizing: "border-box",
                  padding: "31px 45px",
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: "0px",
                  left: "0px",
                  fontSize: "18px",
                  lineHeight: 1.22,
                  color: "rgb(255, 255, 255)",
                  marginBottom: "23px",
                  overflowWrap: "break-word",
                }}
              >
                <h3
                  className="box-teaser__title"
                  style={{
                    boxSizing: "border-box",
                    marginTop: "0px",
                    fontFamily: "inherit",
                    fontWeight: "normal",
                    fontStyle: "normal",
                    fontStretch: "normal",
                    position: "relative",
                    fontSize: "25px",
                    marginBottom: "0px",
                    lineHeight: 1,
                    letterSpacing: "1px",
                    color: "rgb(255, 255, 255)",
                    zIndex: 2,
                    textTransform: "uppercase",
                  }}
                >
                  {"Island Paradise"}
                </h3>
                <p
                  className="box-teaser__text"
                  style={{
                    boxSizing: "border-box",
                    margin: "0px 0px 12.5px",
                    position: "relative",
                    letterSpacing: "0px",
                    zIndex: 2,
                    fontSize: "18px",
                    lineHeight: 1.22,
                    color: "rgb(255, 255, 255)",
                    marginBottom: "23px",
                  }}
                >
                  {"Indonesien"}
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: `
html {
  box-sizing: border-box;
  font-family: sans-serif;
  text-size-adjust: 100%;
  font-size: 10px;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
  box-sizing: border-box;
  margin: 0px;
  font-family: "Times New Roman", Regular, Georgia, Times, serif;
  font-size: 18px;
  line-height: 1.42857;
  color: rgb(51, 51, 51);
  background-color: rgb(0, 0, 0);
}
`,
        }}
      />
    </>
  );
}
