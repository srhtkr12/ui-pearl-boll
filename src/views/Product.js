import React from 'react'
import { useParams } from 'react-router-dom'
import singleProduct from '../styles/product/product.module.css'
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Container, Row } from 'reactstrap'


const Product = () => {

    const { id } = useParams()

    const content = [
        {
            id: '1',
            image: "https://picsum.photos/300/200",
            title: 'Card title - 1',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: 59,
            discount: 10
        },
        {
            id: '2',
            image: "https://picsum.photos/300/200",
            title: 'Card title - 2',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: 59,
            discount: 10
        },
        {
            id: '3',
            image: "https://picsum.photos/300/200",
            title: 'Card title - 3',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: 59,
            discount: 10
        },
        {
            id: '4',
            image: "https://picsum.photos/300/200",
            title: 'Card title - 4',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: 59,
            discount: 10
        },
        {
            id: '5',
            image: "https://picsum.photos/300/200",
            title: 'Card title - 5',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: 59,
            discount: 10
        },
        {
            id: '6',
            image: "https://picsum.photos/300/200",
            title: 'Card title - 6',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: 59,
            discount: 10
        },
        {
            id: '7',
            image: "https://picsum.photos/300/200",
            title: 'Card title - 7',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: 59,
            discount: 10
        },
        {
            id: '8',
            image: "https://picsum.photos/300/200",
            title: 'Card title - 8',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: 59,
            discount: 10
        },
        {
            id: '9',
            image: "https://picsum.photos/300/200",
            title: 'Card title - 9',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: 59,
            discount: 10
        },
        {
            id: '10',
            image: "https://picsum.photos/300/200",
            title: 'Card title - 10',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: 59,
            discount: 10
        },
        {
            id: '11',
            image: "https://picsum.photos/300/200",
            title: 'Card title - 11',
            subTitle: 'Card subtitle',
            description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            price: 59,
            discount: 10
        },
    ]

    return (
        <>
            <Container fluid>
                {content?.map((product) => (
                    (product.id === id) && (
                        <Row className='justify-content-evenly py-3 my-2'
                            style={{ backgroundColor: 'ghostwhite' }}>
                            <Col className='col-4 d-flex justify-centent-between gap-3'>
                                <Col className='d-flex justify-content-between flex-column'>
                                    <Card className={singleProduct.imgBar}>
                                        <CardImg
                                            alt="Image"
                                            src={product.image}
                                        />
                                    </Card>
                                    <Card className={singleProduct.imgBar}>
                                        <CardImg
                                            alt="Image"
                                            src={product.image}
                                        />
                                    </Card>
                                    <Card className={singleProduct.imgBar}>
                                        <CardImg
                                            alt="Image"
                                            src={product.image}
                                        />
                                    </Card>
                                    <Card className={singleProduct.imgBar}>
                                        <CardImg
                                            alt="Image"
                                            src={product.image}
                                        />
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className={singleProduct.bigImg}>
                                        <CardImg
                                            alt="Image"
                                            src={product.image}
                                            style={{ height: 450, width: 400 }}
                                        />
                                    </Card>
                                </Col>
                            </Col>
                            <Col className='col-7 d-flex justify-center align-center'>
                                <Card className={singleProduct.productText}>
                                    <CardBody>
                                        <CardTitle tag="h5">
                                            {product.title}
                                        </CardTitle>
                                        <CardSubtitle
                                            className="mb-2 text-muted"
                                            tag="h6"
                                        >
                                            {product.subTitle}
                                        </CardSubtitle>
                                        <CardText>
                                            {product.description}
                                        </CardText>
                                        <CardText>
                                            <span>Price ${product.price}</span> - <span>Discount ${product.discount}</span>
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
                            </Col>
                        </Row>
                    )
                ))}
            </Container>
        </>
    )
}

export default Product