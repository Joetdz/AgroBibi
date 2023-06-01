import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

export default function Header() {

  const router=useRouter()
  const currentRoute=router.pathname
  return (
    <header className='flex flex-col space-x-1 h-[20vh]  border-solid border-2'>
      <div className='flex h-[5vh] bg-black w-full justify-between pl-8 items-center'   >
        <div className=' flex flex-row space-x-2'>
          <Link  href="https://facebook.com"> 
            <Image src="/agrobibi/fb.png" width={14} height={14}/> 
          </Link>
          <Link  href="https://facebook.com"> 
            <Image src="/agrobibi/twt.png" width={14} height={14}/> 
          </Link>

          <Link  href="https://facebook.com">
             <Image src="/agrobibi/whtp.png" width={14} height={14}/> 
          </Link>
        </div>
        <span className='text-xs text-white pr-9'> Tél: 243 000 000 000</span>
      </div>
      <div className='flex  h-[16vh] items-center justify-between'>
        <Link  href="/"> 
          <Image src="/agrobibi/logo3.png" width={140} height={20}/> 
        </Link>
         <div className='flex  h-[11vh] items-center pr- space-x-16'>
        <Link  href="/" className={
                currentRoute === "/"
                  ? "text-[#189643] "
                  : " text-[#3E3D3D] hover:text-[#189643] "
              }> 
          Accueil
        </Link>
        <Link  href="/shop" className={
                 currentRoute === "/activites"
                  ? "text-[#189643] "
                  : " text-[#3E3D3D] hover:text-[#189643] "}> 
        Shop
        </Link>
        <Link  href="/formation"className={
                 currentRoute === "/activites"
                  ? "text-[#189643] "
                  : " text-[#3E3D3D] hover:text-[#189643] "}> 
         Activités
        </Link>
        <Link   href="/activites"
              className={
                 currentRoute === "/activites"
                  ? "text-[#189643] "
                  : " text-[#3E3D3D] hover:text-[#189643] "}> 
          Apropos
        </Link>
      </div>
        <div className='flex-row items-center justify-between space-x-10 pr-8' >
            <button className='border-solid border border-[#189643] text-[#189643] p-2  pr-4 pl-4 rounded-full' > connexion</button>
          <button className='bg-[#189643] border border-[#189643]  text-white p-2 pr-4 pl-4 rounded-full' >Inscription</button>
        </div>
      </div>
      

    </header>
  )
}
