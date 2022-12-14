import { Card, Button } from 'react-bootstrap'
import { useShoppingCart } from '../context/ShoppingCartContext'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}

const StoreItem = ({id, name, price, imgUrl}: StoreItemProps) => {
    const {
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart
    } = useShoppingCart()
    const quantity = getItemQuantity(id)

    return (
        <Card className='mt-4'>
            <Card.Img 
                variant='top' 
                src={imgUrl} 
                height='100%' 
                style={{ objectFit: 'cover' }} 
            />
            <Card.Body className='d-flex flex-column'>
                <Card.Title className='d-flex justify-content-between align-items-baseline mb-4'>
                    <span className='fs-2'>{name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
                </Card.Title>
                <div>
                    {quantity === 0
                        ? <Button className='w-100' onClick={() => increaseCartQuantity(id)}>
                                + Add To Cart
                        </Button>
                        : <div className='d-flex align-items-center flex-column'>
                            <div className='d-flex align-items-center justify-content-between'>
                                <Button onClick={() => decreaseCartQuantity(id)}>-</Button>
                                <div className='mx-3'>
                                    <span className='fs-3'>{quantity}</span> in cart
                                </div>
                                <Button onClick={() => increaseCartQuantity(id)}>+</Button>
                            </div>
                            <Button onClick={() => removeFromCart(id)} variant='danger' size='sm' className='mt-3'>
                                Remove
                            </Button>
                        </div>
                    }
                </div>
            </Card.Body>
        </Card>
    )
}

export default StoreItem