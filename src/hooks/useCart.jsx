import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useCart = () => {
  const axiosSecure = useAxiosSecure();
  const {user} = useContext(AuthContext)
  const { refetch,data: cart = [] } = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
        if (!user?.email) {
            return [];
          }
      const res = await axiosSecure.get(`/carts?email=${user?.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });
  return [cart,refetch];
};
export default useCart;
