import {useSelector,useDispatch} from 'react-redux'
import {buyCake} from '../redux/cake/cakeActions'
const HooksCakeContainer = (props) => {
 const numOfCakes  = useSelector((state) => state.cake.numOfCakes )
 const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of cakes : {numOfCakes}</h1>
      <button onClick={() => dispatch(buyCake()) }>Buy Cake</button>
    </div>
  )
}

export default HooksCakeContainer