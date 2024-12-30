

export default function MenuItems({item}) {
   const {name,recipe,image,price} = item
  return (
    <div className="flex items-center gap-5">
        <div>
            <img className="w-[100px] rounded-tl-none rounded-tr-full rounded-br-full rounded-bl-full" src={image} alt="" />
        </div>
        <div className="flex">
            <div>
                <h3 className="uppercase">{name} -----------------------</h3>
                <p className="text-[#737373] text-xs my-2">{recipe}</p>
            </div>
            <div>
                <p className="text-[#BB8506]">${price}</p>
            </div>
        </div>
    </div>
  )
}
