import Login from "./components/Login";
import Signup from "./components/Signup";
import { useAuth } from "./hooks/useAuth";

export default function App() {
  const user = useAuth();

  if (!user) {
    return (
      <div>
        <h1>ShiftHub</h1>
        <Login />
        <Signup />
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome, {user.email}</h1>
      <p>You are logged in.</p>
    </div>
  );
}
