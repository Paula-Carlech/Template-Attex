import React from 'react'
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

interface TopSellingProductsProps {
  products: {
    product: string;
    price: number;
    orders: number;
    quantity: string;
    seller: string;
  }[];
}

const TopSellingProducts = ({ products }: TopSellingProductsProps) => {


  return (
    <>
      <Card>
        <Card.Header className='d-flex justify-content-between align-items-center'>
          <h4 className='header-title'>Top Selling Products</h4>
          <Link to='#' className='btn btn-sm btn-info'>
            Export <i className='ri-download-line ms-1'/>
          </Link>
        </Card.Header>
        <Card.Body className='p-0'>
          <div className='table-responsive'>
            <table className='table table-borderless table-hover table-nowrap table-centered m-0'>
              <thead className='border-top border-bottom bg-light-subtle border-light'>
                <tr>
                  <th className='py-1'>Product</th>
                  <th className='py-1'>Price</th>
                  <th className='py-1'>Orders</th>
                  <th className='py-1'>Avl. Quantity</th>
                  <th className='py-1'>Seller</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product, idx) => (
                  <tr key={idx}>
                    <td>{product.product}</td>
                    <td>${product.price}</td>
                    <td>{product.orders}</td>
                    <td>{product.quantity}</td>
                    <td>{product.seller}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className='text-center'>
            <Link
              to='#!'
              className='text-primary text-decoration-underline fw-bold btn mb-2'
            >
              View All
            </Link>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default TopSellingProducts