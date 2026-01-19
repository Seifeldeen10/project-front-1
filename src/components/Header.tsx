import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const Nav = styled.nav`
  background: var(--primary);
  color: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Logo = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  text-decoration: none;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover { opacity: 0.8; }
`;

const Header = () => {
  const navigate = useNavigate();
  const [isAuth] = useState(!!localStorage.getItem('token'));
  
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <Nav role="navigation" aria-label="Main navigation">
      <Container>
        <Logo to="/" aria-label="Home">RecipeHub</Logo>
        <NavLinks>
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/submit">Submit</NavLink>
          {isAuth ? (
            <>
              <NavLink to="/profile">Profile</NavLink>
              <button onClick={handleLogout} className="text-white hover:opacity-80">Logout</button>
            </>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </NavLinks>
      </Container>
    </Nav>
  );
};

export default Header;