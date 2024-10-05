import { BOOKING, DELETE } from "./actionTypes"

export const booking = (value) => {
    return {
        type: BOOKING,
        payload: value,
    }
}

export const deleteBooking = (id) => {
    return {
        type: DELETE,
        id:id
    }
}