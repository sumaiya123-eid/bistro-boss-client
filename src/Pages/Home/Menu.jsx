import { useEffect, useState } from "react"
import MenuItems from "../../shared/MenuItems"


export default function Menu() {
    const [menu,setMenu]=useState([])
    useEffect(()=>{
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItem=data.filter(item=>item.category==='popular')
            setMenu(popularItem)
        })
    },[])
  return (
    <div className="w-10/12 mx-auto grid grid-cols-2 space-y-5 gap-10 my-10">
        {
            menu.map(item=><MenuItems item={item}></MenuItems>)
        }
    </div>
  )
}
