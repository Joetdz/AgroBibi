import React from 'react'

function CardCategory({bg, title}) {
    console.log(bg, "gggg");
  return (

    <div className={`w-[200px] h-[200px] rounded-lg  `} style={{ backgroundImage: `url(${bg})`}}>
         <div class="w-full h-full flex flex-col  justify-center items-center backdrop-brightness-50 rounded-lg">
            <h1 className="font-bold text-white">{title}</h1>
         </div>
    </div>
    
  )
}

export default CardCategory