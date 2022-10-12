
import { Button } from 'react-bootstrap';
import { Item_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import LoadingSplash from '../LoadingSplash';


const ItemMenu = ({ menuItemNumber }) => {

  let inStock
  menuItemNumber = window.location.href.split(`item/`, 2)
  menuItemNumber = parseInt(menuItemNumber[1])

  // console.log("==================== menuItemNumber ==================== ");
  // console.log(menuItemNumber)

  var { loading, data } = useQuery(Item_Q, {
    variables: { itemId: menuItemNumber },
  });

  // data = String(JSON.stringify(data))

  if (!loading) {

    // data = data[0]
    // console.log("==================== Item Data ==================== ");
    // console.log(data[1])
    // console.log(data.getItemInfo)

    // var itemName = data.itemName

    if (data.getItemInfo.inStock) {
      inStock = "True"
    }
    else {
      inStock = "False"
    }

  }

  if (loading) {

    return (
      <LoadingSplash />
    )

  }



  return (

    <div>
      {/* <h1>Menu Item Screen!</h1> */}
      {/* <h1>{menuItemNumber}</h1> */}
      {/* <h1>{data}</h1> */}
      <h1 className="text-center mt-5 dishTitle">{data.getItemInfo.itemName}</h1>
      <h1 className="text-left m-5 dishPrice">Price: ${data.getItemInfo.itemPrice}</h1>
      <h1 className="text-left m-5 dishPrice">Available {inStock}</h1>
    </div>


  )

};

export default ItemMenu;


//!========================= EOF =========================