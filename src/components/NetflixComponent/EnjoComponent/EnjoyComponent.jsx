import React from "react";
//import "./styled.jsx";
import tvImg from "../../../assets/NetflixClonePics/tv.png";
import {
  EnjoyContainer,
  EnjoyContainerInner,
  EnjoyText,
  EnjoyImg,
  EnjoyVideo,
} from "./styled.jsx";

function EnjoyComponent() {
  return (
    <EnjoyContainer>
      <EnjoyContainerInner>
        <EnjoyText>
          <div>
            <h2>Enjoy on your TV.</h2>
            <p>
              Watch on Smart TVs, Playstation, Xbox,
              <br />
              Chromecast, Apple TV, Blu-ray players,
              <br />
              and more.
            </p>
          </div>
        </EnjoyText>

        <EnjoyImg>
          <img
            src={tvImg}
            alt="tvImg"
            style={{
              height: "410px",
              width: "100%",
            }}
          />
          <EnjoyVideo>
            <video style={{ width: "83%" }}>
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
                type="video/mp4"
              />
            </video>
          </EnjoyVideo>
        </EnjoyImg>
      </EnjoyContainerInner>
    </EnjoyContainer>
  );
}

export default EnjoyComponent;
