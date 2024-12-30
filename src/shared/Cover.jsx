
export default function Cover({image,heading,subHeading}) {
  return (
    <div
  className="hero h-[600px] bg-fixed"
  style={{
    backgroundImage: `url("${image}")`,
  }}>
  <div className=" bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="md:w-[600px] bg-[#15151599] p-10 text-white">
      <h1 className="mb-5 text-4xl font-bold uppercase">{heading}</h1>
      <p className="mb-5">
       {subHeading}
      </p>
    </div>
  </div>
</div>
  )
}
