import { useAuth } from "./AuthContext";
import Home from "./pages/Home";
import Login from "./pages/Login";

function App() {
  const { user } = useAuth();

  return <>{user ? <Home /> : <Login />}</>;
}

export default App;
