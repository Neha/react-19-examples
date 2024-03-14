const submitData = async (userData) => {
    const newUser = {
        username: userData.get('username'),
        email: userData.get('email')
    }
    console.log(newUser)
}

const Action = () => {
    return <>
    <h3>action example</h3>
    <form action={submitData}>
        <div>
            <label>User Name</label>
            <input type="text" name='username'/>
        </div>
        <div>
            <label>Email</label>
            <input type="text" name="email" />
        </div>
        <button type='submit'>Submit</button>
    </form>
    </>
}

export default Action;