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
// Receives a 'product' prop which contains product details
const Item = ({ product }) => (
  <div
    // Wrapper div for the product card with styling classes for margin, padding, background, and rounded corners
    className="product m-2 p-4 bg-white rounded-md"
    // Use the product name as a key, replacing spaces with underscores
    key={product.product_name.replace(/\s+/g, "_")}
  >
    {/* Product image section */}
    <div className="product-image">
      {/* Display product image */}
      <img className="block m-auto" src={product.product_image_url} alt="" />
    </div>

    {/* Display product name */}
    <h1>{product.product_name}</h1>

    {/* Display product details */}
    <p>{product.product_detail}</p>

    {/* Button to show the price list */}
    <button
      // Attach onClick event to the button, which will toggle the price list visibility
      onClick={(e) => showPricelist(e.target)}
      className="p-3 bg-slate-600 text-slate-200 block rounded-sm mt-2"
      type="button"
    >
      Price List
    </button>

    {/* Price list section, initially hidden */}
    <div className="price-list hidden">
      {/* Render PriceList component if product details are available */}
      {product.details && <PriceList list={product.details} />}
    </div>
  </div>
);

// Exporting the Item component for use in other parts of the application
export default Item;
