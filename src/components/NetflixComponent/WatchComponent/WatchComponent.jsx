import React from "react";
import { WatchContainer } from "./styled";

function WatchComponent() {
  return (
    <>
      <WatchContainer>
        <div>
          <h2 style={{ fontSize: "55px" }}>
            Watch
            <br />
            everywhere.
          </h2>
          <p style={{ fontSize: "30px" }}>
            Stream unlimited movies and TV
            <br />
            shows on your phone, tablet, laptop,
            <br />
            and TV.
          </p>
        </div>
      </WatchContainer>
    </>
  );
}

export default WatchComponent;
