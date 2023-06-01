import React from 'react'
import SearchBar from './SearchBar'
import CardCategory from './CardCategory'

function CategoriesContainer() {
  return (
    <div className='flex flex-col w-full pt-12 pb-12'>
        <div className='w-2/3'>
             <SearchBar />
        </div>
        <div className='flex flex-row w-full space-x-4 pt-8'>
            <CardCategory title="legumes" bg="/agrobibi/legumes.png"/>
             <CardCategory title="legume" bg="/agrobibi/epices.png"/>
            <CardCategory title="legume" bg="/agrobibi/fruits.png"/>
            <CardCategory title="legume" bg="/agrobibi/cereales.png"/>
            <CardCategory title="legume"bg="/agrobibi/transforme.png"/>
            <CardCategory title="legume" bg="/agrobibi/legumes.png"/> 
            
        </div>
       
    </div>
  )
}

export default CategoriesContainer