import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
         <Layout>
          <section className="flex flex-col w-full  h-[80vh] bg-[url('/agrobibi/hero.png')] bg-center bg-no-repeat bg-cover" >
            <div class="w-full h-full flex flex-col  justify-center items-center backdrop-brightness-50">
                  <span className="flex flex-col w-2/3 text-center border-t border-b-2 p-3 pt-8 pb-8" >
                    <h1 className='text-white text-4xl font-bold pb-4'>La technologie pour soutenir l’agriculutre !</h1> 
                    <p className='text-white text-lg font-semibold'>Inscrivez-vous pour commencer à recevoir des conseils et des informations en temps réel par sms sur les bonnes partiques agricoles </p>
                  </span>
                  <button className=' text-center mt-8 w-1/4 bg-white  p-3 rounded-full text-[#189643] font-bold text'>Inscrivez-vous</button>
            </div>
          </section>
         </Layout>
  
     
  )
}
