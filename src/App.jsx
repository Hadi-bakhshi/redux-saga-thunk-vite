import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import CakeContainer from "./Components/CakeContainer";
import HooksCakeContainer from "./Components/HooksCakeContainer";
import IceCreamContainer from "./Components/IceCreamContainer";
import CakeWithPayload from "./Components/CakeWithPayload";
import UserContainer from "./Components/UserContainer";
import PostSaga from "./Components/PostSaga";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <CakeWithPayload/>
        <UserContainer/>
        <PostSaga/>
      </div>
    </Provider>
  );
}

export default App;
