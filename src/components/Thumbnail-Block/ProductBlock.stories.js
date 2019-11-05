import React from 'react';
import { storiesOf } from '@storybook/react';
import Product from './ProductBlock';


storiesOf('Product-Block', module)
  .add("Product-Block Column Empty", () => (
    <Product
        direction="column"
        filling={false}
        product="laptop"
        stars={4}

    />
  ))
  .add("Product-Block Column Filled", () => (
    <Product
        direction="column"
        filling={true}
        product="laptop"
        stars={4}
    />
  ))
  .add("Product-Block Row Empty", () => (
    <Product
        direction="row"
        filling={false}
        product="laptop"
        stars={4}
    />
  ))
  .add("Product-Block Row Filled", () => (
    <Product
        direction="row"
        filling={true}
        product="laptop"
        stars={4}
    />
  ))

  .add("Headphones", () => (
    <Product
        direction="row"
        filling={true}
        product="headphones"
        stars={4}

    />
  ))
