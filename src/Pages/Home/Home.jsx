import Navbar from "../../shared/Navbar";
import SectionTitle from "../../shared/SectionTitle";
import Banner from "./Banner";
import Featured from "./Featured";
import FoodCategory from "./FoodCategory";
import Menu from "./Menu";
import Testimonials from "./Testimonials";

export default function Home() {
  return (
    <div>
        <Banner></Banner>
        <SectionTitle heading="---From 11:00am to 10:00pm---" subHeading="order online"></SectionTitle>
        <FoodCategory></FoodCategory>
        <SectionTitle heading="---Check it out---" subHeading="from our menu"></SectionTitle>
        <Menu></Menu>
        <Featured></Featured>
        <Testimonials></Testimonials>
    </div>
  )
}
