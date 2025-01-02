import styled from 'styled-components';
import NxWelcome from './nx-welcome';

const StyledApp = styled.div`
  font-family: 'Roboto', sans-serif; /* Apply Roboto font */
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="customgame.github.io" />
    </StyledApp>
  );
}

export default App;
