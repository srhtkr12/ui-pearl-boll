import React from 'react'
import { Link, Paper, CardMedia, Card } from '@mui/material'

const CrouselItem = ({ name, url }) => {

    return (
        <Paper sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            // height: 400
        }}>
            <Link to={`/apps/product/details`}>
                <Card borderRadius={5}>
                    <CardMedia
                        component="img"
                        width='100%'
                        height='400vh'
                        borderRadius={5}
                        image={url}
                        alt={name}
                        sx={{ borderRadius: 2 }}
                    />
                </Card>
            </Link>
            {/* <h2>{name}</h2>
            <Button className='CheckButton'>
                Check it out!
            </Button> */}
        </Paper>
    )
}

export default CrouselItem