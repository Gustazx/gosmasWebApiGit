import api from "../api";

export async function searchUser(user) {
  try {
    const result = await api.get(`/users/${user}`);
    return result.data;
  } catch (e) {
    console.log(e);
    return {};
  }
}
