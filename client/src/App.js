import React, { useState, useEffect, useMemo } from 'react';

// --- Configuration ---
// The URL of your GraphQL backend server.
const GQL_ENDPOINT = 'http://192.168.25.33:4000/graphql';

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

const MenuSection = ({ title, items, onAddItem }) => (
    <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-amber-800" style={{ fontFamily: "'Georgia', serif" }}>{title}</h2>
        <div className="border-t-2 border-amber-800 w-24 mx-auto my-2"></div>
        <div className="mt-4 space-y-3">
            {items.map(item => (
                <div key={item.id} className="flex justify-between items-center p-2 rounded-md hover:bg-amber-100/50">
                    <div>
                        <h3 className="text-stone-800 font-bold" style={{ fontFamily: "'Georgia', serif" }}>{item.name}</h3>
                        {item.description && <p className="text-sm text-stone-600 italic -mt-1">{item.description}</p>}
                    </div>
                    <div className="flex items-center">
                         <p className="text-stone-800 font-bold mr-4" style={{ fontFamily: "'Georgia', serif" }}>${item.price.toFixed(2)}</p>
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
            <div className="bg-white/50 p-4 rounded-lg shadow-md mt-4 min-h-[200px]">
                {cartItems.length === 0 ? (
                    <p className="text-center text-stone-500 pt-12">Your cart is empty.</p>
                ) : (
                    <>
                        <div className="space-y-3">
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


// --- Main App Component ---

export default function App() {
  const { query, loading: apiLoading, error } = useGraphQL();
  const [menu, setMenu] = useState([]);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState('menu'); // 'menu', 'checkout', 'confirmation'
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  // Fetch menu on initial render
  useEffect(() => {
    const fetchMenu = async () => {
      const data = await query(GET_MENU_QUERY);
      if (data && data.menu) {
        setMenu(data.menu);
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
      // Remove item if quantity is 0 or less
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
        setCart([]); // Clear cart after successful order
      } else {
        // Error is handled by the useGraphQL hook
        alert("There was a problem placing your order. Please try again.");
      }
  };

  // Group menu items by category for rendering
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
      <div className="max-w-7xl mx-auto">
        <Header />

        <main className="grid grid-cols-1 lg:grid-cols-3 gap-x-12">
            <div className="lg:col-span-2">
                {Object.entries(menuByCategory).map(([category, items]) => (
                    <MenuSection 
                        key={category} 
                        title={category.toUpperCase()} 
                        items={items}
                        onAddItem={handleAddItem}
                    />
                ))}
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
