import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Loading from "./components/Loading";

function App() {
  const [loading, setLoading] = useState(false);

  const changeState = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <br />
        <br />
        <button className="btn btn-primary" onClick={() => changeState()}>
          Cargar página
        </button>
      </div>
    );
  }
}

export default App;
