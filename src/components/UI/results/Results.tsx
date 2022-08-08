import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { Wrapper, Title, FlexCollumn, ResultDiv } from "./ResultsStyles";

type CompoundFormProps = {
  children: JSX.Element | string;
};

const compoundInterestCalc = (
  investedMoney: number,
  deadline: number,
  interest: number
) => {
  return investedMoney * (1 + interest / 100) ** deadline;
};

function CompoundForm({ children }: CompoundFormProps) {
  const { investedMoney, deadline, interest } = useSelector(
    (state: RootState) => state.inputs
  );

  const totalAmmount = compoundInterestCalc(
    investedMoney as unknown as number,
    deadline as unknown as number,
    interest as unknown as number
  );

  const totalInterest = totalAmmount - (investedMoney as unknown as number);

  return (
    <Wrapper>
      <Title>{children}</Title>
      <FlexCollumn>
        <ResultDiv>{investedMoney}</ResultDiv>
        <ResultDiv>{totalAmmount}</ResultDiv>
        <ResultDiv>{totalInterest}</ResultDiv>
      </FlexCollumn>
    </Wrapper>
  );
}

export default CompoundForm;