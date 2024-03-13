import Router from "./components/Router";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./contexts/AuthContext";
import SocketProvider from "./contexts/SocketContext";
function App() {
  return (
    <div className=" bg-slate-400 h-screen">
      <AuthProvider>
        <SocketProvider>
          <Router />
          <Toaster />
        </SocketProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
