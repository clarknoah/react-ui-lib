import React from 'react';
import { storiesOf } from '@storybook/react';
import ProductInline from './ProductInline';


storiesOf('Product-Inline', module)
  .add("Product-Inline", () => (
    <ProductInline
        direction="row"
        filling={false}
        product="headphones"
        title="Beats Solo2 On Ear Headphones - Black"
        reviews={0}
        stars={5}
    />
  ))
