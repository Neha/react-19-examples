import "./App.css";
import { Suspense } from "react";
import Users from "./examples/Users";
import Theme from "./examples/Theme";
import Action from "./examples/Action";
import Optimistic from "./examples/Optimistic";
import FormStatus from "./examples/FormStatus";
import FormState from "./examples/FormState";

const fetchPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

function App() {
  const fetchPostsPromise = fetchPosts();
  return (
    <>
      <div>
        <Suspense
          fallback={
            <h1 className="text-2xl text-center font-bold mt-5">Loading...</h1>
          }
        >
          <Users fetchPostsPromise={fetchPostsPromise} />
          {/* <Action /> */}
          {/* <FormState /> */}
          {/* <FormStatus /> */}
          {/* <Optimistic /> */}
          
          {/* <Theme /> */}
        </Suspense>
      </div>
    </>
  );
}

export default App;
