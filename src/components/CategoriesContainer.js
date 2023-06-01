import React from 'react'
import SearchBar from './SearchBar'
import CardCategory from './CardCategory'

function CategoriesContainer() {
  return (
    <div className='flex flex-col w-full pt-8'>
        <div className='w-2/3'>
             <SearchBar />
        </div>
        <div className='flex flex-row w-full space-x-4 pt-8'>
            <CardCategory title="legume"/>
            <CardCategory title="legume"/>
            <CardCategory title="legume"/>
            <CardCategory title="legume"/>
            <CardCategory title="legume"/>
            <CardCategory title="legume"/>
            
        </div>
       
    </div>
  )
}

export default CategoriesContainer