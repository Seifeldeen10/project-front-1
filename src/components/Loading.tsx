import styled from 'styled-components';

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  color: var(--primary);
`;

const Loading = () => <Spinner role="status" aria-live="polite">Loading...</Spinner>;

export default Loading;