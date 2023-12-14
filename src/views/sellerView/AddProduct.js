import React, { useState } from 'react';
import { useAddNewSalerMutation } from '../../redux/salers/salersApi'
import { Box, Button, Typography, TextField, Grid } from '@mui/material';

const Register = () => {
    const [addNewSaler] = useAddNewSalerMutation()
    const [product, setProduct] = useState({
        title: "",
        description: "",
        price: 0,
        discount: 0,
        stock: 0,
        brand: "",
        size: '',
        fabric: '',
        category: "",
        thumbnail: "",
        images: ''
    })

    const handleChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }

    const handleAddProduct = (e) => {
        e.preventDefault();
        addNewSaler(product).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
        e.target.reset();
    }

    return (
        <Grid sx={{
            p: 4,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#6699CC',
            minHeight: '100%',
            flexDirection: 'column'
        }} >

            <Box component="form"
                onSubmit={handleAddProduct}
                sx={{
                    display: 'flex',
                    borderRadius: 5,
                    color: '#fff',
                    flexDirection: 'row',
                    overflowWrap: 'wrap'

                }}>
                <Typography>Add Product</Typography>
                <TextField
                    required
                    id="title"
                    name='title'
                    type="text"
                    label="Product Type"
                    variant="standard"
                    placeholder='Product Type'
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="title"
                    name='title'
                    type="text"
                    label="Caretory"
                    variant="standard"
                    placeholder='Caretory'
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="title"
                    name='title'
                    type="text"
                    label="Product Name"
                    variant="standard"
                    placeholder='Product Name'
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="title"
                    name='title'
                    type="text"
                    label="Product Code"
                    variant="standard"
                    placeholder='Product Code'
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="description"
                    name='description'
                    type="text"
                    label="Description"
                    variant="standard"
                    placeholder='Description'
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="price"
                    name='price'
                    type="text"
                    label="Price"
                    variant="standard"
                    placeholder='Price'
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="discount"
                    name='discount'
                    type="password"
                    label="Discount"
                    variant="standard"
                    placeholder='Discount'
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="stock"
                    name='stock'
                    type="text"
                    label="Stock"
                    variant="standard"
                    placeholder='Stock'
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="brand"
                    name='brand'
                    type="text"
                    label="Brand"
                    variant="standard"
                    placeholder='Brand'
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="size"
                    name='size'
                    type="text"
                    label="Size"
                    variant="standard"
                    placeholder='Size'
                    onChange={handleChange}
                />
                <TextField
                    required
                    id="fabric"
                    name='fabric'
                    type="text"
                    label="Fabric"
                    variant="standard"
                    placeholder='Fabric'
                    onChange={handleChange}
                />
            </Box>
            <Box >
                <Button type='submit' >
                    Add Product
                </Button>
                <Button to='/' >
                    Discard
                </Button>
            </Box>
        </Grid>
    )
}

export default Register