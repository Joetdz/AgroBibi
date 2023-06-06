import ProductCard from './ProductCard';

function ProductContainer() {
  return (
    <div className="flex w-full flex-col space-y-8">
      <h1 className="text-xl font-semibold     ">Notre sélection</h1>
      <div className="grid grid-cols-1 grid-rows-3 gap-6 md:grid-cols-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />

        <ProductCard />
      </div>
    </div>
  );
}

export default ProductContainer;
