import {Load_Questions} from "../actions/questions"

export default function questions(state = {}, action) {
  switch (action.type) {
    case Load_Questions:
      return {...state, ...action.questions};
    default:
      return state;
  }
}
