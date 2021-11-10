import request from "request";

const getRooms = (beginDate, endDate) =>
  request.get(`/rooms?begin_date=${beginDate}&end_date=${endDate}`);
export { getRooms };
