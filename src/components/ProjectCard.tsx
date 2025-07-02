import React from 'react';
import styled from 'styled-components';

interface Project {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
  forks_count: number;
}

interface ProjectCardProps {
  project: Project;
}

const Card = styled.div`
  background-color: ${props => props.theme.cardBg};
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  transition: all 0.3s ease;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ProjectName = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

const ProjectLink = styled.a`
  &:hover {
    color: ${props => props.theme.primary};
  }
`;

const Description = styled.p`
  margin-top: 0.5rem;
  color: ${props => props.theme.secondaryText};
`;

const MetaContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: ${props => props.theme.secondaryText};
`;

const LanguageDot = styled.span`
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background-color: ${props => props.theme.primary};
  margin-right: 0.5rem;
`;

const IconWrapper = styled.svg`
  width: 1rem;
  height: 1rem;
  margin-right: 0.25rem;
`;

const ViewRepoLink = styled.a`
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.primary};
  
  &:hover {
    color: ${props => props.theme.primary === '#3182ce' ? '#2c5282' : '#3182ce'};
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <Card>
      <Header>
        <div>
          <ProjectName>
            <ProjectLink
              href={project.html_url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </ProjectLink>
          </ProjectName>
          <Description>
            {project.description || 'No description available'}
          </Description>
        </div>
      </Header>

      <MetaContainer>
        {project.language && (
          <MetaItem>
            <LanguageDot />
            {project.language}
          </MetaItem>
        )}
        <MetaItem>
          <IconWrapper
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
            />
          </IconWrapper>
          {project.stargazers_count}
        </MetaItem>
        <MetaItem>
          <IconWrapper
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </IconWrapper>
          {project.forks_count}
        </MetaItem>
      </MetaContainer>

      <ViewRepoLink
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
      >
        View Repository
        <IconWrapper
          style={{ marginLeft: '0.25rem' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </IconWrapper>
      </ViewRepoLink>
    </Card>
  );
};

export default ProjectCard; 