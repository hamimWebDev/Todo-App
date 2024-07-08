import { Provider } from "react-redux";
import { store } from "./redux/store";
import Todo from "./pages/Todo";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Todo></Todo>
      </Provider>
    </div>
  );
}

export default App;
