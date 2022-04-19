import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

const CakeWithPayload = (props) => {
  const [numbers, setNumbers] = useState(0);

  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of cakes : {numOfCakes}</h1>
      <input type="number" onChange={(e) => setNumbers(e.target.value)} />
      <button onClick={() => dispatch(buyCake(numbers))}>
        Buy {numbers} Cake
      </button>
    </div>
  );
};

export default CakeWithPayload;
