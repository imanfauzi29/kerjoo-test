import React from "react"
import { Button, Col, Container, FormControl, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Select from "react-select"

const TestFlex = () => {
  const selectOptions = [
    { label: "2020", value: 2020 },
    { label: "2021", value: 2021 },
    { label: "2022", value: 2022 }
  ]
  return (
    <Container className="mt-5">
      <Button as={Link} to={"/"} className="mb-2">
        Menu awal
      </Button>

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
          <Select options={selectOptions} />
        </Col>
      </Row>
    </Container>
  )
}

export default TestFlex
