import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'
import SearchBar from '@/components/SearchBar'
import CategoriesContainer from '@/components/CategoriesContainer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
         <Layout>
          <section className="flex flex-col w-full  h-[80vh] bg-[url('/agrobibi/hero.png')] bg-center bg-no-repeat bg-cover" >
            <div class="w-full h-full flex flex-col  justify-center items-center backdrop-brightness-50">
                  <span className="flex flex-col w-2/3 text-center border-t border-b-2 p-3 pt-8 pb-8 mb-10" >
                    <h1 className='text-white text-4xl font-bold pb-4'>La technologie pour soutenir l’agriculutre !</h1> 
                    <p className='text-white text-lg font-semibold'>Inscrivez-vous pour commencer à recevoir des conseils et des informations en temps réel par sms sur les bonnes partiques agricoles </p>
                  </span>
                  <button className=' text-center mt-8 w-1/4 bg-white  p-3 rounded-full text-[#189643] font-bold text'>Inscrivez-vous</button>
            </div>
          </section>

          <section className='flex flex-row w-full h-[80vh] justify-between  pl-8 pr-8 items-center' >
            <div className='flex flex-row w-full justify-between'>
              <div>
                <h1 className='text-[#189643] font-bold text-4xl pb-3 pt-2'>Ce que nous faisons </h1>
                <div className='bg-[#189643] w-1/4 h-[5px] rounded-full'></div>
                <p className='w-2/3 pt-8 pb-8'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley  
              </p>
               <button className='border-solid border border-[#189643] text-[#189643] p-2  pr-4 pl-4 rounded-full' > connexion</button>
              </div>
              
              <Image src="/agrobibi/sect.png" width={800} height={447} className='w-[680px] h-[447px]' />
            </div>
            
          </section>
           <section className=' h-[100vh] '>
            <div className="flex flex-col w-full  h-[45vh] bg-[url('/agrobibi/Legumes.png')] bg-center bg-no-repeat bg-cover" >
            <div class="w-full h-full flex flex-col  justify-center items-center backdrop-brightness-50">
                  <span className="flex flex-col w-2/3 text-center border-t border-b-2 p-3 pt-8 pb-8 mb-10" >
                    <h1 className='text-white text-4xl font-bold pb-4'>Commandez les meilleurs produits bio et frais!</h1> 
                    <p className='text-white text-lg font-semibold'>Et faites vous livrer à domicile le jour de votre choix </p>
                  </span> 
            </div>
          </div>
           <div className='pl-8 pr-8'>
            <CategoriesContainer/>
           </div>
          
          </section>
           


         </Layout>
  
     
  )
}
