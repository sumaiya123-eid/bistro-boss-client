import FoodCard from "../../shared/FoodCard";

export default function ShopTab({items}) {
  return (
     <div className="grid md:grid-cols-3 gap-10">
                  {
                    items.map(item=><FoodCard item={item}></FoodCard>)
                  }
                </div>
  )
}
