function SearchBar() {
  return (
    <div>
      <form className="flex flex-row space-x-2">
        <select className="space-x-2 rounded-md border  border-[#189643]  bg-[#189643] pl-4 pr-2 text-white">
          <option>category</option>
          <option className="bg-white text-[#189643]">Fruit </option>
          <option className="bg-white text-[#189643]">Legumes</option>
          <option className="bg-white text-[#189643]">Céréals</option>
          <option className="bg-white text-[#189643]">Epices </option>
          <option className="bg-white text-[#189643]">Autres </option>
        </select>
        <select className="rounded-md border border-[#189643]  bg-[#189643]  pl-4 pr-4 text-white">
          <option>Prix</option>
        </select>
        <select className="rounded-md border border-[#189643]  bg-[#189643]  pl-4 pr-4 text-white">
          <option>Type</option>
        </select>
        <input
          type="text"
          id="first_name"
          className="block w-full rounded-lg border border-gray-300 bg-white p-2.5 text-sm text-gray-900 focus:border-none focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-none dark:focus:ring-blue-500"
          placeholder="Quel produit cherchez ous "
        />

        {/* <input type='submit' value='Rechercher'className='bg-[#189643] border border-[#189643]  text-white p-1 pr-4 pl-4 rounded-md'/>  */}
      </form>
    </div>
  );
}

export default SearchBar;
