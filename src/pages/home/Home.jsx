import Sidebar from "../../components/sidebar/Sidebar";
import MessageContainer from "../../components/messages/MessageContainer";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      {/* Para dispositivos pequeños, coloca MessageContainer arriba y Sidebar abajo */}
      <div className="sm:w-full sm:order-first md:order-last flex">
        <MessageContainer />
      </div>
      <div className="sm:w-full sm:order-last md:order-first flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default Home;
