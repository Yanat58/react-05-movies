import { useState } from 'react';
import { toast } from 'react-toastify';
import { FaSearch } from 'react-icons/fa';

const SearchBox = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const onChangeInput = e => {
    setQuery(e.currentTarget.value);
  };

  const onSubmitForm = e => {
    e.preventDefault();

    if (query.trim() === '') {
      toast.warn('Enter a search term.');
      return;
    }

    onSubmit(query);
    setQuery('');
  };
  return (
    <form onSubmit={onSubmitForm}>
      <input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search film"
        value={query}
        onChange={onChangeInput}
      />
      <button type="submit">
        <FaSearch size={14} />
      </button>
    </form>
  );
};

export default SearchBox;
