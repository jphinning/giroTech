import styled from "styled-components";
import CompoundForm from "../components/UI/compoundForm/CompoundForm";

const HomeStyles = styled.div`
  display: flex;
  justify-content: center;
`;

function Home() {
  return (
    <HomeStyles>
      <CompoundForm>Calcule o retorno do seu investimento</CompoundForm>
    </HomeStyles>
  );
}

export default Home;
