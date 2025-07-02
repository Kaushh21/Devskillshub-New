import React from 'react';
import styled from 'styled-components';
import { Skill } from '../types/skill';

interface SkillCardProps {
  skill: Skill;
  onEdit: (skill: Skill) => void;
  onDelete: (id: string) => void;
}

const Card = styled.div`
  background-color: ${props => props.theme.cardBg};
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadow};
  padding: 1.5rem;
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
`;

const TitleSection = styled.div``;

const SkillTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.text};
`;

const SkillCategory = styled.p`
  font-size: 0.875rem;
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: ${props => props.theme.primary};
  
  &:hover {
    color: ${props => props.theme.primary === '#3182ce' ? '#2c5282' : '#63b3ed'};
  }
`;

const DeleteButton = styled(IconButton)`
  color: #e53e3e;
  
  &:hover {
    color: #c53030;
  }
`;

const ProgressSection = styled.div`
  margin-bottom: 1rem;
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
`;

const ProgressTrack = styled.div`
  flex: 1;
  height: 0.5rem;
  background-color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)'};
  border-radius: 9999px;
`;

const ProgressFill = styled.div<{ $level: number; $color: string }>`
  height: 0.5rem;
  border-radius: 9999px;
  width: ${props => props.$level * 10}%;
  background-color: ${props => props.$color};
`;

const ProgressText = styled.span`
  margin-left: 0.5rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)'};
`;

const NotesSection = styled.div`
  margin-top: 1rem;
`;

const NotesTitle = styled.h4`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'};
  margin-bottom: 0.5rem;
`;

const NotesList = styled.ul`
  font-size: 0.875rem;
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.6)' : 'rgba(0, 0, 0, 0.6)'};
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const NoteItem = styled.li`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UpdatedText = styled.div`
  margin-top: 1rem;
  font-size: 0.75rem;
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.5)'};
`;

const SkillCard: React.FC<SkillCardProps> = ({ skill, onEdit, onDelete }) => {
  const getProficiencyColor = () => {
    if (skill.proficiency >= 8) return '#48bb78'; // green
    if (skill.proficiency >= 5) return '#ecc94b'; // yellow
    return '#f56565'; // red
  };

  return (
    <Card>
      <CardHeader>
        <TitleSection>
          <SkillTitle>{skill.name}</SkillTitle>
          <SkillCategory>{skill.category}</SkillCategory>
        </TitleSection>
        <ActionButtons>
          <IconButton onClick={() => onEdit(skill)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
            </svg>
          </IconButton>
          <DeleteButton onClick={() => onDelete(skill.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </DeleteButton>
        </ActionButtons>
      </CardHeader>

      <ProgressSection>
        <ProgressBar>
          <ProgressTrack>
            <ProgressFill $level={skill.proficiency} $color={getProficiencyColor()} />
          </ProgressTrack>
          <ProgressText>
            {skill.proficiency}/10
          </ProgressText>
        </ProgressBar>
      </ProgressSection>

      {skill.notes && skill.notes.length > 0 && (
        <NotesSection>
          <NotesTitle>
            Recent Notes
          </NotesTitle>
          <NotesList>
            {skill.notes.slice(0, 2).map((note, index) => (
              <NoteItem key={index}>
                • {note}
              </NoteItem>
            ))}
          </NotesList>
        </NotesSection>
      )}

      <UpdatedText>
        Last updated: {new Date(skill.lastUpdated).toLocaleDateString()}
      </UpdatedText>
    </Card>
  );
};

export default SkillCard; 