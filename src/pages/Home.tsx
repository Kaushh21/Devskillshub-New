import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeroSection = styled.section`
  background: linear-gradient(to right, #3182ce, #2c5282);
  padding: 4rem 1rem;
  
  @media (min-width: 768px) {
    padding: 6rem 1rem;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const HeroContent = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
  
  @media (min-width: 768px) {
    font-size: 3.75rem;
  }
`;

const HeroText = styled.p`
  font-size: 1.25rem;
  color: #ebf8ff;
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const PrimaryButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: white;
  color: #3182ce;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    background-color: #ebf8ff;
  }
`;

const SecondaryButton = styled(Link)`
  padding: 0.75rem 1.5rem;
  background-color: transparent;
  color: white;
  font-weight: 600;
  border: 2px solid white;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    background-color: white;
    color: #3182ce;
  }
`;

const FeaturesSection = styled.section`
  padding: 4rem 1rem;
  background-color: ${props => props.theme.body === '#ffffff' ? '#f7fafc' : props.theme.background};
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 700;
  text-align: center;
  color: ${props => props.theme.text};
  margin-bottom: 3rem;
`;

const FeaturesGrid = styled.div`
  display: grid;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const FeatureCard = styled.div`
  background-color: ${props => props.theme.cardBg};
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadow};
  transition: all 0.2s;
  
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }
`;

const FeatureIcon = styled.div`
  color: ${props => props.theme.primary};
  margin-bottom: 1rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)'};
`;

const CTASection = styled.section`
  padding: 4rem 1rem;
  background-color: ${props => props.theme.cardBg};
`;

const CTAText = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)'};
  margin-bottom: 2rem;
  max-width: 42rem;
  margin-left: auto;
  margin-right: auto;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  padding: 1rem 2rem;
  background-color: ${props => props.theme.primary};
  color: white;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.2s;
  
  &:hover {
    background-color: ${props => props.theme.primary === '#3182ce' ? '#2c5282' : '#3182ce'};
  }
`;

const Home: React.FC = () => {
  const features = [
    {
      title: 'Skill Tracking',
      description: 'Monitor your progress and growth in various technical skills',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: 'Project Showcase',
      description: 'Display your GitHub projects and contributions',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: 'Visual Progress',
      description: 'View your skill development through interactive charts',
      icon: (
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <Container>
          <HeroContent>
            <HeroTitle>
              Track Your Development Journey
            </HeroTitle>
            <HeroText>
              Monitor your progress, showcase your skills, and build your developer portfolio
              all in one place.
            </HeroText>
            <ButtonContainer>
              <PrimaryButton to="/skills">
                Start Tracking
              </PrimaryButton>
              <SecondaryButton to="/projects">
                View Projects
              </SecondaryButton>
            </ButtonContainer>
          </HeroContent>
        </Container>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <Container>
          <SectionTitle>
            Everything You Need
          </SectionTitle>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard key={index}>
                <FeatureIcon>{feature.icon}</FeatureIcon>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </Container>
      </FeaturesSection>

      {/* CTA Section */}
      <CTASection>
        <Container>
          <SectionTitle>
            Ready to Start Your Journey?
          </SectionTitle>
          <CTAText>
            Begin tracking your skills, showcasing your projects, and building your
            developer portfolio today.
          </CTAText>
          <CTAButton to="/skills">
            Get Started Now
          </CTAButton>
        </Container>
      </CTASection>
    </>
  );
};

export default Home; 