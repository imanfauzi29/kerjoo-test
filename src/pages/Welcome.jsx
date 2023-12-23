import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <Container className="mt-5">
      <Row sm={1} md={2} lg={3}>
        <Col>
          <Link to="/test-grid">
            <div className="p-5 bg-danger text-white text-center font-weight-bold rounded-lg">
              Test Grid Function
            </div>
          </Link>
        </Col>
        <Col>
          <Link to="/test-flex">
            <div className="p-5 bg-warning text-dark text-center font-weight-bold rounded-lg">
              Test Flex Function
            </div>
          </Link>
        </Col>
        <Col>
          <Link to="/test-select">
            <div className="p-5 bg-success text-white text-center font-weight-bold rounded-lg">
              Test Select Function
            </div>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

export default Welcome
