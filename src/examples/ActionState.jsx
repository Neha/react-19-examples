import { useActionState } from "react";

const increment = async (previousNumber, formData) => {
  return previousNumber + Number(formData.get("number"));
};

const ActionState = () => {
  const [currentNumber, incrementFormAction] = useActionState(increment, 0);
  return (
    <>
      <h3>useActionState example</h3>
      <form action={incrementFormAction}>
        <p>{currentNumber}</p>
        <input type="number" name="number" defaultValue="1" />
        <button type="submit">Increment</button>
      </form>
    </>
  );
};

export default ActionState;
