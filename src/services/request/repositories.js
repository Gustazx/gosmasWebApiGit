import api from "../api";

export async function searchUserRepositories(repositoryName) {
  try {
    const result = await api.get(`/search/repositories ${repositoryName}`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
