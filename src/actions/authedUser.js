export const Set_Authed_User = "SET_AUTHED_USER"

export function setAuthedUser(id) {
  return {
    type: Set_Authed_User,
    id
  };
}
