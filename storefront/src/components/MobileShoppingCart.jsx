import React from "react";

function MobileShoppingCart() {
  return (
    // Main container for the shopping cart, positioned absolutely
    <div className="absolute shopping-cart-wrap shopping-cart hidden rounded-md bg-slate-200 z-3 w-[310px] max-h[350px] right-[10px] top-14 ">
      <div className="relative z-1 p-4">
        {/* Optional: Uncomment the following span to display a cart indicator (can be styled as needed)
        <span className='bg-white w-[20px] h-[20px] block absolute rotate-45 right-16 z-0 top-[-3px]'>
          .
        </span>
        */}
        <p className="font-bold text-xl divide-y mb-4">My Shopping Cart</p>{" "}
        {/* Cart title */}
        <ul className="divide-y divide-blue-200">
          {/* List of items in the shopping cart */}
          <li className="flex p-2">
            {/* Product image container */}
            <p className="w-[80px] h-[80px] bg-white">
              <img
                src="https://i.postimg.cc/q78w6CdH/banana.jpg"
                alt="product-image"
              />
            </p>

            <div className="uppercase font-bold p-2 relative">
              {/* Close button for removing item */}
              <span className="text-2xl absolute right-0 top-10">&times;</span>
              <p>Very Ripe Banana</p> {/* Product name */}
              <p>3 KG</p> {/* Product weight */}
              <p>&#8358;45.00</p> {/* Product price */}
            </div>
          </li>
          <li className="flex p-2">
            {/* Product image container */}
            <p className="w-[80px] h-[80px] bg-white">
              <img
                src="https://i.postimg.cc/q78w6CdH/banana.jpg"
                alt="product-image"
              />
            </p>

            <div className="uppercase font-bold p-2 relative text-sm">
              {/* Close button for removing item */}
              <span className="text-2xl absolute right-0 top-10">&times;</span>
              <p>Very Ripe Banana</p> {/* Product name */}
              <p>3 KG</p> {/* Product weight */}
              <p>&#8358;45.00</p> {/* Product price */}
            </div>
          </li>
        </ul>
        <p></p>{" "}
        {/* Placeholder for additional content, such as a total price or checkout button */}
      </div>
    </div>
  );
}

export default MobileShoppingCart;
