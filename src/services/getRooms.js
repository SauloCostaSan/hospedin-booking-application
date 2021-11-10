import axios from "axios";

export const getRooms = async(checkIn, checkOut) => {
  console.log( checkIn, checkOut)
     axios.get(`https://hml-booking-engine.herokuapp.com/admin/rooms=?begin_date=${checkIn}&end_date=${checkOut}`).then((res)=> {
      setIsLoading(false)
      setData(res.data)
      if(res.data == true) {
        (console.log(` funcionou `))
      }
      (console.log(` não funcionou` ));
  })
}
