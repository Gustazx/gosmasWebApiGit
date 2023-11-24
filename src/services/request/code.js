import api from "../api";

export async function codeSearch(user, repo, fileName) {
  try {
    const result = await api.get(`/repos/${user}/${repo}/contents/${fileName}`);
    console.log(result.data);
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
