import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import productsCss from '../styles/products/products.module.css'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col } from 'reactstrap'
import { useGetAllProductsQuery } from '../redux/products/productApi'

const Products = () => {
  const [products, setProducts] = useState([])
  const { data, error, isLoading } = useGetAllProductsQuery()

  useEffect(() => {
    setProducts(data)
  }, [data])

  return (
    <>
      <div className={productsCss.productsBar}>
        <Col className='col-1'>Filter</Col>
        <Col className='col-2'>Total Products {products && products.length}</Col>
      </div>
      <div className={productsCss.product}>
        {products && products?.map((item) => (
          <Card key={item.id} className={productsCss.productCard}>
            <Link to={`/apps/products/product/${item.id}`}>
              <CardImg
                alt="Image"
                src={item.image}
                style={{
                  height: 180
                }}
                top
                width="100%"
              />
            </Link>
            <CardBody>
              <CardTitle tag="h5">
                {item.title}
              </CardTitle>
              <CardSubtitle
                className="mb-2 text-muted"
                tag="h6"
              >
                {item.subTitle}
              </CardSubtitle>
              <CardText>
                {item.description.substring(0, 50)}...
              </CardText>
              <CardText>
                <span>Price ${item.price}</span> - <span>Discount ${item.discount}</span>
              </CardText>
              <div>
                <Button color='warning'>
                  Buy This
                </Button> {' '}
                <Button color='outline-warning'>
                  Add to Cart
                </Button>
              </div>

            </CardBody>
          </Card>
        ))}
      </div >
    </>
  )
}

export default Products