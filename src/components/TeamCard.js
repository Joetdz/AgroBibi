function TeamCard() {
  return (
    <div className="w-full max-w-sm ">
      <a href="#">
        <img
          className="rounded-t-lg p-8"
          src="/agrobibi/event.png"
          alt="product image"
        />
      </a>

      <div className="px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-[#189643] dark:text-white">
            Annie Kamala
          </h5>
        </a>
        <div className="mb-5 mt-2.5 flex items-center">Ceo</div>
      </div>
    </div>
  );
}

export default TeamCard;
