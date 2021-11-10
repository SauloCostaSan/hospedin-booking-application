import axios from "axios";
import * as env from "../.env.json"

export const api = axios.create({
  baseURL:`https://hml-booking-engine.herokuapp.com/admin/rooms=${env.rooms}?begin_date=${env.beginDate}&end_date=${env.endDate}`
});
