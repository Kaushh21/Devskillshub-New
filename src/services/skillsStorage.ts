import { Skill } from '../types/skill';

const SKILLS_STORAGE_KEY = 'devskillshub_skills';

export const saveSkills = (skills: Skill[]): void => {
  localStorage.setItem(SKILLS_STORAGE_KEY, JSON.stringify(skills));
};

export const loadSkills = (): Skill[] => {
  const storedSkills = localStorage.getItem(SKILLS_STORAGE_KEY);
  return storedSkills ? JSON.parse(storedSkills) : [];
};

export const addSkill = (skill: Omit<Skill, 'id' | 'lastUpdated'>): Skill => {
  const skills = loadSkills();
  const newSkill: Skill = {
    ...skill,
    id: Math.random().toString(36).substr(2, 9),
    lastUpdated: new Date().toISOString(),
  };
  
  skills.push(newSkill);
  saveSkills(skills);
  return newSkill;
};

export const updateSkill = (id: string, updates: Partial<Omit<Skill, 'id'>>): Skill | null => {
  const skills = loadSkills();
  const index = skills.findIndex(skill => skill.id === id);
  
  if (index === -1) return null;
  
  const updatedSkill: Skill = {
    ...skills[index],
    ...updates,
    lastUpdated: new Date().toISOString(),
  };
  
  skills[index] = updatedSkill;
  saveSkills(skills);
  return updatedSkill;
};

export const deleteSkill = (id: string): boolean => {
  const skills = loadSkills();
  const filteredSkills = skills.filter(skill => skill.id !== id);
  
  if (filteredSkills.length === skills.length) return false;
  
  saveSkills(filteredSkills);
  return true;
}; 