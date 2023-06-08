import TeamsContainer from '@/components/TeamsContainer';
import Layout from '@/components/layout';
import Image from 'next/image';
import Link from 'next/link';

function apropos() {
  return (
    <Layout>
      <section className="flex h-[80vh] w-full  flex-col bg-[url('/agrobibi/hero4.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-full w-full  flex-col items-center justify-center bg-black bg-opacity-70">
          <span className="mb-10 flex flex-col p-3 text-center md:w-2/3 md:border-b-2 md:border-t md:pb-8 md:pt-8">
            <h1 className="z-0 pb-4 text-3xl font-bold text-white md:text-4xl">
              Apprendre plus sur nous !
            </h1>
            <p className="text-lg font-semibold text-white">
              Inscrivez-vous pour commencer à recevoir des conseils et des
              informations en temps réel par sms sur les bonnes partiques
              agricoles{' '}
            </p>
          </span>
          <button className=" text rounded-full bg-white p-3  text-center font-bold text-[#189643] md:mt-8 md:w-1/4">
            Inscrivez-vous
          </button>
        </div>
      </section>
      <section className="flex w-full flex-row items-center justify-between  pl-8 pr-8 md:h-[100vh]">
        <div className="flex w-full flex-col justify-between md:flex-row">
          <div>
            <h1 className="pb-3 pt-10 text-3xl font-bold text-[#189643] md:text-4xl">
              Qui sommes-nous ?{' '}
            </h1>

            <div className="h-[5px] w-1/4 rounded-full bg-[#189643]"></div>
            <Image
              src="/agrobibi/aproposhero.png"
              width={800}
              height={447}
              className="w-[680px] pt-8  md:hidden"
            />
            <p className="w-full pb-8  pt-8 text-lg md:w-2/3">
              Nous sommes une startup agroalimentaire qui produit et transforme
              le cacao en poudre, le chia et autres épices. Nous nous appuyons
              sur la technologie sur la technologie pour partager les
              informations nécessaires aux agriculteurs en République
              Démocratique du Congo. Notre plateforme en ligne qui lui sert de
              canal de diffusion d’informations destinées aux agriculteurs que
              nous encadrons à Kinshasa, capitale de la RDC.
            </p>
            <Link
              href="/inscription"
              className=" rounded-full border border-solid border-[#189643] p-2  pl-4 pr-4 text-[#189643]"
            >
              {' '}
              Rejoignez-nous
            </Link>
          </div>

          <Image
            src="/agrobibi/aproposhero.png"
            width={800}
            height={447}
            className="hidden h-[447px] w-[680px] md:flex "
          />
        </div>
      </section>
      <section className=" mt-8 md:h-[50vh]">
        <div className="flex h-[45vh] w-full  flex-col bg-[url('/agrobibi/bannersapropos.png')] bg-cover bg-center bg-no-repeat">
          <div className="flex h-full w-full flex-row  items-center justify-center bg-black bg-opacity-60 ">
            <span className="mb-10 flex w-full flex-col  p-3 pb-8 pt-8 text-center md:w-2/3">
              <h1 className="pb-4 text-3xl font-bold text-white md:text-4xl">
                100+
              </h1>
              <p className="text-lg font-semibold text-white">Fournisseurs </p>
            </span>
            <span className="mb-10 flex w-full flex-col  p-3 pb-8 pt-8 text-center md:w-2/3">
              <h1 className="pb-4 text-3xl font-bold text-white md:text-4xl">
                125+
              </h1>
              <p className="text-lg font-semibold text-white">
                produits Agricoles{' '}
              </p>
            </span>
            <span className="mb-10 flex w-full flex-col  p-3 pb-8 pt-8 text-center md:w-2/3">
              <h1 className="pb-4 text-3xl font-bold text-white md:text-4xl">
                400+
              </h1>
              <p className="text-lg font-semibold text-white">Ventes </p>
            </span>
          </div>
        </div>
      </section>
      <section className="pl-8 pr-8 ">
        <TeamsContainer />
      </section>
    </Layout>
  );
}

export default apropos;
