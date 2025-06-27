import React from 'react';

// --- Data for the Menu ---
const saltLickPlates = [
  { name: "BRISKET", price: "17.95" },
  { name: "PORK RIBS", price: "14.95" },
  { name: "BISON RIBS (2 Ribs)", price: "24.95" },
  { name: "BEEF RIBS (2 Ribs)", price: "24.95" },
  { name: "TURKEY", price: "14.95" },
  { name: "SAUSAGE", price: "11.95" },
  { name: "CHICKEN", description: "whole chicken.", price: "13.95" },
  { name: "PULLED PORK", price: "14.95" },
  { name: "VEGETABLE", description: "Potato Salad, coleslaw & beans.", price: "9.95" },
  { name: "THURMAN'S CHOICE", description: "Brisket, Pork Ribs and Sausage (The plate that Poppa ate!) No Substitutions.", price: "18.95" },
];

const comboPlates = [
    { name: "BRISKET & PORK RIBS", price: "16.95" },
    { name: "BRISKET & SAUSAGE", price: "16.95" },
    { name: "BRISKET & TURKEY", price: "16.95" },
    { name: "PULLED PORK & BRISKET", price: "16.95" },
    { name: "PULLED PORK COMBO", description: "Pulled pork with choice of sausage, pork ribs, or turkey.", price: "16.95" },
    { name: "PORK RIBS COMBO", description: "Pork ribs with choice of sausage or turkey.", price: "16.95" },
    { name: "SAUSAGE & TURKEY", price: "15.95" },
    { name: "BRISKET & BISON RIB", price: "24.95" },
    { name: "BISON & BEEF RIBS", price: "24.95" },
    { name: "BRISKET & BEEF RIB", price: "24.95" },
];

const meatByTheLb = [
    { name: "½ LB BRISKET", price: "10.95" },
    { name: "½ LB PORK RIBS", price: "9.00" },
    { name: "½ LB SAUSAGE", price: "5.95" },
    { name: "½ LB TURKEY", price: "8.95" },
    { name: "½ CHICKEN", price: "8.95" },
    { name: "LB PULLED PORK", price: "8.45" },
    { name: "BISON RIBS (2 Ribs)", price: "17.95" },
    { name: "BEEF RIBS (2 Ribs)", price: "17.95" },
];

const sandwiches = [
    { name: "SLICED OR CHOPPED BEEF", price: "12.95" },
    { name: "PULLED PORK", description: "Topped with coleslaw & spicy bbq sauce.", price: "10.95" },
    { name: "SAUSAGE", price: "9.95" },
    { name: "TURKEY", description: "Romaine lettuce, sliced tomato, red onions & special sauce.", price: "12.95" },
    { name: "MARINO'S TRIPLE CHOP", description: "Chopped Brisket, Sausage & Ribs with pickles & onions", price: "12.95" },
    { name: "MAKE IT A PLATE", description: "w/beans, potato salad, coleslaw, pickles & onions.", price: "+2.00" },
];

const smallPlates = [
    { name: "BRISKET", price: "10.95" },
    { name: "PORK RIBS", price: "9.95" },
    { name: "SAUSAGE", price: "8.95" },
    { name: "PULLED PORK", price: "9.95" },
    { name: "TURKEY", price: "9.95" },
    { name: "COMBO", description: "Pick any two meats: Brisket, Pork Ribs, Sausage, Pulled Pork, or Turkey. No Substitutions.", price: "10.95" },
];

const sides = [
    { name: "SINGLE SERVING", price: "3.50" },
    { name: "1 PINT", price: "4.50" },
    { name: "1 QUART", price: "9.00" },
    { name: "1 GALLON", price: "36.00" },
];

const bbqSauce = [
    { name: "½ PINT", price: "1.75" },
    { name: "1 PINT", price: "3.50" },
    { name: "1 QUART", price: "6.90" },
    { name: "1 GALLON", price: "25.95" },
]

const desserts = [
    { name: "HOMEMADE PECAN PIE", price: "5.95" },
    { name: "CHOCOLATE PECAN PIE", price: "5.95" },
    { name: "COBBLER", description: "Blackberry or Peach.", price: "5.95" },
    { name: "HALF & HALF COBBLER", description: "Blackberry and Peach", price: "5.95" },
];

const texasDesserts = [
    { name: "½ TRAY OF COBBLER", description: "Peach or Blackberry", price: "22.95" },
    { name: "TRAY OF COBBLER", description: "Peach or Blackberry", price: "44.95" },
    { name: "PECAN PIE", price: "29.95" },
    { name: "CHOCOLATE PECAN PIE", price: "29.95" },
];

const beverages = [
    { name: "UNSWEET OR SWEET TEA", description: "Made w/all-natural pure cane sugar. (free refills)", price: "2.50" },
    { name: "SODA (free refills)", description: "Coke, Diet Coke, Sprite, Barq's Root Beer, Dr. Pepper, Diet Dr. Pepper", price: "2.50" },
    { name: "BIG RED SODA", description: "(bottled)", price: "2.50" },
    { name: "BOTTLED WATER", price: "2.50" },
    { name: "TOPO CHICO", price: "2.50" },
    { name: "COFFEE (free refills)", price: "2.25" },
];

// --- Components ---

const MenuSection = ({ title, subtitle, children }) => (
    <div className="mb-8">
        <h2 className="text-3xl font-bold text-center text-amber-800" style={{ fontFamily: "'Georgia', serif" }}>{title}</h2>
        {subtitle && <p className="text-center text-sm text-stone-600 font-semibold mt-1">{subtitle}</p>}
        <div className="border-t-2 border-amber-800 w-24 mx-auto my-2"></div>
        <div className="mt-4 space-y-3">
            {children}
        </div>
    </div>
);

const MenuItem = ({ name, description, price }) => (
    <div>
        <div className="flex justify-between items-baseline">
            <h3 className="text-stone-800 font-bold" style={{ fontFamily: "'Georgia', serif" }}>{name}</h3>
            <p className="text-stone-800 font-bold" style={{ fontFamily: "'Georgia', serif" }}>{price}</p>
        </div>
        {description && <p className="text-sm text-stone-600 italic -mt-1">{description}</p>}
    </div>
);

const InfoBox = ({ children, className }) => (
    <div className={`border-2 border-amber-800 p-3 text-center text-amber-800 font-bold ${className}`} style={{ fontFamily: "'Georgia', serif" }}>
        {children}
    </div>
);


// --- Main App Component ---

export default function MenuHardCode() {
  return (
    <div className="bg-[#FDF5E6] min-h-screen p-4 sm:p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <header className="text-center mb-8">
            <h1 className="text-6xl font-extrabold text-amber-900 tracking-wider" style={{fontFamily:"'Georgia', serif", textShadow: '2px 2px 4px rgba(0,0,0,0.2)'}}>THE SALT LICK</h1>
            <p className="text-xl font-semibold text-stone-600">ESTD BBQ 1967</p>
        </header>

        {/* Family Style Section */}
        <div className="border-4 border-amber-800 p-6 mb-10 text-center bg-white/20 rounded-lg">
            <h2 className="text-5xl font-bold text-amber-800" style={{ fontFamily: "'Georgia', serif" }}>ALL YOU CAN EAT</h2>
            <h3 className="text-4xl font-bold text-amber-800" style={{ fontFamily: "'Georgia', serif" }}>FAMILY STYLE</h3>
            <div className="border-t-2 border-amber-800 w-48 mx-auto my-4"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-stone-800 font-bold text-lg my-4">
                <div>BEEF BRISKET</div>
                <div>PORK RIBS</div>
                <div>SAUSAGE</div>
                <div>BEANS</div>
                <div>POTATO SALAD</div>
                <div>COLESLAW</div>
            </div>
             <p className="text-sm text-stone-600 font-semibold mb-4">INCLUDES THE FAVORITES</p>
            <div className="text-2xl font-bold text-stone-900 mb-2">PER PERSON <span className="ml-2">24.95</span></div>
            <div className="text-lg font-bold text-stone-900">KIDS 10 & UNDER <span className="ml-2">9.95</span></div>
            <div className="text-lg font-bold text-stone-900 mb-4">KIDS 3 & UNDER <span className="ml-2">FREE</span></div>
            <p className="text-xs text-stone-600 font-semibold">REFILLS ON REQUEST</p>
            <p className="text-xs text-stone-600 font-semibold">WITH PURCHASE OF ADULT FAMILY STYLE MEAL</p>
            <p className="text-xs text-stone-600 font-semibold">NO SHARING OF FAMILY STYLE</p>
        </div>


        {/* Main Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            
            {/* Left Column */}
            <div>
                <MenuSection title="SALT LICK PLATES" subtitle="SERVED W/BEANS, POTATO SALAD & COLESLAW">
                    {saltLickPlates.map(item => <MenuItem key={item.name} {...item} />)}
                    <div className="pt-4">
                        {comboPlates.map(item => <MenuItem key={item.name} {...item} />)}
                    </div>
                </MenuSection>

                <MenuSection title="SANDWICHES" subtitle="MADE AS BIG AS TEXAS">
                    {sandwiches.map(item => <MenuItem key={item.name} {...item} />)}
                </MenuSection>

                 <MenuSection title="SMALL PLATES" subtitle="FOR THOSE UNDER 10 & OVER 65 SERVED W/BEANS, POTATO SALAD & COLESLAW">
                    {smallPlates.map(item => <MenuItem key={item.name} {...item} />)}
                </MenuSection>
            </div>

            {/* Right Column */}
            <div>
                 <MenuSection title="MEAT BY THE LB.">
                    {meatByTheLb.map(item => <MenuItem key={item.name} {...item} />)}
                </MenuSection>

                <MenuSection title="SIDES" subtitle="BEANS, POTATO SALAD & COLESLAW">
                    {sides.map(item => <MenuItem key={item.name} {...item} />)}
                     <div className="text-center font-bold text-amber-800 pt-4" style={{ fontFamily: "'Georgia', serif" }}>TO-GO BBQ SAUCE</div>
                     <p className="text-center text-sm text-stone-600 font-semibold -mt-2">REGULAR OR SPICY</p>
                    {bbqSauce.map(item => <MenuItem key={item.name} {...item} />)}
                </MenuSection>

                <MenuSection title="DESSERTS">
                    <p className="text-center text-sm text-stone-600 font-semibold -mt-3 mb-3">ADD VANILLA ICE CREAM FOR 1.00</p>
                    {desserts.map(item => <MenuItem key={item.name} {...item} />)}
                </MenuSection>
                
                <MenuSection title="BEVERAGES">
                    {beverages.map(item => <MenuItem key={item.name} {...item} />)}
                </MenuSection>

                <MenuSection title="TEXAS-SIZED DESSERTS" subtitle="GET YOURS TO GO">
                    {texasDesserts.map(item => <MenuItem key={item.name} {...item} />)}
                </MenuSection>

            </div>
        </div>

        {/* Footer Info Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-10 text-sm">
             <InfoBox>
                THE SALT LICK IS A <span className="block text-xl">CASH ONLY</span> ESTABLISHMENT
                <span className="text-xs font-normal block mt-1">No credit cards or checks</span>
                <span className="text-xs font-normal block">ATM on-site</span>
             </InfoBox>
             <InfoBox>BREAD, PICKLES & ONIONS AVAILABLE UPON REQUEST</InfoBox>
             <InfoBox>
                BEER AND WINE NEXT DOOR AT <span className="block text-lg">SALT LICK CELLARS</span> ENJOY IT HERE
             </InfoBox>
             <InfoBox>
                GLUTEN FREE <span className="block font-normal">EXCEPT FOR BREAD & DESSERTS</span>
             </InfoBox>
        </div>
        <p className="text-center text-stone-600 font-semibold mt-6">IF SOMETHING IS NOT TO YOUR LIKING, PLEASE LET US KNOW</p>

      </div>
    </div>
  );
}
