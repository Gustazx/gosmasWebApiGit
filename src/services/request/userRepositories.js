import api from "../api";

export async function searchUserRepositories(user) {
  try {
    const result = await api.get(`/users/${user}/repos`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
