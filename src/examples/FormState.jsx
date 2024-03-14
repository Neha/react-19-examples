import { useFormState} from 'react-dom';

const FormState = () => {
    const submitForm = (prevState, queryData) => {
        const name =  queryData.get("username");
        console.log(prevState); // previous form state
        if(name === 'john'){
            return {
                success: true,
                text: "Welcome"
            }
        }
        else{
            return {
                success: false,
                text: "Error"
            }
        }
    }
    const [ message, formAction ] = useFormState(submitForm, null)
    return <>
    <h3>useFormState() example</h3>
    <form action={formAction}>
        <label>Name</label>
        <input type="text" name="username" />
        <br />
        <button>Submit</button>
        {message && <h4>{message.text}</h4>}
    </form>
    </>
}

export default FormState;