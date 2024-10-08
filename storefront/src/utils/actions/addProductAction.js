
// This function will handle form submission
const addProductAction = async ({ request }) => {
    const formData = await request.formData();
    const newProduct = {
        productName: formData.get('productName'),
        productCategory: formData.get('productCategory'),
        productDetail: formData.get('productDetail'),
        skuNumber: formData.get('skuNumber'),
        productImageUrl: formData.get('productImageUrl'),
    };

    const response = await fetch('https://wifostore.onrender.com/add-product', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newProduct),
    });

    if (response.ok) {
        const addedProduct = await response.json();
        console.log(addedProduct)
        document.getElementById("add-product-form").reset();
        return addedProduct;
    } else {
        const error = await response.json();
        return error;
    }
}

export default addProductAction



