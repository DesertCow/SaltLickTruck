
import { Button } from 'react-bootstrap';
import { SubMenu_Q } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import LoadingSplash from '../LoadingSplash';


const SubMenu = ({ menuItemNumber }) => {

  var { loading, data } = useQuery(SubMenu_Q, {
    variables: { menuId: menuNumber },
  });


  if (loading) {

    return (
      <LoadingSplash />
    )

  }


  return (

    <div>
      <h1>Menu Item Screen!</h1>
      <h1>{menuItemNumber}</h1>
    </div>


  )

};

export default SubMenu;


//!========================= EOF =========================