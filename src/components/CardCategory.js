import React from 'react'

function CardCategory({bg, title}) {
  return (

    <div className={`w-[200px] h-[200px] rounded-lg  bg-[url(${bg})`}>
         <div class="w-full h-full flex flex-col  justify-center items-center backdrop-brightness-50">
            <h1>{title}</h1>
         </div>
    </div>
    
  )
}

export default CardCategory