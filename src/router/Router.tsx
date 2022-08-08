import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import ReduxTest from "../pages/ReduxTest";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/redux-test" element={<ReduxTest />} />
    </Routes>
  );
}

export default Router;
