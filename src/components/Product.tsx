import styles from "./Products.module.css";

interface ProductProps {
  name: string;
  image: string;
  price: number;
  onAddToCart: () => void;
}
function Product({ name, image, price, onAddToCart }: ProductProps) {
  return (
    <>
      <div className={`${styles.productCard} card`}>
        <img src={image} alt={name} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-subtitle">{price}</p>
        </div>
        <button type="button" className="btn btn-success" onClick={onAddToCart}>Add To Cart</button>
      </div>
    </>
  );
}

export default Product;
