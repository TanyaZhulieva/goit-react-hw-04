import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar() {
    const notify = () => toast('Введіть запит для пошуку');

  return <header>
    <form>
      <input
        type="text"
        autocomplete="off"
        autofocus
        placeholder="Search images and photos"
      />
      <button type="submit" onClick={notify}>Search</button>
    </form>
    <Toaster/>
  </header>;
}
