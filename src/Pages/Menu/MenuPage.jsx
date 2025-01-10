import Cover from "../../shared/Cover";
import cover1 from '../../assets/menu/banner3.jpg'
import cover2 from '../../assets/menu/dessert-bg.jpeg'
import cover3 from '../../assets/menu/pizza-bg.jpg'
import cover4 from '../../assets/menu/salad-bg.jpg'
import cover5 from '../../assets/menu/soup-bg.jpg'
import UseMenu from "../../hooks/UseMenu";
import SectionTitle from "../../shared/SectionTitle";
import MenuItems from "../../shared/MenuItems";
import MenuCategory from "./MenuCategory";


export default function MenuPage() {
  const [menu] = UseMenu()
  const offered=menu.filter(item=>item.category==="offered")
  const dessert=menu.filter(item=>item.category==="dessert")
  const pizza=menu.filter(item=>item.category==="pizza")
  const salad=menu.filter(item=>item.category==="salad")
  const soup=menu.filter(item=>item.category==="soup")

  return (
    <div>
      {/* offered items */}
       <Cover image={cover1} heading="Our Menu" subHeading="Would you like to try a dish? "></Cover>
       <section className="my-5">
       <SectionTitle heading="---Don't miss---" subHeading="today's offer"></SectionTitle>
       <MenuCategory item={offered}></MenuCategory>
       </section>
       
       {/* dessert items */}
      <MenuCategory heading="dessert" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." image={cover2} item={dessert}></MenuCategory>

      {/* pizza items */}
      <MenuCategory heading="pizza" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." image={cover3} item={pizza}></MenuCategory>

      {/* salad items */}
      <MenuCategory heading="salad" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." image={cover4} item={salad}></MenuCategory>

      {/* soup items */}
      <MenuCategory heading="soup" subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." image={cover5} item={soup}></MenuCategory>
    </div>
  )
}
