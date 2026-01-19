import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #1f2937;
  color: white;
  padding: 2rem;
  text-align: center;
  margin-top: auto;
`;

const Footer = () => (
  <FooterContainer role="contentinfo">
    <p>&copy; 2024 RecipeHub. All rights reserved.</p>
  </FooterContainer>
);

export default Footer;