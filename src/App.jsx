import TypePicker from "./components/TypePicker";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "./App.css";
import "./output.css";

function App() {
  return (
    <div className="flex flex-col items-start">
      <TypePicker />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
