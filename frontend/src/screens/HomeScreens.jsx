import {Row,Col} from 'react-bootstrap'
import Product from '../components/Product';

import products from '../products'


import React from 'react'




const HomeScreens = () => {
    return (
        <>
          <h1>Latest Product</h1>
          <Row>
            {products.map((product) => {
              return (
                <Col  key={product.id} sm={12} md={6} lg={4} xl={3} >
                  <Product product = {product} />
                </Col>
              );
            })}
          </Row>
        </>
      );
    };

export default HomeScreens
