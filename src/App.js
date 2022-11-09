import { store } from "./redux/store";
import { Provider } from "react-redux";
import Index from "./pages/Index";

function App() {
   return (
      <Provider store={store}>
         <div className="row">
            <div className="col-12">
               <Index />
            </div>
         </div>
      </Provider>
   );
}

export default App;
