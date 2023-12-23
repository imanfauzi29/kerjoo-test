import React from "react"
import { Button, Col, Container, FormControl, Row } from "react-bootstrap"

const TestFlex = () => {
  return (
    <Container className="mt-5">
      <Row lg={3} className="d-flex">
        <Col md={12} className="bg-danger text-white p-3">
          <Button variant="primary">Tambah</Button>
          <Button variant="secondary">Import</Button>
          <Button variant="success">Export</Button>
        </Col>

        <Col sm={12} md={6} className="bg-warning p-3">
          <FormControl placeholder="Search" />
        </Col>

        <Col sm={12} md={6} className="bg-success p-3">
          <select title="Year" variant="light">
            <option>2020</option>
            <option>2021</option>
            <option>2022</option>
          </select>
        </Col>
      </Row>
    </Container>
  )
}

export default TestFlex
