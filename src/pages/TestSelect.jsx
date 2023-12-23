import React, { useEffect, useState } from "react"
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Container
} from "react-bootstrap"
import Select from "react-select"
import {
  getDistrict,
  getProvincies,
  getRegency,
  getVillage
} from "../services/district"
import { useDispatch, useSelector } from "react-redux"
import {
  setDistrict,
  setProvince,
  setRegency,
  setVillage
} from "../store/slicer/districtSlicer"
import { Link } from "react-router-dom"

const TestSelect = () => {
  const { province, regency, district, village } = useSelector(
    (state) => state.district
  )
  const dispatch = useDispatch()

  const [options, setOptions] = useState({
    province: [],
    regency: [],
    district: [],
    village: []
  })

  useEffect(() => {
    getProvinceOption()
  }, [])

  useEffect(() => {
    getRegencyOption(province)
  }, [province])

  useEffect(() => {
    getDistrictOption(regency)
  }, [regency])

  useEffect(() => {
    getVillageOption(district)
  }, [district])

  const getProvinceOption = async () => {
    const province = await getProvincies().then((res) =>
      res?.map((item) => ({ label: item.name, value: item.id }))
    )

    setOptions({ province, district: [], regency: [], village: [] })
  }

  const getRegencyOption = async (provinceID) => {
    const regency = await getRegency(provinceID).then((res) =>
      res?.map((item) => ({ label: item.name, value: item.id }))
    )

    setOptions((prev) => ({ ...prev, regency, district: [], village: [] }))
  }

  const getDistrictOption = async (regencyID) => {
    const district = await getDistrict(regencyID).then((res) =>
      res?.map((item) => ({ label: item.name, value: item.id }))
    )

    setOptions((prev) => ({ ...prev, district, village: [] }))
  }

  const getVillageOption = async (districtID) => {
    const village = await getVillage(districtID).then((res) =>
      res?.map((item) => ({ label: item.name, value: item.id }))
    )

    setOptions((prev) => ({ ...prev, village }))
  }

  const handleChange = (value, district) => {
    switch (district) {
      case "province":
        dispatch(setProvince(value.value))
        break
      case "district":
        dispatch(setDistrict(value.value))
        break
      case "regency":
        dispatch(setRegency(value.value))
        break
      case "village":
        dispatch(setVillage(value.value))
        break
      default:
        break
    }
  }

  return (
    <Container className="mt-5">
      <div className="mx-auto" style={{ width: "fit-content" }}>
        <Button as={Link} to={"/"} className="mb-2">
          Menu awal
        </Button>
        <Card style={{ width: "425px" }}>
          <CardHeader>
            <CardTitle>Pilih area</CardTitle>
          </CardHeader>
          <CardBody>
            <div>
              <label className="block w-100">
                Pilih provinsi
                <Select
                  options={options.province}
                  placeholder={"pilih provinsi..."}
                  onChange={(value) => handleChange(value, "province")}
                  value={options.province?.find((v) => v.value === province)}
                />
              </label>
            </div>
            <div>
              <label className="block w-100">
                Pilih Kabupaten/Kota
                <Select
                  options={options.regency}
                  placeholder={"pilih kabupaten/kota..."}
                  onChange={(value) => handleChange(value, "regency")}
                  isDisabled={!province}
                  value={
                    options.regency?.find((v) => v.value === regency) || null
                  }
                />
              </label>
            </div>
            <div>
              <label className="block w-100">
                Pilih kecamatan
                <Select
                  options={options.district}
                  placeholder={"pilih kecamatan..."}
                  onChange={(value) => handleChange(value, "district")}
                  isDisabled={!regency}
                  value={
                    options.district?.find((v) => v.value === district) || null
                  }
                />
              </label>
            </div>
            <div>
              <label className="block w-100">
                Pilih desa
                <Select
                  options={options.village}
                  placeholder={"pilih desa..."}
                  onChange={(value) => handleChange(value, "village")}
                  isDisabled={!district}
                  value={
                    options.village?.find((v) => v.value === village) || null
                  }
                />
              </label>
            </div>
          </CardBody>
        </Card>
      </div>
    </Container>
  )
}

export default TestSelect
