import { IoSearch } from 'react-icons/io5';
import { Toaster, toast } from 'react-hot-toast';
import css from './SearchBar.module.css';
import React, { FormEvent } from 'react';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    const form = event.target as HTMLFormElement;
    const inputValue = (
      form.elements.namedItem('searchInput') as HTMLInputElement
    ).value;
    event.preventDefault();
    if (!inputValue.trim()) {
      toast.error('Please enter a search word!');
    } else {
      onSearch(inputValue.trim());
    }
    form.reset();
  };

  return (
    <header className={css.title}>
      <Toaster position="top-right" />
      <form className={css.form} onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="searchInput"
          autoComplete="off"
          placeholder="Search images and photos"
        />
        <button className={css.btn} type="submit">
          <IoSearch size={25} className={css.searchIcon} />
        </button>
      </form>
    </header>
  );
};

export default SearchBar;
