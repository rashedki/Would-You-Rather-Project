import {Load_Users} from "../actions/users"

export default function users(state = {}, action) {
  switch (action.type) {
    case Load_Users:
      return {...state, ...action.users}
    default:
      return state;
  }
}
