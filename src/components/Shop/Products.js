import { useSelector } from 'react-redux';

import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = () => {
  const shopItems = useSelector(state => state.shop.items);

  return (
    <section className={ classes.products }>
      <h2>Buy your favorite products</h2>
      <ul>
        { shopItems.map((shopItem) => {
          return (
            <ProductItem
              key={ shopItem.id }
              id={ shopItem.id }
              title={ shopItem.title }
              price={ shopItem.price }
              description={ shopItem.description }
            />
          )
        }) }
      </ul>
    </section>
  );
};

export default Products;
