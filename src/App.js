import "./App.css";
import Header from "./components/header.js";
import Footer from "./components/footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container mx-auto my-20 flex-col space-y-8">
        <h1 className="text-4xl text-secondary">Page heading</h1>
        <TailwindCSSContainerBeige />
        <TailwindCSSContainerBeige />
        <TailwindCSSContainerWhite />
        <TailwindCSSContainerBeige />
        <TailwindCSSContainerBeige />
        <TailwindCSSContainerPink />
        <TailwindCSSContainerBeige />
        <TailwindCSSContainerWhite />
      </div>
      <Footer />
    </div>
  );
}

// Import these? Ask my homie sindre //

function TailwindCSSContainerWhite() {
  return (
    <div className="p-44 max-w-sm mx-auto bg-white border-2 border-smashpink rounded-xl shadow-md"></div>
  );
}
function TailwindCSSContainerPink() {
  return (
    <div className="p-44 max-w-sm mx-auto bg-smashpink border-2 border-white rounded-xl shadow-md"></div>
  );
}
function TailwindCSSContainerBeige() {
  return (
    <div className="p-44 max-w-sm mx-auto bg-softbeige rounded-xl shadow-md"></div>
  );
}

export default App;
