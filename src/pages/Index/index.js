import { useSelector, useDispatch } from "react-redux";
import {
   increment,
   decrement,
   change,
} from "../../redux/store/slice/counterSlice";

function Index() {
   const currenctCounter = useSelector((state) => {
      //  console.log(">>>sote", state);
      return state.storeCounter.counterState;
   });

   const dispatch = useDispatch();

   return (
      <div className="row">
         <div className="col-12">
            Counter: {currenctCounter}
            <button
               className="btn btn-primary"
               onClick={(e) => {
                  console.log("increment", increment());
                  dispatch(increment());
               }}
            >
               Increase
            </button>
            <button
               className="btn btn-primary"
               onClick={(e) => {
                  console.log("decrement", decrement());
                  dispatch(decrement());
               }}
            >
               Decrease
            </button>
            <button
               className="btn btn-primary"
               onClick={(e) => {
                  console.log("change", change(5));
                  dispatch(change(5));
               }}
            >
               Change
            </button>
         </div>
      </div>
   );
}

export default Index;
