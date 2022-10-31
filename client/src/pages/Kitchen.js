

import ListOfOrders from '../components/ListOfOrders';
import NavFooter from '../components/NavFooter';



function Kitchen() {



  return (



    <div>
      <h1 className="kitchenPageTitle text-center mt-3">Kitchen Page</h1>
      <hr></hr>
      <h2 className="text-center mt-4 tableText">Orders Table</h2>
      <div>
        <ListOfOrders />
      </div>

      <footer className="mt-5">
        {/* <MainFooter /> */}
        <NavFooter />
      </footer>

    </div>
  )


}

export default Kitchen;