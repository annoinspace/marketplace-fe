import { useState, useEffect } from "react"
import { Card } from "react-bootstrap"

function ProductList() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = process.env.REACT_APP_BE_URL
        const response = await fetch(`${url}/products`)
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [])

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <Card style={{ width: "18rem" }}>
            {product.imageUrl && <Card.Img variant="top" src={product.imageUrl} />}

            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </ul>
    </div>
  )
}

export default ProductList
