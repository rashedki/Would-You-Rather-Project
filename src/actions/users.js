export const Load_Users = "LOAD_USERS"
export function loadUsers(users) {
  return {type: Load_Users, users};
}
