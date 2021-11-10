export const homeBooking = (navigate) => {
  navigate.push("/")
};
export const routePayment = (navigate, id) => {
  navigate.push(`payment/${id}`)
};
export const concludedBooking = (navigate, id) => {
  navigate.push(`/concluded`)
};
