import { useState } from "react";
import cover from "../../assets/shop/banner2.jpg";
import Cover from "../../shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "../../hooks/UseMenu";
import ShopTab from "./ShopTab";
import { useParams } from "react-router-dom";
export default function Shop() {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const menu = UseMenu();
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  return (
    <div>
      <Cover
        image={cover}
        heading="OUR SHOP"
        subHeading="Would you like to try a dish?"
      ></Cover>
      <section className="w-10/12 mx-auto my-10">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <ShopTab items={salad}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={pizza}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={soup}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={dessert}></ShopTab>
          </TabPanel>
          <TabPanel>
            <ShopTab items={drinks}></ShopTab>
          </TabPanel>
        </Tabs>
      </section>
    </div>
  );
}
