// Importing the PriceList component from the current directory
import { PriceList } from ".";

// Function to toggle the visibility of the price list
const showPricelist = (target) => {
  // Find the closest '.price-list' element within the target's parent element
  const priceList = target.parentElement.querySelector(".price-list");

  // Toggle the 'hidden' class on the price list to show or hide it
  priceList.classList.toggle("hidden");

  // Add the 'hidden' class to the button itself after it is clicked to hide it
  target.classList.add("hidden");
};

// Item component to display product information
const Item = ({ product }) => (
  <div
    // Wrapper for each product, with margin, padding, and other styles
    className="product m-2 p-4 bg-white rounded-md"
    // Using the product name as a key, replacing spaces with underscores to ensure uniqueness
    key={product.product_name.replace(/\s+/g, "_")}
  >
    <div className="product-image">
      {/* Product image display */}
      <img className="block m-auto" src={product.product_image_url} alt="" />
    </div>

    {/* Product name */}
    <h1>{product.product_name}</h1>

    {/* Product details or description */}
    <p>{product.product_detail}</p>

    {/* Button to display the price list on click */}
    <button
      // Event handler to show the price list when the button is clicked
      onClick={(e) => showPricelist(e.target)}
      className="p-3 bg-slate-600 text-slate-200 block rounded-sm mt-2"
      type="button"
    >
      Price List
    </button>

    {/* Price list section, initially hidden */}
    <div className="price-list hidden">
      {/* If the product has details, render the PriceList component */}
      {product.details && <PriceList list={product.details} />}
    </div>
  </div>
);

// Exporting the Item component for use in other parts of the application
export default Item;
