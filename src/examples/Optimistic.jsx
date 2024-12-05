import { useOptimistic, useState } from "react";

const Optimistic = () => {
  const [messages, setMessages] = useState([
    { text: "Intial message", sending: false, key: 1 },
  ]);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state, newMessage) => [
      ...state,
      {
        text: newMessage,
        sending: true,
      },
    ]
  );

  async function sendFormData(formData) {
    const sentMessage = await fakeDelayAction(formData.get("message"));
    setMessages((messages) => [...messages, { text: sentMessage }]);
  }

  async function fakeDelayAction(message) {
    await new Promise((res) => setTimeout(res, 1000));
    return message;
  }

  const submitData = async (userData) => {
    addOptimisticMessage(userData.get("username"));

    await sendFormData(userData);
  };

  return (
    <> 
      {optimisticMessages.map((message, index) => (
        <div className="font-bold" key={index}>
          {message.text}
          {!!message.sending && <small> (Sending...)</small>}
        </div>
      ))}
      <form action={submitData}>
      <h3 className="text-orange-400 font-bold">useOptimistic() example</h3>
        <div className="my-3">
          <label>Username</label>
          <input type="text" name="username" className="border-2 rounded-md"/>
        </div>
        <button type="submit" className="bg-blue-400">Submit</button>
      </form>
    </>
  );
};

export default Optimistic;
