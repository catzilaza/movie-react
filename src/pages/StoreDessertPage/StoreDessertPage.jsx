import React, { useState } from "react";
import { Button, Card, Image, Row, Col } from "react-bootstrap";
import "./StoreDessertPage.scss";
import axios from "axios";
import dataDessert from "../../DataModel/dessertModel";
import { Buffer } from "buffer";

function StoreDessertPage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  // async function getAlldata() {
  //   await axios
  //     .get("http://localhost:3000/product")
  //     .then((response) => {
  //       //console.log("response : ", response.data.user);`https://ill-gray-buffalo-wig.cyclic.app/product`
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("error", error);
  //       setError(error);
  //     });
  // }
  // React.useEffect(() => {
  //   getAlldata();
  // }, []);

  // if (error) return `Error: ${error}`;
  // if (!data)
  //   return (
  //     <>
  //       <div
  //         style={{
  //           fontSize: "2rem",
  //           color: "Orange",
  //           margin: "2rem 2rem",
  //           display: "flex",
  //           justifyContent: "center",
  //           border: "1px solid Orange",
  //         }}
  //       >
  //         StoreDessertPage "Loading data!"
  //         <div className="spinner-border text-primary" role="status">
  //           <span className="visually-hidden">Loading...</span>
  //         </div>
  //       </div>
  //     </>
  //   );

  //console.log("Dessert Datas : ", dataDessert);

  // console.log("data  from homeApp.js: ", data.data);

  // let dataTransform = [...data.data];
  // for (let i = 0; i < dataTransform.length; i++) {
  //   dataTransform[i].img.data.data = new Buffer.from(
  //     dataTransform[i].img.data.data
  //   );
  // }

  // console.log("dataTransform: ", dataTransform);

  return (
    <>
      <div
        style={{
          fontSize: "2rem",
          color: "Orange",
          margin: "2rem 2rem",
          display: "flex",
          justifyContent: "center",
          border: "1px solid Orange",
        }}
      >
        StoreDessertPage
      </div>
      <Row xs={1} md={5} className="g-1 p-4">
      {/* dataDessert */}
      {/* dataTransform */}
        {dataDessert.map((item, key) => (
          <Col key={key}>
            <Card style={{ width: "18rem", textAlign: "center" }}>
              <Card.Img
                variant="top"
                src={item.itempic}
                // src={`data:image/png;base64, ${item.img.data.data.toString(
                //   "base64"
                // )}`}
                style={{ width: "100%", height: "300px" }}
              />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>ราคา : {item.price} บาท</Card.Text>
                <Button variant="primary">ซื้อ</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default StoreDessertPage;
