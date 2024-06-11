import PulseLoader from "react-spinners/PulseLoader";
import styled from "styled-components";
import { useContext } from "react";

import SignInButton from "./components/SignInButton";
import SignOutButton from "./components/SignOutButton";
import SWELogo from "./assets/logo.png";
import UserContext from "./contexts/UserContext";

const App = () => {
  const { isLoading, isAuthenticated } = useContext(UserContext);

  return (
    <Container>
      <Description>
        <Logo src={SWELogo} alt="swe-logo" />
        <TitleText>CAS Auth Example</TitleText>
        <Text>
          This is the official CAS authentication example for Software
          Engineering at Yale University (CPSC 439/539). CAS authentication
          allows you to authenticate against Yale's auth server. This allows you
          to have users sign in with their netid's.
        </Text>
      </Description>
      <AuthContainer>
        {isLoading ? (
          <PulseLoader color="#66CCFF" size={10} />
        ) : isAuthenticated ? (
          <>
            <Text>You are authenticated! 😊</Text>
            <SignOutButton />
          </>
        ) : (
          <>
            <Text>You are not authenticated 🤔</Text>
            <SignInButton />
          </>
        )}
      </AuthContainer>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #121212;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 120px;
`;

const Description = styled.div`
  width: 600px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: top;
  text-align: center;
`;

const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

const TitleText = styled.h1`
  color: #ffffff;
`;

const Text = styled.p`
  color: #ffffff;
`;

const AuthContainer = styled.div`
  margin-top: 60px;
  width: 600px;
  align-items: center;
  flex-direction: column;
  text-align: center;
`;

export default App;
