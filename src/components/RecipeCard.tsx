import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled(Link)`
  display: block;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.2s;
  text-decoration: none;
  color: inherit;
  &:hover { transform: translateY(-4px); }
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  loading: lazy;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
`;

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  rating?: number;
}

const RecipeCard = ({ id, title, image, rating }: RecipeCardProps) => (
  <Card to={`/recipes/${id}`} aria-label={`View ${title} recipe`}>
    <Img src={image} alt={title} loading="lazy" />
    <Content>
      <Title>{title}</Title>
      {rating && <span>⭐ {rating}/5</span>}
    </Content>
  </Card>
);

export default RecipeCard;