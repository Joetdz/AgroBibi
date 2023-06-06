function CardCategory({ bg, title }) {
  console.log(bg, 'gggg');
  return (
    <div
      className={` flex flex-auto rounded-lg md:h-[200px] md:w-[200px]  `}
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="flex h-full w-full flex-col  items-center justify-center rounded-lg md:backdrop-brightness-50">
        <h1 className="font-bold text-black">{title}</h1>
      </div>
    </div>
  );
}

export default CardCategory;
