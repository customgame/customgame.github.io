import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  max-width: 512px;
  box-sizing: border-box;
  margin-bottom: 1rem;
  background-color: #333;
  color: #fff;
  font-family: 'Roboto', sans-serif; /* Apply Roboto font */
`;

const StyledLabel = styled.label`
  display: block;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #fff;
  font-family: 'Roboto', sans-serif; /* Apply Roboto font */
  text-align: left; /* Align label to the left */
`;

const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
`;

export function NxWelcome() {
  return (
    <CenteredDiv>
      <img src="dist/customgame.github.io/aetheryte_by_khatlana_df53wgx.png" alt="Aetheryte from Final Fantasy XIV Online" style={{ display: 'block', margin: '0 auto 4rem' }} />
      <div style={{ width: '100%', maxWidth: '512px' }}>
        <StyledLabel htmlFor="username">Enter your desired username</StyledLabel>
        <StyledInput id="username" type="text" placeholder="e.g. enny" />
        <StyledLabel htmlFor="charname">Enter your character's full name</StyledLabel>
        <StyledInput id="charname" type="text" placeholder="e.g. Enny Treeborne" />
        <StyledLabel htmlFor="password">Enter your desired password</StyledLabel>
        <StyledInput id="password" type="password" placeholder="e.g. ennypassword" />
      </div>
    </CenteredDiv>
  );
}

export default NxWelcome;
