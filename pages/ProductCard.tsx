import Link from 'next/link';
export default function ProductCard(props: any) {
  const prod = props.product;

  return (
    <div className="card m-2" style={{ width: 200 }}>
      <Link href={`/product/${prod.id}`}>
        <img src={prod.image} className="card-img-top mx-auto d-block" style={{height: "150px", width: "150px", objectFit: "contain"}} alt={prod.title}/>
      </Link>

      <div className="card-body text-center">
          <h6 className="card-title">{prod.title}</h6>
      </div>
    </div>
  );
}
