import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Skill } from '../types/skill';

interface SkillFormProps {
  skill?: Skill;
  onSubmit: (skill: Omit<Skill, 'id' | 'lastUpdated'>) => void;
  onCancel: () => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'};
  margin-bottom: 0.25rem;
`;

const Input = styled.input`
  margin-top: 0.25rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
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

const TextArea = styled.textarea`
  margin-top: 0.25rem;
  padding: 0.5rem 0.75rem;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid ${props => props.theme.border};
  background-color: ${props => props.theme.cardBg};
  color: ${props => props.theme.text};
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${props => props.theme.primary};
    box-shadow: 0 0 0 2px ${props => props.theme.primary}40;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
`;

const CancelButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.7)'};
  background-color: ${props => props.theme.cardBg};
  border: 1px solid ${props => props.theme.border};
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
  }
`;

const SubmitButton = styled.button`
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  color: white;
  background-color: ${props => props.theme.primary};
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.primary === '#3182ce' ? '#2c5282' : '#3182ce'};
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${props => props.theme.background}, 
                0 0 0 4px ${props => props.theme.primary};
  }
`;

const SkillForm: React.FC<SkillFormProps> = ({ skill, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    proficiency: 1,
    notes: '',
  });

  useEffect(() => {
    if (skill) {
      setFormData({
        name: skill.name,
        category: skill.category,
        proficiency: skill.proficiency,
        notes: skill.notes?.[0] || '',
      });
    }
  }, [skill]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name: formData.name,
      category: formData.category,
      proficiency: formData.proficiency,
      notes: formData.notes ? [formData.notes] : [],
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label htmlFor="name">
          Skill Name
        </Label>
        <Input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="category">
          Category
        </Label>
        <Input
          type="text"
          id="category"
          value={formData.category}
          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="proficiency">
          Proficiency (1-10)
        </Label>
        <Input
          type="number"
          id="proficiency"
          min="1"
          max="10"
          value={formData.proficiency}
          onChange={(e) => setFormData({ ...formData, proficiency: parseInt(e.target.value) })}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="notes">
          Notes
        </Label>
        <TextArea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          rows={3}
        />
      </FormGroup>

      <ButtonGroup>
        <CancelButton
          type="button"
          onClick={onCancel}
        >
          Cancel
        </CancelButton>
        <SubmitButton type="submit">
          {skill ? 'Update' : 'Add'} Skill
        </SubmitButton>
      </ButtonGroup>
    </Form>
  );
};

export default SkillForm; 