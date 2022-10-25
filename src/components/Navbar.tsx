import { Container, Nav, Navbar as NavbarBs, Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useShoppingCart } from '../context/ShoppingCartContext'

const Navbar = () => {
    const { openCart, cartQuantity } = useShoppingCart()
    return (
        <NavbarBs sticky='top' className='bg-white shadow-sm mb-3' >
            <Container>
                <Nav className='me-auto'>
                    <Nav.Link to='/' as={NavLink}>
                    Store
                    </Nav.Link>
                    <Nav.Link to='/about' as={NavLink}>
                        About
                    </Nav.Link>
                </Nav>
                {cartQuantity >= 1
                    ? <Button 
                        onClick={openCart}
                        style={{ width: '3rem', height: '3rem' }} 
                        variant='outline-primary' 
                        className='rounded-circle'
                    >
                        <img style={{ width: '25px' }} src="https://img.icons8.com/fluency/48/000000/shopping-cart.png"/>
                        <div 
                            className='rounded-circle bg-danger d-flex justify-content-center align-items-center'
                            style={{ color: 'white', width: '1.5rem', position: 'relative', bottom: '.5rem', left: '1rem' }}
                        >
                            {cartQuantity}
                        </div>
                    </Button>
                    : <></>
                }
            </Container>
        </NavbarBs>
    )
}

export default Navbar