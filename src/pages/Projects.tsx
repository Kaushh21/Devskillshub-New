import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import { fetchUserRepos, GitHubRepo } from '../services/githubAPI';

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const PageHeader = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin-bottom: 1.5rem;
`;

const SearchForm = styled.form`
  max-width: 28rem;
  margin-bottom: 2rem;
`;

const FormGroup = styled.div`
  display: flex;
  gap: 1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.primary}40;
  }
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${props => props.theme.primary};
  color: white;
  font-weight: 500;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.primary === '#3182ce' ? '#2c5282' : '#3182ce'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.primary}40;
  }
`;

const ErrorMessage = styled.div`
  background-color: ${props => props.theme.text === '#ffffff' ? 'rgba(254, 202, 202, 0.2)' : 'rgba(254, 202, 202, 0.8)'};
  color: #b91c1c;
  padding: 1rem;
  border-radius: 0.375rem;
  margin-bottom: 1.5rem;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  
  &::after {
    content: "";
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border: 2px solid ${props => props.theme.background};
    border-bottom-color: ${props => props.theme.primary};
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const EmptyMessage = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
`;

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [username, setUsername] = useState(''); // You can set a default GitHub username here

  useEffect(() => {
    const loadProjects = async () => {
      if (!username) return;
      
      try {
        setIsLoading(true);
        setError(null);
        const repos = await fetchUserRepos(username);
        setProjects(repos);
      } catch (err) {
        setError('Failed to load projects. Please check the username and try again.');
        console.error('Error loading projects:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadProjects();
  }, [username]);

  const handleUsernameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newUsername = formData.get('username') as string;
    setUsername(newUsername);
  };

  return (
    <Container>
      <PageHeader>
        <Title>
          My GitHub Projects
        </Title>

        <SearchForm onSubmit={handleUsernameSubmit}>
          <FormGroup>
            <Input
              type="text"
              name="username"
              placeholder="Enter GitHub username"
              required
            />
            <Button type="submit">
              Load Projects
            </Button>
          </FormGroup>
        </SearchForm>

        {error && (
          <ErrorMessage>
            {error}
          </ErrorMessage>
        )}
      </PageHeader>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ProjectsGrid>
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
          {projects.length === 0 && !error && username && (
            <EmptyMessage>
              No projects found for this username.
            </EmptyMessage>
          )}
        </ProjectsGrid>
      )}
    </Container>
  );
};

export default Projects; 