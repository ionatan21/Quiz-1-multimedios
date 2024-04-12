import "./App.css";
import Likes from "./components/likes";
import InputName from "./components/InputName";
import PadreModal from "./components/PadreModal";
import Contador from "./components/Contador";
function App() {
  return (
    <div className="App">
      <section>
        <Likes />
      </section>
      <section>
        <InputName />
      </section>
      <section>
        <PadreModal />
      </section>
      <section>
        <Contador />
      </section>
    </div>
  );
}

export default App;
