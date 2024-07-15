import "./App.css";
import Users from "./examples/Users";
import { Suspense } from "react";
import Theme from "./examples/Theme";
import Action from "./examples/Action";
import Optimistic from "./examples/Optimistic";
import FormStatus from "./examples/FormStatus";
import FormState from "./examples/FormState";
import ActionState from "./examples/ActionState";

function App() {
  return (
    <>
      <div>
        <Suspense
          fallback={
            <h1 className="text-2xl text-center font-bold mt-5">Loading...</h1>
          }
        >
          {/*<Action />*/}
          {/*<ActionState />*/}
          {/*<FormState />*/}
          {/*<FormStatus />*/}
          {/*<Optimistic />*/}
          {/*<Users />*/}
          <Theme />
        </Suspense>
      </div>
    </>
  );
}

export default App;
