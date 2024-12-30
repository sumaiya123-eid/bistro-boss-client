

export default function SectionTitle({heading,subHeading}) {
  return (
    <div className="w-[300px] mx-auto text-center">
        <p className="text-[#D99904] mb-2"><i>{heading}</i></p>
        <h3 className="text-3xl uppercase border-t-2 border-b-2 py-2">{subHeading}</h3>
    </div>
  )
}
