import { Spinner } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Loading.css"


function Loading() {
  return (
    <div className="divFather">
      <div className="divSon">
        <Spinner color="secondary" />
      </div>
    </div>
  );
}

export default Loading;
