import axios from "axios";
import { api } from "../constants/api";

export const getRooms = (setData, setIsLoading) => {
  setIsLoading(true);
  axios.get(api).then((res) => { setData(res.data), setIsLoading(false)
  })
  .catch((err) => { console.log(err), setIsLoading(false)})
}
