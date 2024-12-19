import { IoSearch } from "react-icons/io5";
import { Toaster, toast } from 'react-hot-toast';
import css from './SearchBar.module.css'


export default function SearchBar({onSearch}){
  const handleSubmit = (event) => {
    const inputValue = event.target.elements.searchInput.value;
    event.preventDefault();
    if(!inputValue.trim()){
      toast.error('Please enter a search word!')
    }
    onSearch(
      inputValue.trim()
    )
    event.target.reset()
  }
  
  
  
  return (
  <header className={css.title}>
    <Toaster position='top-right' />
    <form className={css.form} onSubmit={handleSubmit}>
      <input className={css.input}
        type="text"
        name="searchInput"
        autoComplete="off"
        placeholder="Search images and photos"
      />
      <button type="submit"><IoSearch size={25} className={css.searchIcon} /></button>
    </form>
  </header>
  )
}