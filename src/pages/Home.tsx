import { useSelector } from "react-redux";
import styled from "styled-components";
import CompoundForm from "../components/UI/compoundForm/CompoundForm";
import Results from "../components/UI/results/Results";
import { RootState } from "../store";

const HomeStyles = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 5%;
`;

function Home() {
  const { show } = useSelector((state: RootState) => state.show);

  return (
    <HomeStyles>
      <CompoundForm>Calcule o retorno do seu investimento</CompoundForm>
      {show ? <Results>Resultados</Results> : ""}
    </HomeStyles>
  );
}

export default Home;
