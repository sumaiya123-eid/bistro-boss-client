import featuredImg from '../../assets/home/featured.jpg'
import SectionTitle from '../../shared/SectionTitle'
export default function Featured() {
  return (
    <div
  className="hero text-white bg-fixed"
  style={{
    backgroundImage: `url('${featuredImg}')`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className='flex flex-col py-20 px-32'>
  <div className='mb-10'>
  <SectionTitle heading="---Check it out---" subHeading="from our menu"></SectionTitle>
  </div>
  <div className="flex items-center gap-5 text-neutral-content">
    <div className='w-1/2'>
        <img className='w-[550px]' src={featuredImg} alt="" />
    </div>
    <div className='w-1/2'>
      <h1 className=" font-bold">March 20, 2023 </h1>
      <p className="font-bold">
      WHERE CAN I GET SOME?
      </p>
      <p className='mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
      <button className="btn btn-outline border-0 border-b-4 text-white">READ MORE</button>
    </div>
  </div>
  </div>
</div>
  )
}
