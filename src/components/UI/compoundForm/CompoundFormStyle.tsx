/* eslint-disable import/prefer-default-export */
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: fit-content;
  /* border: 1px solid black; */
  border-radius: 20px;
`;

export const FlexCollumn = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  row-gap: 1em;
`;

export const InputDiv = styled.div`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 30px;
  width: inherit;
  padding-left: 15px;
  /* padding-bottom: 1em; */
`;

export const Input = styled.input`
  background: #ffffff;
  padding-bottom: 0.7em;
  padding-right: 12em;
  border: none;
  font-style: normal;
  font-weight: 400;
  &:focus {
    outline: none;
  }
  color: #2d2d2d;
  margin: 5px;
`;

export const Button = styled.button`
  background: #4882da;
  box-shadow: 2px;
  border-radius: 500px;
  padding: 1.5em;
  padding-left: 2.5em;
  padding-right: 2.5em;
  margin: 2px;
  border: none;
  cursor: pointer;
  transition: ease background-color 250ms;
  &:hover {
    background: #73a0ad;
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
  color: #ffffff;
  width: inherit;
`;

export const Title = styled.h1`
  color: #3e3e3e;
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 130%;
`;

export const CompoundLink = styled(Link)`
  width: inherit;
`;

export const Label = styled.p`
  color: #8f8f8f;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
`;
