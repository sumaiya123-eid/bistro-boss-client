import { FaTrash } from "react-icons/fa6";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";

export default function Cart() {
  const [cart,refetch] = useCart();
  const axiosSecure = useAxiosSecure();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-evenly items-center my-10">
        <h3 className="text-xl font-bold">TOTAL ORDERS : {cart.length}</h3>
        <h3 className="text-xl font-bold">TOTAL PRICE : {totalPrice}</h3>
        <button className="btn bg-[#D1A054] text-white ">PAY</button>
      </div>
      <div className="overflow-x-auto w-10/12 mx-auto">
        <table className="table">
          {/* head */}
          <thead className="bg-[#D1A054] *:text-white *:uppercase">
            <tr>
              <th>#</th>
              <th>Item Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr>
                <th>
                  <label>
                    <h3>{idx + 1}</h3>
                  </label>
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </td>
                <td>{item.price}</td>

                <th>
                  <button
                    onClick={() => handleDelete(item._id)}
                    className="btn btn-ghost btn-lg text-red-700"
                  >
                    <FaTrash></FaTrash>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
