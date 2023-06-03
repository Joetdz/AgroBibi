import Image from 'next/image';

function ProductCard() {
  return (
    <div className="flex h-[400px] w-full flex-col space-y-6 rounded-md border">
      <Image
        src="/agrobibi/ognons.png"
        width={800}
        height={14}
        className="h-1/2 w-full pl-6 pr-6 pt-4"
      />
      <div className="pa flex justify-between pl-4 pr-4">
        <span className="text-xl font-medium ">Ognois</span>
        <span className="text-xl text-[#189643] ">1000 fc </span>
      </div>
      <p className=" pl-4 pr-4 text-sm">
        Des frais et bio cultivés avec passion
      </p>
      <div className="w-full pl-4 pr-4">
        <button className=" rounded-full border border-solid border-[#189643] p-2  pl-4 pr-4 text-[#189643] hover:bg-[#189643] hover:text-white  ">
          {' '}
          Visitez la Boutique
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
