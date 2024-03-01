import "./App.css";
import { RouterProvider } from "react-router-dom";
import { Router } from "./Router";
import { Provider } from "use-pouchdb";

import db from "./utils/db";

function App() {
  return (
    <div className="bg-blue-900 text-white flex">
      <Provider pouchdb={db}>
        <RouterProvider router={Router} />
      </Provider>
    </div>
  );
}

export default App;
