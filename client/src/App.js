import React, { useState, useEffect, useMemo } from 'react';

// --- Configuration ---
// The URL of your GraphQL backend server.
// const GQL_ENDPOINT = 'http://localhost:4001/graphql';
// const GQL_ENDPOINT = 'http://192.168.25.33:4002/graphql';
const GQL_ENDPOINT = 'http:/saltlicktruck-api.up.railway.app';

// --- Mock Data ---
// In a real app, this data would be fetched from the backend.
// We include it here to fully represent the menu from the PDF.
const fullMenuData = [
  // Salt Lick Plates
  { id: 'p1', name: "BRISKET", price: 17.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
  { id: 'p2', name: "PORK RIBS", price: 14.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
  { id: 'p3', name: "BISON RIBS (2 Ribs)", price: 24.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
  { id: 'p4', name: "BEEF RIBS (2 Ribs)", price: 24.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
  { id: 'p5', name: "TURKEY", price: 14.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
  { id: 'p6', name: "SAUSAGE", price: 11.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
  { id: 'p7', name: "CHICKEN", price: 13.95, category: "Salt Lick Plates", description: "Whole chicken. Served w/beans, potato salad & coleslaw." },
  { id: 'p8', name: "PULLED PORK", price: 14.95, category: "Salt Lick Plates", description: "Served w/beans, potato salad & coleslaw." },
  { id: 'p9', name: "THURMAN'S CHOICE", price: 18.95, category: "Salt Lick Plates", description: "Brisket, Pork Ribs & Sausage. No Substitutions." },
  // Combo Plates (Categorized under Salt Lick Plates for grouping)
  { id: 'c1', name: "BRISKET & PORK RIBS", price: 16.95, category: "Salt Lick Plates" },
  { id: 'c2', name: "BRISKET & SAUSAGE", price: 16.95, category: "Salt Lick Plates" },
  { id: 'c3', name: "BRISKET & TURKEY", price: 16.95, category: "Salt Lick Plates" },
  { id: 'c4', name: "PULLED PORK & BRISKET", price: 16.95, category: "Salt Lick Plates" },
  // Meat by the LB
  { id: 'm1', name: "½ LB BRISKET", price: 10.95, category: "Meat by the LB." },
  { id: 'm2', name: "½ LB PORK RIBS", price: 9.00, category: "Meat by the LB." },
  { id: 'm3', name: "½ LB SAUSAGE", price: 5.95, category: "Meat by the LB." },
  { id: 'm4', name: "½ LB TURKEY", price: 8.95, category: "Meat by the LB." },
  { id: 'm5', name: "½ CHICKEN", price: 8.95, category: "Meat by the LB." },
  { id: 'm6', name: "½ LB PULLED PORK", price: 8.45, category: "Meat by the LB." },
  // Sandwiches
  { id: 's1', name: "SLICED OR CHOPPED BEEF", price: 12.95, category: "Sandwiches" },
  { id: 's2', name: "PULLED PORK", price: 10.95, category: "Sandwiches", description: "Topped with coleslaw & spicy bbq sauce." },
  { id: 's3', name: "SAUSAGE", price: 9.95, category: "Sandwiches" },
  { id: 's4', name: "TURKEY", price: 12.95, category: "Sandwiches", description: "Romaine lettuce, tomato, red onions & special sauce." },
  { id: 's5', name: "MARINO'S TRIPLE CHOP", price: 12.95, category: "Sandwiches", description: "Chopped Brisket, Sausage & Ribs." },
  // Small Plates
  { id: 'sp1', name: "BRISKET", price: 10.95, category: "Small Plates", description: "For under 10 & over 65." },
  { id: 'sp2', name: "PORK RIBS", price: 9.95, category: "Small Plates", description: "For under 10 & over 65." },
  { id: 'sp3', name: "SAUSAGE", price: 8.95, category: "Small Plates", description: "For under 10 & over 65." },
  // Sides
  { id: 'sd1', name: "SINGLE SERVING", price: 3.50, category: "Sides", description: "Beans, Potato Salad or Coleslaw." },
  { id: 'sd2', name: "1 PINT", price: 4.50, category: "Sides", description: "Beans, Potato Salad or Coleslaw." },
  { id: 'sd3', name: "1 QUART", price: 9.00, category: "Sides", description: "Beans, Potato Salad or Coleslaw." },
  // BBQ Sauce
  { id: 'bbq1', name: "½ PINT BBQ SAUCE", price: 1.75, category: "Sides", description: "Regular or Spicy" },
  { id: 'bbq2', name: "1 PINT BBQ SAUCE", price: 3.50, category: "Sides", description: "Regular or Spicy" },
  // Desserts
  { id: 'd1', name: "HOMEMADE PECAN PIE", price: 5.95, category: "Desserts" },
  { id: 'd2', name: "CHOCOLATE PECAN PIE", price: 5.95, category: "Desserts" },
  { id: 'd3', name: "BLACKBERRY COBBLER", price: 5.95, category: "Desserts" },
  { id: 'd4', name: "PEACH COBBLER", price: 5.95, category: "Desserts" },
  // Beverages
  { id: 'b1', name: "SWEET/UNSWEET TEA", price: 2.50, category: "Beverages" },
  { id: 'b2', name: "SODA", price: 2.50, category: "Beverages", description: "Coke, Diet Coke, Sprite, Dr. Pepper" },
  { id: 'b3', name: "BOTTLED WATER", price: 2.50, category: "Beverages" },
];


// --- Helper Functions & Hooks ---

// A simple hook for making GraphQL API calls.
const useGraphQL = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const query = async (queryString, variables = {}) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(GQL_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: queryString, variables }),
      });
      const json = await res.json();
      if (json.errors) {
        throw new Error(json.errors.map(e => e.message).join('\n'));
      }
      setLoading(false);
      return json.data;
    } catch (err) {
      setError(err);
      setLoading(false);
      console.error("GraphQL Error:", err);
      return null;
    }
  };

  return { query, loading, error };
};


// --- GraphQL Queries and Mutations (as strings) ---
const GET_MENU_QUERY = `
  query GetMenu {
    menu {
      id
      name
      price
      category
      description
    }
  }
`;

const PLACE_ORDER_MUTATION = `
  mutation PlaceOrder($customerName: String!, $items: [OrderItemInput!]!) {
    placeOrder(customerName: $customerName, items: $items) {
      id
      customerName
      total
      status
      items {
        name
        quantity
        price
      }
    }
  }
`;


// --- UI Components ---

const Header = () => (
    <header className="text-center mb-8">
        <h1 className="text-6xl font-extrabold text-amber-900 tracking-wider" style={{fontFamily:"'Georgia', serif", textShadow: '2px 2px 4px rgba(0,0,0,0.2)'}}>THE SALT LICK</h1>
        <p className="text-xl font-semibold text-stone-600">FOOD TRUCK ORDERING</p>
    </header>
);

// const FamilyStyleSection = () => (
//     <div className="border-4 border-amber-800 p-6 mb-10 text-center bg-white/20 rounded-lg">
//         <h2 className="text-5xl font-bold text-amber-800" style={{ fontFamily: "'Georgia', serif" }}>ALL YOU CAN EAT</h2>
//         <h3 className="text-4xl font-bold text-amber-800" style={{ fontFamily: "'Georgia', serif" }}>FAMILY STYLE</h3>
//         <div className="border-t-2 border-amber-800 w-48 mx-auto my-4"></div>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-2 text-stone-800 font-bold text-lg my-4">
//             <div>BEEF BRISKET</div>
//             <div>PORK RIBS</div>
//             <div>SAUSAGE</div>
//             <div>POTATO SALAD</div>
//             <div>COLESLAW</div>
//             <div>BEANS</div>
//         </div>
//         <div className="text-2xl font-bold text-stone-900 mb-2">PER PERSON <span className="ml-2">$24.95</span></div>
//     </div>
// );

const MenuSection = ({ title, subtitle, items, onAddItem }) => (
    <div className="mb-8 break-inside-avoid">
        <h2 className="text-3xl font-bold text-center text-amber-800" style={{ fontFamily: "'Georgia', serif" }}>{title}</h2>
        {subtitle && <p className="text-center text-sm text-stone-600 font-semibold mt-1">{subtitle}</p>}
        <div className="border-t-2 border-amber-800 w-24 mx-auto my-2"></div>
        <div className="mt-4 space-y-3">
            {items.map(item => (
                <div key={item.id} className="p-1 rounded-md hover:bg-amber-100/50">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-stone-800 font-bold text-left" style={{ fontFamily: "'Georgia', serif" }}>{item.name}</h3>
                        <p className="text-stone-800 font-bold" style={{ fontFamily: "'Georgia', serif" }}>${item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex justify-between items-center">
                        {item.description && <p className="text-sm text-stone-600 italic -mt-1 max-w-[70%]">{item.description}</p>}
                        <div className="flex-grow"></div>
                         <button 
                            onClick={() => onAddItem(item)}
                            className="bg-amber-800 text-white font-bold py-1 px-3 rounded-md hover:bg-amber-900 transition-colors shadow-sm"
                         >
                           + Add
                         </button>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const Cart = ({ cartItems, onUpdateQuantity, onCheckout }) => {
    const total = useMemo(() => 
        cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]);

    return (
        <div className="sticky top-8">
            <h2 className="text-3xl font-bold text-center text-amber-800" style={{ fontFamily: "'Georgia', serif" }}>Your Order</h2>
            <div className="border-t-2 border-amber-800 w-24 mx-auto my-2"></div>
            <div className="bg-white/50 p-4 rounded-lg shadow-md mt-4 min-h-[300px]">
                {cartItems.length === 0 ? (
                    <p className="text-center text-stone-500 pt-12">Click 'Add' to start your order.</p>
                ) : (
                    <>
                        <div className="space-y-3 max-h-96 overflow-y-auto pr-2">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex justify-between items-center text-sm">
                                    <div>
                                        <p className="font-bold text-stone-800">{item.name}</p>
                                        <p className="text-stone-600">${item.price.toFixed(2)}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="w-6 h-6 rounded-full bg-stone-200 font-bold">-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="w-6 h-6 rounded-full bg-stone-200 font-bold">+</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-stone-300 mt-4 pt-4">
                            <div className="flex justify-between font-bold text-lg">
                                <span>Total:</span>
                                <span>${total.toFixed(2)}</span>
                            </div>
                            <button 
                                onClick={onCheckout}
                                className="w-full bg-green-700 text-white font-bold py-2 px-4 rounded-md hover:bg-green-800 transition-colors mt-4"
                            >
                                Checkout
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

const CheckoutModal = ({ onPlaceOrder, onCancel, loading }) => {
    const [name, setName] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(name.trim()) {
            onPlaceOrder(name);
        }
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-[#FDF5E6] p-8 rounded-lg shadow-2xl w-full max-w-md">
                <h2 className="text-3xl font-bold text-center text-amber-800 mb-4" style={{ fontFamily: "'Georgia', serif" }}>Confirm Order</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="customerName" className="block text-stone-700 font-bold mb-2">Your Name:</label>
                    <input
                        id="customerName"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-2 border-2 border-amber-800 rounded-md"
                        placeholder="Enter your name to place the order"
                        required
                    />
                    <div className="flex justify-end gap-4 mt-6">
                        <button type="button" onClick={onCancel} className="bg-stone-500 text-white font-bold py-2 px-6 rounded-md hover:bg-stone-600">Cancel</button>
                        <button type="submit" disabled={loading} className="bg-amber-800 text-white font-bold py-2 px-6 rounded-md hover:bg-amber-900 disabled:bg-stone-400">
                           {loading ? 'Placing Order...' : 'Place Order'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

const ConfirmationScreen = ({ order, onNewOrder }) => (
    <div className="fixed inset-0 bg-[#FDF5E6] flex items-center justify-center p-4 z-50 text-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl border-4 border-amber-800">
            <h2 className="text-4xl font-bold text-green-700 mb-2" style={{ fontFamily: "'Georgia', serif" }}>Order Placed!</h2>
            <p className="text-stone-600">Thank you, <span className="font-bold">{order.customerName}</span>!</p>
            <p className="text-stone-800 font-bold text-2xl my-4">Your order number is: <span className="text-amber-800">{order.id}</span></p>
            <p className="text-stone-600">We'll call your name when it's ready.</p>
            <div className="border-t my-4"></div>
            <h3 className="font-bold text-lg">Order Summary</h3>
            <div className="text-left my-2 max-w-sm mx-auto">
                 {order.items.map((item, i) => (
                    <div key={i} className="flex justify-between">
                        <span>{item.quantity} x {item.name}</span>
                        <span>${(item.quantity * item.price).toFixed(2)}</span>
                    </div>
                 ))}
            </div>
             <p className="font-bold text-xl mt-4">Total: ${order.total.toFixed(2)}</p>
            <button onClick={onNewOrder} className="mt-8 bg-amber-800 text-white font-bold py-2 px-8 rounded-md hover:bg-amber-900">
                Place Another Order
            </button>
        </div>
    </div>
);

const InfoBox = ({ children, className }) => (
    <div className={`border-2 border-amber-800 p-3 text-center text-amber-800 font-bold h-full flex items-center justify-center ${className}`} style={{ fontFamily: "'Georgia', serif" }}>
        <p>{children}</p>
    </div>
);


// --- Main App Component ---

export default function App() {
  const { query, loading: apiLoading, error } = useGraphQL();
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('menu'); // 'menu', 'checkout', 'confirmation'
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      const data = await query(GET_MENU_QUERY);
      if (data && data.menu && data.menu.length > 0) {
        setMenu(data.menu);
      } else {
        console.log("Backend menu not found or empty, using local mock data.");
        setMenu(fullMenuData);
      }
    };
    fetchMenu();
  }, []);

  const handleAddItem = (itemToAdd) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === itemToAdd.id);
      if (existingItem) {
        return currentCart.map(item =>
          item.id === itemToAdd.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...currentCart, { ...itemToAdd, quantity: 1 }];
    });
  };

  const handleUpdateQuantity = (itemId, newQuantity) => {
    if (newQuantity <= 0) {
      setCart(currentCart => currentCart.filter(item => item.id !== itemId));
    } else {
      setCart(currentCart =>
        currentCart.map(item =>
          item.id === itemId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };
  
  const handlePlaceOrder = async (customerName) => {
      const orderItems = cart.map(item => ({
          menuItemId: item.id,
          quantity: item.quantity,
      }));

      const data = await query(PLACE_ORDER_MUTATION, { customerName, items: orderItems });

      if (data && data.placeOrder) {
        setConfirmedOrder(data.placeOrder);
        setView('confirmation');
        setCart([]);
      } else {
        alert("There was a problem placing your order. Please try again.");
      }
  };

  const menuByCategory = useMemo(() => 
    menu.reduce((acc, item) => {
      const category = item.category || 'Other';
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {}), 
  [menu]);

  if (apiLoading && menu.length === 0) {
      return <div className="text-center p-20 font-bold text-2xl text-amber-800">Loading Menu...</div>
  }
  
  if (error && menu.length === 0) {
      return <div className="text-center p-20 bg-red-100 text-red-800 border border-red-800 rounded-md">
          <h2 className="font-bold text-xl">Failed to load menu</h2>
          <p>Could not connect to the server. Please ensure the backend is running.</p>
          <pre className="mt-4 text-sm text-left bg-white p-2 rounded">{error.message}</pre>
      </div>
  }
  
  return (
    <div className="bg-[#FDF5E6] min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-screen-xl mx-auto">
        <Header />

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-x-12">
            <div className="lg:col-span-2">
                {/* <FamilyStyleSection /> */}
                <div className="md:columns-2 md:gap-12">
                    <MenuSection 
                        title="SALT LICK PLATES" 
                        items={menuByCategory["Salt Lick Plates"] || []}
                        onAddItem={handleAddItem}
                    />
                     <MenuSection 
                        title="SANDWICHES" 
                        subtitle="MADE AS BIG AS TEXAS"
                        items={menuByCategory["Sandwiches"] || []}
                        onAddItem={handleAddItem}
                    />
                     <MenuSection 
                        title="SMALL PLATES" 
                        subtitle="FOR THOSE UNDER 10 & OVER 65"
                        items={menuByCategory["Small Plates"] || []}
                        onAddItem={handleAddItem}
                    />
                     <MenuSection 
                        title="MEAT BY THE LB." 
                        items={menuByCategory["Meat by the LB."] || []}
                        onAddItem={handleAddItem}
                    />
                    <MenuSection 
                        title="SIDES" 
                        subtitle="BEANS, POTATO SALAD & COLESLAW"
                        items={menuByCategory["Sides"] || []}
                        onAddItem={handleAddItem}
                    />
                     <MenuSection 
                        title="DESSERTS" 
                        items={menuByCategory["Desserts"] || []}
                        onAddItem={handleAddItem}
                    />
                     <MenuSection 
                        title="BEVERAGES" 
                        items={menuByCategory["Beverages"] || []}
                        onAddItem={handleAddItem}
                    />
                </div>
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 text-sm">
                    <InfoBox>ORIGINAL BBQ SAUCE, SPICY BBQ SAUCE, HONEY PECAN BBQ SAUCE</InfoBox>
                    <InfoBox>BREAD, PICKLES & ONIONS AVAILABLE UPON REQUEST</InfoBox>
                    <InfoBox>BEER AND WINE NEXT DOOR AT SALT LICK CELLARS</InfoBox>
                    <InfoBox>GLUTEN FREE EXCEPT FOR BREAD & DESSERTS</InfoBox>
                </div>
            </div>

            <div className="lg:col-span-1">
                 <Cart 
                    cartItems={cart} 
                    onUpdateQuantity={handleUpdateQuantity}
                    onCheckout={() => setView('checkout')}
                />
            </div>
        </main>
      </div>
      
      {view === 'checkout' && (
          <CheckoutModal 
              onCancel={() => setView('menu')}
              onPlaceOrder={handlePlaceOrder}
              loading={apiLoading}
           />
      )}

      {view === 'confirmation' && confirmedOrder && (
          <ConfirmationScreen 
            order={confirmedOrder}
            onNewOrder={() => {
                setConfirmedOrder(null);
                setView('menu');
            }}
          />
      )}
    </div>
  );
}

