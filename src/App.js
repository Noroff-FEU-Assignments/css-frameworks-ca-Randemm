import "./App.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";
import BoxList from "./components/boxlist";

function App() {
  return (
    <div className="App">
      <Header />
      <BoxList />
      <Footer />
    </div>
  );
}

export default App;
