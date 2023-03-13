import React from "react";
import {
  DownloadCon,
  DownloadText,
  DownloadImg,
  DownloadImgBox1,
  DownloadImgBox2,
} from "./styled";
import mobileImg from "../../../assets/NetflixClonePics/mobile.jpg";
import boxshotImg from "../../../assets/NetflixClonePics/boxshot.png";
import downloadIcon from "../../../assets/NetflixClonePics/download-icon.gif";

function DownloadComponent() {
  return (
    <>
      <DownloadCon>
        <div className="container">
          <div className="row">
            <div className="col">
              <DownloadImg>
                <DownloadImgBox1 src={mobileImg} alt="mobileImg" />

                <DownloadImgBox2>
                  <div>
                    <img
                      src={boxshotImg}
                      alt="boxshotImg"
                      style={{ width: "50%" }}
                    />
                  </div>

                  <div style={{ marginRight: "40px" }}>
                    <div>Stranger Things</div>
                    <div>Downloading...</div>
                  </div>
                  <div>
                    <img
                      src={downloadIcon}
                      alt="downloadIcon"
                      style={{ width: "50%" }}
                    />
                  </div>
                </DownloadImgBox2>
              </DownloadImg>
            </div>
            <div className="col">
              <DownloadText>
                <div>
                  <h2>Download your shows to watch offline.</h2>
                  <p>
                    Save your favorites easily and always have something to
                    watch.
                  </p>
                </div>
              </DownloadText>
            </div>
          </div>
        </div>
      </DownloadCon>
    </>
  );
}

export default DownloadComponent;
