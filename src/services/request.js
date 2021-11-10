import axios from "axios";

const request = axios.create({
  baseURL:
    "https://hml-booking-engine.herokuapp.com/admin/rooms?begin_date=2021-10-01&end_date=2021-12-31",
});

export default request;
