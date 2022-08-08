import { useDispatch, useSelector } from "react-redux";
import { setValues } from "../../../slices/inputValuesSlice";
import { toggleResult } from "../../../slices/showResultsSlice";
import { RootState } from "../../../store";

import {
  Wrapper,
  Title,
  FlexCollumn,
  Input,
  Button,
  CompoundLink,
  InputDiv,
  Label,
} from "./CompoundFormStyle";

type InputEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

type CompoundFormProps = {
  children: JSX.Element | string;
};

function CompoundForm({ children }: CompoundFormProps) {
  // const valuee = useRef();
  // console.log(valuee);
  const { investedMoney, deadline, interest } = useSelector(
    (state: RootState) => state.inputs
  );
  const dispatch = useDispatch();

  const handleChange = (e: InputEvent) => {
    const { name, value } = e.target;

    const result = value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*?)\..*/g, "$1")
      .replace(/^0[^.]/, "0");

    dispatch(
      setValues({
        [name]: result,
      })
    );
  };

  return (
    <Wrapper>
      <Title>{children}</Title>
      <FlexCollumn>
        <InputDiv>
          <Label>Capital Investido (R$)*</Label>
          <Input
            name="investedMoney"
            value={investedMoney}
            pattern="[0-9.]+"
            onChange={handleChange}
            type="text"
          />
        </InputDiv>
        <InputDiv>
          <Label>Prazo (meses)*</Label>
          <Input
            name="deadline"
            value={deadline}
            onChange={handleChange}
            type="text"
          />
        </InputDiv>
        <InputDiv>
          <Label>Taxa de juros mensal (%)*</Label>
          <Input
            name="interest"
            value={interest}
            onChange={handleChange}
            type="text"
          />
        </InputDiv>

        <CompoundLink to="/">
          <Button onClick={() => dispatch(toggleResult())}>Calcular</Button>
        </CompoundLink>
      </FlexCollumn>
    </Wrapper>
  );
}

export default CompoundForm;
