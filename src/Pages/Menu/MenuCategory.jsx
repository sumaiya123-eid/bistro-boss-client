import React from 'react'
import SectionTitle from '../../shared/SectionTitle'
import MenuItems from '../../shared/MenuItems'
import Cover from '../../shared/Cover'
import { Link } from 'react-router-dom'

export default function MenuCategory({heading,subHeading,image,item}) {
  return (
    <div className='my-5'>
       {(heading||subHeading) && (<Cover image={image} heading={heading} subHeading={subHeading}></Cover>)}
         <div className="w-10/12 mx-auto grid grid-cols-2 space-y-5 gap-10 my-10">
                  {
                    item.map(item=>( <MenuItems item={item}></MenuItems>
                    ))
                  }
                </div>
                <div className="flex justify-center items-center">
               <Link to={`/shop/${heading}`}><button className="btn btn-outline border-0 border-b-4 text-black ">ORDER YOUR FAVORITE FOOD</button></Link>
               </div>
    </div>
  )
}
