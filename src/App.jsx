import "./App.css";
import { Suspense } from "react";
import Users from "./examples/Users";
import Theme from './examples/Theme';
import Action from './examples/Action';
import Optimistic from "./examples/Optimistic";
import FormStatus from "./examples/FormStatus";
import FormState from "./examples/FormState";

function App() {
  return (
    <>
      <div>
        <Suspense
          fallback={
            <h1 className="text-2xl text-center font-bold mt-5">Loading...</h1>
          }
        >
          {/* <Action /> */}
          <FormState />
         {/* <FormStatus /> */}
           {/* <Optimistic /> */}
          {/* <Users /> */}
          {/* <Theme /> */}
        </Suspense>
      </div>
    </>
  );
}

export default App;
