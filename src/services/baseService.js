import axios from "axios"

const BASE_URL = "https://api.kerjoo.com/api/v1/reference"

const AxiosClient = axios.create({
  baseURL: BASE_URL
})

export default AxiosClient
