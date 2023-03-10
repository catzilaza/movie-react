import React from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Button,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function AboutComponent() {
  let navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Card className="bg-dark text-white m-4 text-center">
              <Card.Body>
                <Card.Img variant="top" src="./cat.jpg" height="520px" />
                <Card.Title>Catzila</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item className="d-flex">
                    <Image
                      src="./stack.png"
                      width={"50px"}
                      height={"50px"}
                      alt="profile picture"
                    />
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex">
                    <Image
                      src="./phone.png"
                      width={"50px"}
                      height={"50px"}
                      alt="profile picture"
                    />
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                  </ListGroup.Item>
                  <ListGroupItem>
                    <Button variant="outline-success" onClick={handleBack}>
                      Home
                    </Button>
                  </ListGroupItem>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutComponent;
