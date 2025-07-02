import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import styled from 'styled-components';

const NavContainer = styled.nav`
  background-color: ${props => props.theme.cardBg};
  box-shadow: ${props => props.theme.shadow};
`;

const InnerContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: ${props => props.theme.primary};
  text-decoration: none;
`;

const DesktopMenu = styled.div`
  display: none;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  transition: all 0.2s;
  text-decoration: none;
  
  ${props => props.$isActive 
    ? `
      background-color: ${props.theme.primary}20;
      color: ${props.theme.primary};
    `
    : `
      color: ${props.theme.text};
      
      &:hover {
        background-color: ${props.theme.hoverBg};
      }
    `
  }
`;

const ThemeToggleButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: ${props => props.theme.text};
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.hoverBg};
  }
  
  &:focus {
    outline: none;
  }
`;

const MobileMenuButton = styled.button`
  padding: 0.5rem;
  border-radius: 0.375rem;
  color: ${props => props.theme.text};
  background: none;
  border: none;
  cursor: pointer;
  
  @media (min-width: 768px) {
    display: none;
  }
  
  &:hover {
    background-color: ${props => props.theme.hoverBg};
  }
  
  &:focus {
    outline: none;
  }
`;

const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)<{ $isActive?: boolean }>`
  display: block;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  
  ${props => props.$isActive 
    ? `
      background-color: ${props.theme.primary}20;
      color: ${props.theme.primary};
    `
    : `
      color: ${props.theme.text};
      
      &:hover {
        background-color: ${props.theme.hoverBg};
      }
    `
  }
`;

const MobileThemeButton = styled.button`
  width: 100%;
  text-align: left;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  font-weight: 500;
  color: ${props => props.theme.text};
  background: none;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.theme.hoverBg};
  }
`;

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/contact', label: 'Contact' },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <NavContainer>
      <InnerContainer>
        <NavbarWrapper>
          {/* Logo/Brand */}
          <Logo to="/">
            DevSkillsHub
          </Logo>

          {/* Desktop Navigation */}
          <DesktopMenu>
            {navLinks.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                $isActive={isActivePath(path)}
              >
                {label}
              </NavLink>
            ))}
            <ThemeToggleButton
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              ) : (
                <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </ThemeToggleButton>
          </DesktopMenu>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </MobileMenuButton>
        </NavbarWrapper>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <MobileMenu>
            {navLinks.map(({ path, label }) => (
              <MobileNavLink
                key={path}
                to={path}
                $isActive={isActivePath(path)}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {label}
              </MobileNavLink>
            ))}
            <MobileThemeButton
              onClick={() => {
                toggleTheme();
                setIsMobileMenuOpen(false);
              }}
            >
              {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </MobileThemeButton>
          </MobileMenu>
        )}
      </InnerContainer>
    </NavContainer>
  );
};

export default Navbar; 