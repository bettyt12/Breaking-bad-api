import React , { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import Search from './components/ui/Search'
import Pagination from './components/ui/Pagination'
import CharacterGrid from './components/characters/CharacterGrid'
import './App.css'
import { useTranslation } from 'react-i18next';
import ThemeContext, {themes} from './ThemeContext'
//import ThemedBody from './ThemedBody'



const App = () => {

 //var opt=document.getElementsByTagName('select');
const [theme,setTheme]=useState(themes.light)
const toggleTheme=()=> theme ===themes.dark ? setTheme(themes.light) : setTheme(themes.dark)


  const { t, i18n } = useTranslation();

  const [items,setItems]=useState([])
  const [isLoading,setIsLoading]=useState(true)
  const [query,setQuery]=useState('')
  const [currentPage,setCurrentPage]=useState(1);
  const [itemPerPage,setItemPerPage]=useState(10);
 // const [theme,setTheme]=useState("light");

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

  //language changer
  const handleClick = lang =>{
    i18n.changeLanguage(lang.target.value)
  }


  return (
    
    <ThemeContext.Provider value={theme} > 
     
    <div style={theme} className="container">
    <select onChange={handleClick} className="lang">
        <option value="en">english</option>
        <option value="it">italian</option>
        <option value="am">amharic</option>
      </select>
    <button onClick={()=>toggleTheme()} className='btn_ch' >{t('char.2')}</button>
     
      <Header />
      <Search getQuery={(q) => setQuery(q)}/>
      <h2>{t('char.0')}</h2>
     
      {/* <button onClick={() =>handleClick('en')}>English</button>
      <button onClick={() =>handleClick('it')}>Italian</button>
      <button onClick={() =>handleClick('am')}>Amharic</button> */}
     

       <Pagination itemPerPage={itemPerPage} totalItems={items.length} paginate={paginate}/>
      <CharacterGrid isLoading={isLoading} items={currentItems}/>
     
     
    </div>
    
    </ThemeContext.Provider> 
 
  )
}

export default App;
