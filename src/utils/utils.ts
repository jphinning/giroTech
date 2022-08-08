/* eslint-disable import/prefer-default-export */
export const currencyFormatter = (number: number) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",

    // These options are needed to round to whole numbers if that's what you want.
    minimumFractionDigits: 2, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    maximumFractionDigits: 2, // (causes 2500.99 to be printed as $2,501)
  }).format(number);
};

export const compoundInterestCalc = (
  investedMoney: number,
  deadline: number,
  interest: number
) => {
  return investedMoney * (1 + interest / 100) ** deadline;
};
