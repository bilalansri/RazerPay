export default (props)=>{

    return <>

<div className='p-7 bg-head text-white '>
<h2 className="text-5xl font-bold p-2">
      Explore
      <img
        alt="Razorpay X"
        src="https://next.razorpay.com/build/browser/static/razorpay-x-logo.5cf8015e.svg"
        className="w-52 px-0 p-2"
      />
      <span className="text-green-400 px-0 p-2">Business Banking</span>
    </h2>
        <h3 className='text-xl font-bold'>
        Open and operate <br />
            fully‑functional Current Accounts on RazorpayX
        </h3>
        <div className='text-green-400 text-2xl flex items-center'>
            <ion-icon name="checkmark-outline"></ion-icon>
            <span className='text-white text-lg'>Business Banking for disruptors</span>
        </div>
        <div className='text-green-400 text-2xl flex items-center'>
            <ion-icon name="checkmark-outline"></ion-icon>
            <span className='text-white text-lg'>All standard banking features</span>
        </div>
        <div className='text-green-400 text-2xl flex items-center'>
            <ion-icon name="checkmark-outline"></ion-icon>
            <span className='text-white text-lg'>Tech capabilities like API Banking</span>
        </div>
        <div className='text-green-400 text-2xl flex items-center'>
            <ion-icon name="checkmark-outline"></ion-icon>
            <span className='text-white text-lg'>Insightful Reports</span>
        </div>
        <div className='text-green-400 text-2xl flex items-center'>
            <ion-icon name="checkmark-outline"></ion-icon>
            <span className='text-white text-lg'>Multiple Payout flow options</span>
        </div>
        <div>
            <p className='p-4 text-blue-500  font-bold'>
            Know More 
            <span>
                <ion-icon name="chevron-forward-outline"></ion-icon>
            </span>
            </p>
        </div>
        <button className='w-11/12 bg-blue-500 p-2 font-bold text-white rounded'>
            Sign Up Now
            <span>
                <ion-icon name="arrow-forward-outline"></ion-icon>
            </span>
        </button>
    </div>
    <div className="hidden">
        <img src='https://next.razorpay.com/build/browser/static/x-graphic.b40f463e.png'/>
    </div>


    <div className="p-3 bg-head text-white md:flex flex-wrap">
    {
    props.data.map((card)=>(
    <div className="p-2 md:w-1/2 lg:w-1/3">
      <div className="flex justify-between">
        <h1 className="font-bold text-xl p-2">{card.title}</h1>
        <img className="bg-blue-500 rounded-full w-10" src={card.img}/>
      </div>
    <p className="text-lg text-gray-500 p-2">{card.detail}</p>
    <span className="text-blue-500 text-lg p-2">Know More ></span>
    </div>
    ))
    }
  </div>

    </>
}