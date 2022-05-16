export default (props)=>{

    return <>

<div className="p-8 md:flex md:justify-around flex-wrap ">
        {
            props.data.map((card)=>(

                <div className="p-4 md:w-1/2 lg:w-1/3">

                    <div className="flex justify-between">
                        <h1 className="font-bold text-xl p-2">{card.title}</h1>
                        <img className="bg-blue-500 rounded-full w-10" src={card.imag}/>
                    </div>
                    <p className="text-lg text-gray-500 p-2">{card.detail}</p>
                    <span className="text-blue-500 text-lg p-2">Know More ></span>
                </div>
            ))
        }

        </div>

    </>
}