export const homeBooking = (navigate) => {
  navigate.push("/")
};
export const routePayment = (navigate) => {
  navigate.push(`/payment/:name/:price/:checkIn/:checkOut`)
};
export const concludedBooking = (navigate) => {
  navigate.push(`/concluded`)
};
