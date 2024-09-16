



const fetchData = async () => {
    try {
        // Use Promise.all to fetch both categories and products in parallel
        const [categoriesResponse, productsResponse] = await Promise.all([
            fetch("http://localhost:3000/categories"),
            fetch("http://localhost:3000/products")
        ]);

        // Check if both responses are ok (status in the range 200-299)
        if (!categoriesResponse.ok || !productsResponse.ok) {
            throw new Error(`HTTP error! Status: ${categoriesResponse.status}, ${productsResponse.status}`);
        }

        // Parse and return the JSON data for both
        const categories = await categoriesResponse.json();
        const products = await productsResponse.json();

        // Return an object containing both categories and products
        return {
            categories,
            products
        };
    } catch (error) {
        // Log any errors
        console.error("Error fetching categories or products:", error);
    }
};

export default fetchData;

