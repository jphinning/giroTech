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
`;

export const ResultDiv = styled.div`
  background: #ffffff;
  text-align: center;
  border: 1px solid #dcdcdc;
  border-radius: 5px;
  padding-left: 15px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
  color: #2d2d2d;
  margin: 5px;
  padding: 15px;
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
