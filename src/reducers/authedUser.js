import { Set_Authed_User} from "../actions/authedUser"

export default function authedUser(state = null, action) {
  switch (action.type) {
    case Set_Authed_User:
      return action.id;
    default:
      return state;
  }
}
