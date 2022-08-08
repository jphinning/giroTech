import { useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import { compoundInterestCalc, currencyFormatter } from "../../../utils/utils";
import { Wrapper, Title, FlexCollumn, ResultDiv, Label } from "./ResultsStyles";

type CompoundFormProps = {
  children: JSX.Element | string;
};

function CompoundForm({ children }: CompoundFormProps) {
  const { investedMoney, deadline, interest } = useSelector(
    (state: RootState) => state.inputs
  );

  const totalAmmount = useMemo(
    () =>
      compoundInterestCalc(
        investedMoney as unknown as number,
        deadline as unknown as number,
        interest as unknown as number
      ),
    [investedMoney, deadline, interest]
  );

  const totalInterest = useMemo(
    () => totalAmmount - (investedMoney as unknown as number),
    [totalAmmount, investedMoney]
  );

  return (
    <Wrapper>
      <Title>{children}</Title>
      <FlexCollumn>
        <ResultDiv color="#455a64">
          <Label> Valor total investido</Label>
          {currencyFormatter(investedMoney as unknown as number)}
        </ResultDiv>
        <ResultDiv color="#6115dd">
          <Label> Valor total final</Label>
          {currencyFormatter(totalAmmount as unknown as number)}
        </ResultDiv>
        <ResultDiv color="#117729">
          <Label> Total em juros</Label>
          {currencyFormatter(totalInterest as unknown as number)}
        </ResultDiv>
      </FlexCollumn>
    </Wrapper>
  );
}

export default CompoundForm;
