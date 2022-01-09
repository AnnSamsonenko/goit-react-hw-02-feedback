import { List, Item } from "./StatisticsStyled";

export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <List>
      <Item key="good">Good: {good}</Item>
      <Item key="neutral">Neutral: {neutral}</Item>
      <Item key="bad">Bad: {bad}</Item>
      <Item key="total">Total: {total}</Item>
      <Item key="percent">Positive feedback: {positivePercentage}%</Item>
    </List>
  );
};
