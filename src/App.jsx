import "./App.css";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import { UserContext } from "./utils/UserContext";
import { useLoaderData } from "react-router";

function App() {
  const data = useLoaderData();

  return (
    <>
      <UserContext.Provider value={data}>
        <Navbar />
        <div className="outlet">
          <Outlet />
        </div>
      </UserContext.Provider>
    </>
  );
}

export default App;
