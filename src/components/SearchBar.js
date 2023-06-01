import React from 'react'

function SearchBar() {
  return (
    <div>
        <form className='flex flex-row space-x-2'>
            <select className='bg-[#189643] border border-[#189643]  text-white  pr-2 pl-4 rounded-md space-x-2'>
                <option>category</option>
                 <option className='bg-white text-[#189643]'>Fruit </option>
                 <option className='bg-white text-[#189643]'>Legumes</option>
                 <option className='bg-white text-[#189643]'>Céréals</option>
                 <option className='bg-white text-[#189643]'>Epices </option>
                 <option className='bg-white text-[#189643]'>Autres </option>
                  
            </select>
             <select className='bg-[#189643] border border-[#189643]  text-white  pr-4 pl-4 rounded-md'>
                <option>Prix</option>
            </select>
             <select className='bg-[#189643] border border-[#189643]  text-white  pr-4 pl-4 rounded-md'>
                <option>Type</option>
            </select>
            <input type="text" id="first_name" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-none block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-none" placeholder="Quel produit cherchez ous "  />

            {/* <input type='submit' value='Rechercher'className='bg-[#189643] border border-[#189643]  text-white p-1 pr-4 pl-4 rounded-md'/> */}

        </form>
    </div>
  )
}

export default SearchBar