import { BOOKING } from "./bookingReducer"

export const booking = (value) => {
    return {
        type: BOOKING,
        payload: value,
    }
}