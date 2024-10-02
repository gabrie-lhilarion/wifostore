// This function will load data (product list) for the component
const productsLoader = async () => {
    const response = await fetch('http://localhost:3000/products');
    const products = await response.json();
    return products; // Return the product list as loader data
}

export default productsLoader