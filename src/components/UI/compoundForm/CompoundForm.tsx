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
        <Input
          placeholder="Capital Investido (R$)*"
          size="2em"
          name="investedMoney"
          value={investedMoney}
          pattern="[0-9.]+"
          onChange={handleChange}
          required
        />
        <Input
          placeholder="Prazo (meses)*"
          size="2em"
          name="deadline"
          value={deadline}
          onChange={handleChange}
          realValue="2"
          required
        />
        <Input
          placeholder="Taxa de juros mensal (%)*"
          size="2em"
          name="interest"
          value={interest}
          onChange={handleChange}
          required
        />
        <CompoundLink to="/">
          <Button onClick={() => dispatch(toggleResult())}>Calcular</Button>
        </CompoundLink>
      </FlexCollumn>
    </Wrapper>
  );
}

export default CompoundForm;
