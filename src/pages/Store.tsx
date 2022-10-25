import storeItem from '../data/items.json'
import { Row, Col } from 'react-bootstrap'
import StoreItem from '../components/StoreItem'

const Store = () => {
    return (
        <>
            <h1>Store</h1>
            <Row lg={3} md={2} xs={1}>
                {storeItem.map(item => (
                    <Col key={item.id}>
                        <StoreItem {...item} />
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Store