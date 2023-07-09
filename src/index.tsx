import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { store } from "./app/store/store";
import "./index.css";

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  );
}
