
import React from 'react';
import { useState } from 'react';
import { useParams, Link ,useNavigate} from 'react-router-dom';

import {Form,  Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';

import { useDispatch } from 'react-redux';

import Rating from '../components/Rating';

import Loader from '../components/Loader';

import Message from '../components/Message';

import { useGetProductDetailsQuery } from '../slices/productApiSlice';

import {addToCart} from '../slices/cartSlice'


const ProductScreens = () => {
  
  const { _id: productID } = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [qty , setQty] = useState(1);

  
  
  const {data:product , isLoading, error} = useGetProductDetailsQuery(productID);

  const addToCartHandler =  () =>{

    dispatch(addToCart({...product, qty}));

    navigate('/cart');



  }
  

  



  if (!product) {
    return <h2 className="text-center mt-5">Product Not Found</h2>;
  }

  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go back
      </Link>

    

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
                    {error?.data?.message || error.error}
                  </Message>
      ) : (
        <Row>
        <Col md={5}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={4}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </ListGroup.Item>

            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>

            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>

        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
              </ListGroup.Item>

              {product.countInStock > 0 && (
                <ListGroup.Item>

                  <Row>

                    <Col>
                    QTY
                    </Col>

                    <Col>

                    <Form.Control 

                    as='select'
                    value={qty}
                    id= 'qty'
                    name = 'qty'
                    onChange = {(e) => setQty(Number(e.target.value))}>

                      {[...Array (product.countInStock).keys()].map((x) =>(
                        <option key={x+1} value={x+1} > 
                        {x+1}
                        </option>
                      ))}


                    </Form.Control>


                    </Col>



                  </Row>



                </ListGroup.Item>
              )}

              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}

                  onClick= {addToCartHandler}
                >
                  Add to Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
      )}

      
    </>
  );
};

export default ProductScreens;

