import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { Link } from "react-router-dom"

const TestGrid = () => {
  return (
    <Container className="mt-3">
      <Button as={Link} to={"/"} className="mb-2">
        Menu awal
      </Button>

      <Row lg={4} md={2} sm={1}>
        <Col className="py-2 bg-primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat
          ratione quae? Fugit fugiat, exercitationem ratione provident
          reprehenderit explicabo quaerat et nihil sint beatae alias quasi
          voluptatum quibusdam tempore iusto!
        </Col>
        <Col className="py-2 bg-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat
          ratione quae? Fugit fugiat, exercitationem ratione provident
          reprehenderit explicabo quaerat et nihil sint beatae alias quasi
          voluptatum quibusdam tempore iusto!
        </Col>
        <Col className="py-2 bg-success">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat
          ratione quae? Fugit fugiat, exercitationem ratione provident
          reprehenderit explicabo quaerat et nihil sint beatae alias quasi
          voluptatum quibusdam tempore iusto!
        </Col>
        <Col className="py-2 bg-warning">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis fugiat
          ratione quae? Fugit fugiat, exercitationem ratione provident
          reprehenderit explicabo quaerat et nihil sint beatae alias quasi
          voluptatum quibusdam tempore iusto!
        </Col>
      </Row>
    </Container>
  )
}

export default TestGrid
