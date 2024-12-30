import Cover from "../../shared/Cover";
import cover1 from '../../assets/menu/banner3.jpg'
import cover2 from '../../assets/menu/dessert-bg.jpeg'
import cover3 from '../../assets/menu/pizza-bg.jpg'
import cover4 from '../../assets/menu/salad-bg.jpg'
import cover5 from '../../assets/menu/soup-bg.jpg'
import UseMenu from "../../hooks/UseMenu";
import SectionTitle from "../../shared/SectionTitle";
import MenuItems from "../../shared/MenuItems";


export default function MenuPage() {
  const menu = UseMenu()
  const offered=menu.filter(item=>item.category==="offered")
  const dessert=menu.filter(item=>item.category==="dessert")
  const pizza=menu.filter(item=>item.category==="pizza")
  const salad=menu.filter(item=>item.category==="salad")
  const soup=menu.filter(item=>item.category==="soup")

  return (
    <div>
       <Cover image={cover1} heading="Our Menu" subHeading="Would you like to try a dish? "></Cover>
       <section className="my-5">
        <SectionTitle heading="---Don't miss---" subHeading="today's offer"></SectionTitle>
        <div className="w-10/12 mx-auto grid grid-cols-2 space-y-5 gap-10 my-10">
          {
            offered.map(item=><MenuItems item={item}></MenuItems>)
          }
        </div>
       <div className="flex justify-center items-center">
       <button className="btn btn-outline border-0 border-b-4 text-black ">ORDER YOUR FAVORITE FOOD</button>
       </div>
       </section>
    
       <Cover image={cover2} heading="Dessert" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
       
       <section className="w-10/12 mx-auto grid grid-cols-2 space-y-5 gap-10 my-10">
       {
        dessert.map(item=><MenuItems item={item}></MenuItems>)
       }
       </section>
       <div className="flex justify-center items-center mb-10">
       <button className="btn btn-outline border-0 border-b-4 text-black ">ORDER YOUR FAVORITE FOOD</button>
       </div>

       <Cover image={cover3} heading="Pizza" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
       
       <section className="w-10/12 mx-auto grid grid-cols-2 space-y-5 gap-10 my-10">
       {
        pizza.map(item=><MenuItems item={item}></MenuItems>)
       }
       </section>
       <div className="flex justify-center items-center mb-10">
       <button className="btn btn-outline border-0 border-b-4 text-black ">ORDER YOUR FAVORITE FOOD</button>
       </div>

       <Cover image={cover4} heading="Salads" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
       
       <section className="w-10/12 mx-auto grid grid-cols-2 space-y-5 gap-10 my-10">
       {
        salad.map(item=><MenuItems item={item}></MenuItems>)
       }
       </section>
       <div className="flex justify-center items-center mb-10">
       <button className="btn btn-outline border-0 border-b-4 text-black ">ORDER YOUR FAVORITE FOOD</button>
       </div>

       <Cover image={cover5} heading="Soups" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."></Cover>
       
       <section className="w-10/12 mx-auto grid grid-cols-2 space-y-5 gap-10 my-10">
       {
        soup.map(item=><MenuItems item={item}></MenuItems>)
       }
       </section>
       <div className="flex justify-center items-center mb-10">
       <button className="btn btn-outline border-0 border-b-4 text-black ">ORDER YOUR FAVORITE FOOD</button>
       </div>
    </div>
  )
}
