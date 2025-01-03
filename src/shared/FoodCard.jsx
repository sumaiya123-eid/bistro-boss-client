import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import useAxiosSecure from "../hooks/useAxiosSecure"
import useCart from "../hooks/useCart"


export default function FoodCard({item}) {
  const navigate=useNavigate()
  const axiosSecure=useAxiosSecure()
  const [,refetch]=useCart()
    const {name,recipe,image,price,_id} = item
    const {user}=useContext(AuthContext)
    const handleAddToCart=food=>{
      console.log(food)
      if(user&&user.email){
          const cartItem={
            menuId:_id,
            email:user.email,
            name,
            recipe,
            image,
            price
          }
          axiosSecure.post('/carts',cartItem)
          .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${name} has beed added to the cart successfully`,
                showConfirmButton: false,
                timer: 1500
              });
            }
            refetch()
          })
      }else{
        Swal.fire({
          title: "You're not login yet",
          text: "Are you want to logged in to add to cart the item?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, want to logged in!"
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login')
          }
        });
      }
    }
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
      <button onClick={()=>handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 text-[#BB8506] uppercase">Add to cart</button>
      </div>
    </div>
  </div>
  )
}
