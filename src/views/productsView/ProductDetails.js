import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { allProducts } from '../../JsonData/ProductsData';
import SmallImages from '../../components/Cards/SmallImages';
import { Grid, Box, Card, CardMedia, Button, Typography, CardContent } from '@mui/material';

const Product = () => {
    const { id } = useParams()

    return (
        <Grid>
            {allProducts?.map((product) => (
                (product.id.toString() === id) && (
                    <Grid sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        gap: 2,
                        p: 0, m: 0, py: 1
                    }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            gap: 1,
                            p: 0, m: 0
                        }}>
                            <SmallImages images={product.images} />
                            <Box>
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardMedia
                                        component="img"
                                        width='200'
                                        height="250"
                                        image={product.thumbnail}
                                        alt="Image"
                                    />
                                </Card>
                            </Box>
                        </Box>
                        {/* Secont Col */}
                        <CardContent sx={{ py: 0 }}>
                            <Typography variant="body2" color="text.secondary"
                                sx={{
                                    width: '500px',
                                    fontSize: '20px',
                                }}>
                                {product.description}
                            </Typography>
                            <CardContent sx={{ px: 0 }}>
                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: '700' }}>
                                    Price: Rs{product.price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{ fontWeight: '700' }}>
                                    Discount: Rs{product.discount}
                                </Typography>
                            </CardContent>
                            <CardContent sx={{ p: 0 }}>
                                <Link to={`apps/payment/checkout`} >
                                    Buy This
                                </Link>
                                <Button >
                                    Add to Cart
                                </Button>
                            </CardContent>
                        </CardContent>
                    </Grid>
                )
            ))}
        </Grid >
    )
}

export default Product