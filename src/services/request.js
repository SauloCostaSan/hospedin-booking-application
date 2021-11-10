import axios from "axios";
import { url } from "../constants/urls";

export const getRooms = (setData, setIsLoading) => {
    setIsLoading(true)
    axios.get(url)
    .then((res)=> {
        setIsLoading(false)
        setData(res.data)
    })
    .catch((err) => {
        setIsLoading(false)
        console.log(err)
    })
}
