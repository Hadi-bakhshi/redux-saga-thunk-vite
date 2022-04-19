import {useSelector,useDispatch} from 'react-redux'
import { buyIceCream } from '../redux/iceCream/iceCreamActions';
const IceCreamContainer = (props) => {
 const numOfIceCreams  = useSelector((state) => state.iceCream.numOfIceCreams )
 const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of Ice-cream : {numOfIceCreams}</h1>
      <button onClick={() => dispatch(buyIceCream()) }>Buy Ice-cream</button>
    </div>
  )
}

export default IceCreamContainer