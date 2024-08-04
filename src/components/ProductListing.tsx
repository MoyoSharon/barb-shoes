import Product from "./Product";

const productData = [
  { name: "Product 1", price: 29.99, image: "src/assets/shoe2.jpeg" },
  { name: "Product 2", price: 49.99, image: "src/assets/shoe3.jpeg" },
  { name: "Product 3", price: 39.99, image: "src/assets/leathershoe.jpeg" },
  { name: "Product 4", price: 19.99, image: "src/assets/shoe2.jpeg" },
  { name: "Product 5", price: 59.99, image: "src/assets/shoe3.jpeg" },
  { name: "Product 6", price: 99.99, image: "src/assets/leathershoe.jpeg" },
];

function ProductListing() {
  const handleAddToCart = (productName: string) => {
    console.log(`${productName} added to cart.`);
    // Implement the actual cart functionality here, like updating the state
  };

  return (
    <>
      <div className="row">
        {productData.map((product, index) => (
          <Product
            key={index}
            name={product.name}
            price={product.price}
            image={product.image}
            onAddToCart={() => handleAddToCart(product.name)}
          />
        ))}
      </div>
    </>
  );
}

export default ProductListing;
