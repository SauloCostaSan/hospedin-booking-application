import axios from "axios";
import { api } from "./request";

export const getRooms =  async (checkIn, checkOut) => {
  console.log( checkIn, checkOut)
     return api.get(`https://hml-booking-engine.herokuapp.com/admin/rooms?begin_date=${checkIn}&end_date=${checkOut}`)

}
