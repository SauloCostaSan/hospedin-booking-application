import axios from "axios";

export const api = axios.create({
  baseURL: 'https://hml-booking-engine.herokuapp.com/admin/rooms?begin_date=2021-10-01&end_date=2021-12-31',
})
