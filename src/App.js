import { Provider } from "react-redux";
import Body from "./components/layout/Body";
import store from "./utils/store/store";


const App = () => {
  return (
    <Provider store={store}><Body /></Provider>
  );
}

export default App;
