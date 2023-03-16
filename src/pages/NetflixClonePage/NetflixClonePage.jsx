import React, { useState } from "react";
import "./NetflixClonePage.scss";
import HeaderComponent from "../../components/NetflixComponent/HeaderComponent/HeaderComponent";
import EnjoyComponent from "../../components/NetflixComponent/EnjoComponent/EnjoyComponent";
import DownloadComponent from "../../components/NetflixComponent/DownloadComponent/DownloadComponent";
import WatchComponent from "../../components/NetflixComponent/WatchComponent/WatchComponent";
import CreateComponent from "../../components/NetflixComponent/CreateComponent/CreateComponent";
import AskComponent from "../../components/NetflixComponent/AskComponent/AskComponent";
import datas from "../../components/NetflixComponent/AskComponent/data";
import FooterComponent from "../../components/NetflixComponent/FooterComponent/FooterComponent";



function NetflixClonePage() {
  const [asks, setAsks] = useState(datas);

  return (
    <>
      <HeaderComponent />
      <EnjoyComponent />
      <DownloadComponent />
      <WatchComponent />
      <CreateComponent />
      <div style={{border: "4px solid #222" }}>
        <h2
          style={{
            fontSize: "70px",
            height: "200px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#000",
            color: "#fff",
            marginBottom: "0",
            paddingTop: "60px",
          }}
        >
          Frequently Asked Questions
        </h2>
        {asks.map((ask) => {
          return <AskComponent key={ask.id} {...ask} />;
        })}
        <div
          style={{
            fontSize: "35px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#000",
            color: "#fff",
            marginBottom: "0",
            paddingTop: "60px",
          }}
        >
          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div
            style={{
              fontSize: "20px",
              marginBottom: "2rem",
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <input
              style={{
                padding: "1rem",
                marginRight: "0.5rem",
                border: "1px solid white",
                borderRadius: "5px",
                backgroundColor: "#000",
                color: "white",
                width: "500px",
              }}
              type="email"
              placeholder="Email Address"
            />
            <button
              style={{
                fontSize: "1.75rem",
                padding: "0.25rem 1rem",
                borderRadius: "5px",
                backgroundColor: "red",
                color: "white",
              }}
              type="submit"
            >
              Get Started { '>' }
            </button>
          </div>
        </div>        
      </div>
      <FooterComponent/>
    </>
  );
}

export default NetflixClonePage;
