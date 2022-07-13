import { createStore } from "redux";
import counterReducer from "./Components/Services/reducers/CounterReducer";

const store = createStore(counterReducer);

export default store