function EventCard() {
  return (
    <div className="w-full max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800">
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
            Formation en agro-industrie
          </h5>
        </a>
        <div className="mb-5 mt-2.5 flex items-center">17 mai 2023</div>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900 dark:text-white">
            Kinshasa
          </span>
          <button className="rounded-full border border-solid border-[#189643] p-2  pl-4 pr-4 text-[#189643]">
            {' '}
            S&lsquo;inscrire
          </button>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
