import { Button } from "./FeedBackStyled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <Button type="button" onClick={onLeaveFeedback} key={option}>
          {option}
        </Button>
      ))}
    </div>
  );
};
