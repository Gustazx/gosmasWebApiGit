import api from "../api";

export async function searchRepositories(repositoryName) {
  try {
    const result = await api.get(`/search/repositories?q=${repositoryName}`);
    return result.data;
  } catch (e) {
    console.log(e);
  }
}
