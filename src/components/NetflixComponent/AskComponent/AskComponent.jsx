import React, { useState } from "react";
import { AskContainer } from "./styled";

function AskComponent({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <AskContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",            
          }}
        >
          <div
            style={{
              background: "#303030",
              fontSize: "1.5rem",
              width: "900px",
              margin: "0.1rem 0",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              padding: "0 1.5rem 0.5rem 0.5rem",             
            }}
          >
            <h3 style={{ color: "#fff", paddingBottom:"1rem"}}>{title}</h3>
            <button
              style={{
                border: "none",
                background: "transparent",
                fontSize: "3rem",
                color: "#fff",                
              }}
              onClick={() => {
                setShowInfo(!showInfo);
              }}
            >
              {showInfo ? "-" : "+"}
            </button>
          </div>
          {showInfo && (
            <p
              style={{
                background: "#303030",
                fontSize: "1.5rem",
                maxWidth: "900px",
                padding: "1rem",
              }}
            >
              {info}
            </p>
          )}
        </div>
      </AskContainer>
    </>
  );
}

export default AskComponent;
