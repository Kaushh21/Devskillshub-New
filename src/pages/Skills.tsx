import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SkillCard from '../components/SkillCard';
import SkillForm from '../components/SkillForm';
import SkillChart from '../components/SkillChart';
import { Skill } from '../types/skill';
import * as skillsStorage from '../services/skillsStorage';

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const HeaderSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${props => props.theme.text};
`;

const AddButton = styled.button`
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

const ChartSection = styled.div`
  margin-bottom: 3rem;
`;

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  z-index: 50;
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.cardBg};
  border-radius: 0.5rem;
  padding: 1.5rem;
  max-width: 28rem;
  width: 100%;
`;

const ModalTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const CategorySection = styled.div`
  margin-bottom: 2rem;
`;

const CategoryTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const SkillsGrid = styled.div`
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

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | undefined>(undefined);

  useEffect(() => {
    // Load skills from storage on component mount
    const loadedSkills = skillsStorage.loadSkills();
    setSkills(loadedSkills);
  }, []);

  const handleAddSkill = (skillData: Omit<Skill, 'id' | 'lastUpdated'>) => {
    const newSkill = skillsStorage.addSkill(skillData);
    setSkills(prev => [...prev, newSkill]);
    setIsFormOpen(false);
  };

  const handleEditSkill = (skill: Skill) => {
    setEditingSkill(skill);
    setIsFormOpen(true);
  };

  const handleUpdateSkill = (skillData: Omit<Skill, 'id' | 'lastUpdated'>) => {
    if (!editingSkill) return;
    
    const updatedSkill = skillsStorage.updateSkill(editingSkill.id, skillData);
    if (updatedSkill) {
      setSkills(prev => prev.map(skill => 
        skill.id === updatedSkill.id ? updatedSkill : skill
      ));
    }
    setIsFormOpen(false);
    setEditingSkill(undefined);
  };

  const handleDeleteSkill = (id: string) => {
    const success = skillsStorage.deleteSkill(id);
    if (success) {
      setSkills(prev => prev.filter(skill => skill.id !== id));
    }
  };

  const handleFormCancel = () => {
    setIsFormOpen(false);
    setEditingSkill(undefined);
  };

  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    const category = skill.category || 'Uncategorized';
    return {
      ...acc,
      [category]: [...(acc[category] || []), skill],
    };
  }, {} as Record<string, Skill[]>);

  return (
    <Container>
      <HeaderSection>
        <Title>
          My Skills
        </Title>
        <AddButton onClick={() => setIsFormOpen(true)}>
          Add New Skill
        </AddButton>
      </HeaderSection>

      {/* Skills Chart */}
      <ChartSection>
        <SkillChart skills={skills} />
      </ChartSection>

      {/* Add/Edit Skill Form */}
      {isFormOpen && (
        <Modal>
          <ModalContent>
            <ModalTitle>
              {editingSkill ? 'Edit Skill' : 'Add New Skill'}
            </ModalTitle>
            <SkillForm
              skill={editingSkill}
              onSubmit={editingSkill ? handleUpdateSkill : handleAddSkill}
              onCancel={handleFormCancel}
            />
          </ModalContent>
        </Modal>
      )}

      {/* Skills List by Category */}
      {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
        <CategorySection key={category}>
          <CategoryTitle>
            {category}
          </CategoryTitle>
          <SkillsGrid>
            {categorySkills.map(skill => (
              <SkillCard
                key={skill.id}
                skill={skill}
                onEdit={handleEditSkill}
                onDelete={handleDeleteSkill}
              />
            ))}
          </SkillsGrid>
        </CategorySection>
      ))}
    </Container>
  );
};

export default Skills; 