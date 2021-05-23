import React , { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import Pagination from './components/ui/Pagination'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css'
import Theme from './components/ui/Theme'
import {ThemeProvider} from 'styled-components'
import {lightTheme,darkTheme} from './components/ui/themes'

const App = () => {

  const [items,setItems]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [query,setQuery]=useState('')
  const [currentPage,setCurrentPage]=useState(1);
  const [itemPerPage,setItemPerPage]=useState(8);
  const [theme,setTheme]=useState("dark");

  useEffect(()=>{
      const fetchItems= async()=>{
        const result= await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
        console.log(result.data)

        setItems(result.data)
        setIsLoading(false)
      }
      fetchItems()
     
  },[query]);

  //get current item
  const indexOfLastItem= currentPage * itemPerPage;
  const indexOfFirstItem=indexOfLastItem - itemPerPage;
  const currentItems=items.slice(indexOfFirstItem,indexOfLastItem);

//change page

const paginate= pageNumber => setCurrentPage(pageNumber);


  return (
    <ThemeProvider theme={theme ==='light' ? lightTheme : darkTheme}>
    <div className='container'>
      <Theme/>
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <h2 >Characters</h2>
      <CharacterGrid isLoading={isLoading} items={currentItems}/>
      <Pagination itemPerPage={itemPerPage} totalItems={items.length} paginate={paginate}/>
    </div>
    </ThemeProvider>
  )
}

export default App;
