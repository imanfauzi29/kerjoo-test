import AxiosClient from "./baseService"

export const getProvincies = () =>
  AxiosClient.get("/provinces").then((res) => res.data)

export const getRegency = (provinceId) =>
  AxiosClient.get(`/regencies_of/${provinceId}`).then((res) => res.data)

export const getDistrict = (regencyId) =>
  AxiosClient.get(`/districts_of/${regencyId}`).then((res) => res.data)

export const getVillage = (districtId) =>
  AxiosClient.get(`/villages_of/${districtId}`).then((res) => res.data)
