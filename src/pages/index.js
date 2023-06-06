import Image from 'next/image';

import Layout from '@/components/layout';

import CategoriesContainer from '@/components/CategoriesContainer';
import ProductContainer from '@/components/ProductContainer';

export default function Home() {
  return (
    <Layout>
      <section className="flex h-[80vh] w-full  flex-col bg-[url('/agrobibi/hero.png')] bg-cover bg-center bg-no-repeat">
        <div className="z-0 flex h-full w-full  flex-col items-center justify-center md:backdrop-brightness-50">
          <span className="mb-10 flex w-2/3 flex-col p-3 pb-8 pt-8 text-center md:border-b-2 md:border-t">
            <h1 className="z-0 pb-4 text-4xl font-bold text-white">
              La technologie pour soutenir l’agriculutre !
            </h1>
            <p className="text-lg font-semibold text-white">
              Inscrivez-vous pour commencer à recevoir des conseils et des
              informations en temps réel par sms sur les bonnes partiques
              agricoles{' '}
            </p>
          </span>
          <button className=" text z-0 z-0 mt-8 w-1/4 rounded-full  bg-white p-3 text-center font-bold text-[#189643]">
            Inscrivez-vous
          </button>
        </div>
      </section>

      <section className="flex h-[100vh] w-full flex-row items-center  justify-between pl-8 pr-8">
        <div className="flex w-full flex-col justify-between md:flex-row">
          <div>
            <h1 className="pb-3 pt-2 text-4xl font-bold text-[#189643]">
              Ce que nous faisons{' '}
            </h1>

            <div className="h-[5px] w-1/4 rounded-full bg-[#189643]"></div>
            <Image
              src="/agrobibi/sect.png"
              width={800}
              height={447}
              className="w-[680px] pt-8  md:hidden"
            />
            <p className="w-full pb-8  pt-8 md:w-2/3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <button className="rounded-full border border-solid border-[#189643] p-2  pl-4 pr-4 text-[#189643]">
              {' '}
              connexion
            </button>
          </div>

          <Image
            src="/agrobibi/sect.png"
            width={800}
            height={447}
            className="hidden h-[447px] w-[680px] md:flex "
          />
        </div>
      </section>

      <section className=" h-[100vh] ">
        <div className="flex h-[45vh] w-full  flex-col bg-[url('/agrobibi/Legumes.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex h-full w-full flex-col  items-center justify-center md:backdrop-brightness-50">
            <span className="mb-10 flex w-2/3 flex-col border-b-2 border-t p-3 pb-8 pt-8 text-center">
              <h1 className="pb-4 text-4xl font-bold text-white">
                Commandez les meilleurs produits bio et frais!
              </h1>
              <p className="text-lg font-semibold text-white">
                Et faites vous livrer à domicile le jour de votre choix{' '}
              </p>
            </span>
          </div>
        </div>

        <div className="pl-8 pr-8">
          <CategoriesContainer />
        </div>
      </section>
      <section className=" w-full">
        <div className="pl-8 pr-8 pt-8">
          <ProductContainer />
        </div>
      </section>
      <section className="b flex h-[100vh] w-full  flex-col  justify-between pl-8  pr-8 md:flex-row md:items-center md:space-x-32 md:pl-16 md:pr-16 ">
        <Image
          src="/agrobibi/section3.png"
          width={800}
          height={447}
          className="hidden h-[447px] w-[680px] md:flex"
        />
        <div className="flex w-full flex-col justify-between   md:flex-row">
          <div>
            <h1 className="pb-3 pt-2 text-xl font-bold text-[#189643] md:text-4xl">
              Devenez fournisseur{' '}
            </h1>
            <div className="h-[5px] w-1/4 rounded-full bg-[#189643]"></div>
            <Image
              src="/agrobibi/section3.png"
              width={800}
              height={447}
              className="flex h-[auto] w-1/2 pt-8 md:hidden"
            />
            <p className="w-full pt-8 md:pb-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <button className="rounded-full border border-solid border-[#189643] p-2  pl-4 pr-4 text-[#189643]">
              {' '}
              connexion
            </button>
          </div>
        </div>
      </section>

      <section className="flex h-[100vh] w-full flex-row items-center  justify-between pl-8 pr-16 pr-8  md:pl-16">
        <div className="flex w-full flex-row justify-between">
          <div>
            <h1 className="pb-3 pt-2 text-4xl font-bold text-[#189643]">
              Formations & Conférences{' '}
            </h1>
            <div className="h-[5px] w-1/4 rounded-full bg-[#189643]"></div>
            <p className="w-3/4 pb-8 pt-8">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry s standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <button className="rounded-full border border-solid border-[#189643] p-2  pl-4 pr-4 text-[#189643]">
              {' '}
              connexion
            </button>
          </div>

          <Image
            src="/agrobibi/section4.png"
            width={800}
            height={447}
            className="hidden h-[447px] w-[680px] md:flex"
          />
        </div>
      </section>
    </Layout>
  );
}
