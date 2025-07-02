import axios from 'axios';

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

const GITHUB_API_BASE_URL = 'https://api.github.com';

export const fetchUserRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/users/${username}/repos`,
      {
        params: {
          sort: 'updated',
          per_page: 10,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    throw error;
  }
};

export const fetchRepoDetails = async (username: string, repoName: string): Promise<GitHubRepo> => {
  try {
    const response = await axios.get(
      `${GITHUB_API_BASE_URL}/repos/${username}/${repoName}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching repo details:', error);
    throw error;
  }
}; 