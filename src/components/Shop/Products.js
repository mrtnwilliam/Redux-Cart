import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  { id:'item1', title: "First Book", price: 6, description: "This is my first book" },
  { id:'item2', title: "Second Book", price: 7, description: "This is my second book" },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map(item => <ProductItem
          productId = {item.id}
          title={item.title}
          price={item.price}
          description={item.description}
          key={item.id}
        />)}
        
      </ul>
    </section>
  );
};

export default Products;
