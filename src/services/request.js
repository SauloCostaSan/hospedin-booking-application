import axios from "axios";

export const api = () => {
  getData: () =>
  axios({
    'method':'GET',
    'baseURL': 'https://hml-booking-engine.herokuapp.com/admin/rooms?begin_date=2021-10-01&end_date=2021-12-31',
    // 'params': {
    //   'rooms': {
    //     'room': 'parameter',
    //   },
    //   'begin_date': 'parameter',
    //   'end_date':'parameter'
    // }
  })

}
