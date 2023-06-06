import EventContainer from '@/components/EventContainer';
import Layout from '@/components/layout';

function index() {
  return (
    <Layout>
      <section className="flex h-[80vh] w-full  flex-col bg-[url('/agrobibi/agritech.png')] bg-cover bg-center bg-no-repeat">
        <div className="flex h-full w-full  flex-col items-center justify-center bg-black bg-opacity-60">
          <span className="mb-10 flex flex-col p-3 text-center md:w-2/3 md:border-b-2 md:border-t md:pb-8 md:pt-8">
            <h1 className="z-0 pb-4 text-3xl font-bold text-white md:text-4xl">
              Découvrez nos activités !
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
      <section className="pl-8 pr-8 pt-8">
        <EventContainer />
      </section>
    </Layout>
  );
}

export default index;
