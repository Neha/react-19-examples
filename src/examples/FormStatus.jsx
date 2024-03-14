import { useFormStatus } from "react-dom";

function Submit() {
  const {pending} = useFormStatus();
  return <button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>;
}

const formAction = async () => {
  // Simulate a delay of 2 seconds
  await new Promise((resolve) => setTimeout(resolve, 3000));
}

const FormStatus = () => {
  return (
   <>
    <h3>useFormStatus() example</h3>
    <form action={formAction}>
      <Submit />
    </form>
   </>
  );
};

export default FormStatus;
