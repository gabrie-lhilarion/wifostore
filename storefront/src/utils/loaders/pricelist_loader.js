/**
 * Loader function to fetch item data based on the item ID from route params.
 * 
 * @param {Object} request - The request object containing route params.
 * @returns {Promise<Object>} - A promise that resolves with the item's price list, or an error if the fetch fails.
 */
const pricelist_loader = async ({ params }) => {
    const { id } = params; // Destructure the ID from the route parameters

    try {
        // Construct the API endpoint using the provided item ID
        const apiUrl = `https://wifostore.onrender.com/items/${id}`;

        // Fetch the price list for the specific item
        const response = await fetch(apiUrl);

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
            throw new Error(`Failed to fetch data: HTTP status ${response.status}`);
        }

        // Parse the JSON data
        const list = await response.json();

        // Return the fetched list
        return list;
    } catch (error) {
        // Log and throw error for further handling
        console.error("Error fetching item price list:", error);
        throw error;
    }
};

export default pricelist_loader;
