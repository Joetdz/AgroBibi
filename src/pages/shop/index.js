import Layout from '@/components/layout';
import CategoriesContainer from '@/components/CategoriesContainer';
import ProductContainer from '@/components/ProductContainer';
const shop = () => {
  return (
    <Layout>
      <section className=" h-[100vh] ">
        <div className="flex h-[45vh] w-full  flex-col bg-[url('/agrobibi/Legumes.png')] bg-cover bg-center bg-no-repeat">
          <div className="justify-centerbg-black flex h-full w-full  flex-col items-center bg-black bg-opacity-30">
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
        <div className="pb-8 pl-8 pr-8 pt-8">
          <ProductContainer />
        </div>
      </section>
    </Layout>
  );
};

export default shop;
