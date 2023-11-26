import React, { useState, useEffect } from 'react'
import { Container, Grid, Box } from '@mui/material';
import { allProducts } from '../JsonData/ProductsData';
import ProductCard from '../components/cards/ProductCard'
import { useGetAllProductsQuery } from '../redux/products/productApi'


const Products = () => {
  // const [products, setProducts] = useState([])
  // const { data, error, isLoading } = useGetAllProductsQuery()
  // useEffect(() => {
  //   setProducts(data)
  // }, [data])


  return (
    <Container >
      <Grid>
        <Box
          component="ul"
          sx={{
            display: 'flex',
            gap: 2, flexWrap: 'wrap',
            p: 0, m: 0, py: 2
          }}
        >
          {allProducts && allProducts?.map((item) => {
            return (
              <ProductCard
                itemId={item.id}
                title={item.title}
                price={item.price}
                brand={item.brand}
                rating={item.rating}
                images={item.images}
                thumbnail={item.thumbnail}
                category={item.category}
                subTitle={item.subTitle}
                discount={item.discountPercentage}
                description={item.description.substring(0, 50)}
                stock={item.stock > 0 ? 'In Stock' : 'Out Of Stock'}
              />
            )
          })}
        </Box>
      </Grid>
    </Container >
  )
}

export default Products