
export default function FoodCard({item}) {
    const {name,recipe,image,price} = item
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl">
    <figure>
      <img
        src={image}
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{name}</h2>
      <p>{recipe}</p>
      <div className="card-actions justify-center">
      <button className="btn btn-outline border-0 border-b-4 text-[#BB8506] uppercase">Add to cart</button>
      </div>
    </div>
  </div>
  )
}
