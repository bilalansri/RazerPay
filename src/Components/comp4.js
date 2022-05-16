export default (props)=>{

    return <>

<div className="md:flex flex-wrap md:p-20">
  <div className="p-4 lg:w-1/3 md:w-1/2">
    <h2 className="text-head font-bold text-4xl px-0 p-4">
    New in the <span className="text-blue-500">Razorpay</span> <br />
    Product Suite
    </h2>
  </div>

    {
    props.data.map((card)=>(
    <div className="p-4 lg:w-1/3 md:w-1/2 md:shadow-lg">
      <div className="flex">
        <img className="bg-blue-500 rounded-full w-10" src={card.img}/>
        <h1 className="font-bold text-xl p-2">{card.title}</h1>
      </div>
    <p className="text-base text-gray-500 p-2">{card.detail}</p>
    <span className="text-blue-500 text-lg p-2">Know More ></span>
    </div>
    ))
    }

</div>

    </>
}