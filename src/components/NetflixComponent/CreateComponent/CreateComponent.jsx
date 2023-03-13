import React from "react";
import { CreateContainer } from "./styled";
import kidImg from "../../../assets/NetflixClonePics/kid.png";
function CreateComponent() {
  return (
    <>
      <CreateContainer>
        <div className="row" style={{ padding: "60px 0px" }}>
          <div className="col">
            <div style={{display:"flex", justifyContent:"end"}}>
              <img alt="kidImg" src={kidImg} />
            </div>
          </div>
          <div
            className="col"
            style={{
              display: "flex",
              color: "#fff",
            }}
          >
            <div>
              <h2 style={{ fontSize: "55px" }}>
                Create profiles
                <br />
                for kids.
              </h2>
              <p style={{ fontSize: "30px" }}>
                Send kids on adventures with their <br />
                favorite characters in a space made <br />
                just for them—free with your membership.
              </p>
            </div>
          </div>
        </div>
      </CreateContainer>
    </>
  );
}

export default CreateComponent;
