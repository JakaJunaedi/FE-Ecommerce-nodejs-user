import React from "react";
import Layout from "../../components/Layout";
import { Card, Row, Col, Form, Button } from "react-bootstrap";
import img from "../../images/logo/golden-star.png";

const Profile = (props) => {
  return (
    <Layout>
      <Row>
        <Col>
          <Card>
            <Card.Img
              variant="top"
              src={img}
              style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
                border: "1px solid #ddd",
                borderRadius: "4px",
                padding: "5px",
                width: "150px",
              }}
            />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>Profile</Card.Title>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Label>Ubah foto profile</Form.Label>
                <Form.Control type="file" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                  Jika tidak ada perubahan password, abaikan form ini
                </Form.Text>
              </Form.Group>

              <Button variant="primary">Simpan</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Layout>
  );
};

export default Profile;
