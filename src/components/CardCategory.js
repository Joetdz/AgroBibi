function CardCategory({ bg, title }) {
  console.log(bg, 'gggg');
  return (
    <div
      className={` flex flex-auto rounded-lg bg-cover bg-center bg-no-repeat md:h-[200px] md:w-[200px] `}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex h-[200px] w-[300px] flex-col  items-center justify-center rounded-lg  bg-black bg-opacity-30">
        <h1 className="font-bold text-white">{title}</h1>
      </div>
    </div>
  );
}

export default CardCategory;
