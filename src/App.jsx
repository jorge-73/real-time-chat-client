import Router from "./components/Router";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/AuthContext";
function App() {
  return (
    <div className=" bg-slate-400 h-screen">
      <AuthProvider>
        <Router />
        <Toaster />
      </AuthProvider>
    </div>
  );
}

export default App;
