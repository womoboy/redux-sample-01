import { Provider } from "react-redux";
import store from "./store";
import Counter from "./Counter";
import PostList from "./PostList";

const App = () => {
  return (
    <Provider store={store}>
      <div>hello world</div>
      <Counter />
      <PostList />
    </Provider>
  );
};

export default App;
