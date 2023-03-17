import "./App.css";
import Card from "./components/card";

function App() {
  return (
    <div className="App">
      <section className="pricing py-5">
        <div className="container">
          <div className="row">
            <Card price="10" />
            <Card price="20" />
            <Card price="30" />
            <Card price="0" />
            <Card price="100" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
