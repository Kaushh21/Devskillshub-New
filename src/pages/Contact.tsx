import React from 'react';
import styled from 'styled-components';
import ContactForm from '../components/ContactForm';

const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const ContentWrapper = styled.div`
  max-width: 42rem;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 1.875rem;
  font-weight: 700;
  color: ${props => props.theme.text};
  margin-bottom: 1rem;
`;

const SubTitle = styled.p`
  font-size: 1.125rem;
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)'};
`;

const FormCard = styled.div`
  background-color: ${props => props.theme.cardBg};
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadow};
  padding: 1.5rem;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const InfoSection = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

const InfoCard = styled.div`
  text-align: center;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  color: ${props => props.theme.primary};
`;

const InfoTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${props => props.theme.text};
  margin-bottom: 0.5rem;
`;

const InfoText = styled.p`
  color: ${props => props.theme.text === '#ffffff' ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.6)'};
`;

const InfoLink = styled.a`
  color: ${props => props.theme.primary};
  text-decoration: none;
  
  &:hover {
    color: ${props => props.theme.primary === '#3182ce' ? '#2c5282' : '#63b3ed'};
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const Contact: React.FC = () => {
  return (
    <Container>
      <ContentWrapper>
        <Header>
          <Title>
            Get in Touch
          </Title>
          <SubTitle>
            Have a question or want to work together? I'd love to hear from you.
          </SubTitle>
        </Header>

        <FormCard>
          <ContactForm />
        </FormCard>

        <InfoSection>
          <InfoCard>
            <IconWrapper>
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </IconWrapper>
            <InfoTitle>
              Email
            </InfoTitle>
            <InfoLink href="mailto:your.email@example.com">
              your.email@example.com
            </InfoLink>
          </InfoCard>

          <InfoCard>
            <IconWrapper>
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                />
              </svg>
            </IconWrapper>
            <InfoTitle>
              Social
            </InfoTitle>
            <SocialLinks>
              <InfoLink
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </InfoLink>
              <InfoLink
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </InfoLink>
            </SocialLinks>
          </InfoCard>

          <InfoCard>
            <IconWrapper>
              <svg
                width="32"
                height="32"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </IconWrapper>
            <InfoTitle>
              Location
            </InfoTitle>
            <InfoText>
              Your City, Country
            </InfoText>
          </InfoCard>
        </InfoSection>
      </ContentWrapper>
    </Container>
  );
};

export default Contact; 