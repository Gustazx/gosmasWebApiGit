import api from "../api";

export async function userContent(user, repo) {
  try {
    const result = await api.get(`/repos/${user}/${repo}/contents/`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
