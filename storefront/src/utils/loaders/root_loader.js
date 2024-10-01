
const fetchData = async () => {
    try {
        // Use Promise.all to fetch both categories and products in parallel
        const [categoriesResponse, productsResponse, itemsResponse] = await Promise.all([
            fetch("https://wifostore.onrender.com/categories"),
            fetch("https://wifostore.onrender.com/products"),
            fetch("https://wifostore.onrender.com/items"),
        ]);

        // Check if both responses are ok (status in the range 200-299)
        if (!categoriesResponse.ok || !productsResponse.ok || !itemsResponse.ok) {
            throw new Error(`HTTP error! Status: ${categoriesResponse.status}, ${productsResponse.status} ${itemsResponse.status}`);
        }

        // Parse and return the JSON data for both
        const categories = await categoriesResponse.json();
        const products = await productsResponse.json();
        const items = await itemsResponse.json();

        // Return an object containing both categories and products
        return {
            categories,
            products,
            items
        };
    } catch (error) {
        // Log any errors
        console.error("Error fetching categories or products:", error);
        return []
    }
};

export default fetchData;
