
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Productservice } from '@/app/Service/product-service'

export default function DetailPage() {
  const router = useRouter()
  const { productid } = router.query

  const [singleproduct, setSingleProduct] = useState<any>(null)

  useEffect(() => {
    if (productid) {
      Productservice.getproductbyid(productid).then((data) => {
        setSingleProduct(data)
      })
    }
  }, [productid])

  if (!singleproduct) {
    return <h3 className="text-center mt-5">Loading...</h3>
  }

  return (
    <div className="container mt-4">
      <div className="card p-3 text-center">
        <img
          src={singleproduct.image}
          alt={singleproduct.title}
          style={{ width: '200px', height: '200px', objectFit: 'contain' }}
          className="mx-auto"
        />
        <div className="card-body">
          <h4>{singleproduct.title}</h4>
          <h5 className="text-success">₹{singleproduct.price}</h5>
          <p className="text-muted">{singleproduct.description}</p>
          <p className="text-muted">{singleproduct.category}</p>
        </div>
      </div>
    </div>
  )
}

