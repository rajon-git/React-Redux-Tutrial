import { BOOKING } from "./actionTypes";

const initialState = [];

const bookingReducer = (state=initialState,action) => {
    const copiedState = [...state]
    const {type,payload,id} = action;

    switch(type) {
        case BOOKING:
            const lastBookid = copiedState[copiedState.length -1]?.id;
            const newBook = {...payload, id: lastBookid ? (lastBookid + 1) : 1};
            copiedState.push(newBook)
            return copiedState;
        default:
            return state;
    }
}