export default (props)=>{

    return <>

  <div className="bg-blue-800 text-white ">
      
    <div className="md:p-20">

      <h2 className="font-bold text-2xl text-center p-4">Features</h2>

      <p className="text-lg text-center">
        Empower your business with all the right tools to accept online payments
        and provide the best customer experience
      </p>

      <div className="md:flex flex-wrap md:shadow-md">

        {
            props.data.map((card)=>(

                <div className="p-4 md:w-1/2 lg:w-1/4">

                <img src={card.img} className='p-2 px-0'/>
                <h3 className="p-2 px-0 font-bold text-lg">{card.title}</h3>
                <p className="p-2 px-0">{card.detail}</p>

                </div>

            ))
        }
        
      </div>

    </div>
  </div>



    </>
}