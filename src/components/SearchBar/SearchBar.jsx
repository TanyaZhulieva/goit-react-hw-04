import css from "./SearchBar.module.css";
import toast, { Toaster } from 'react-hot-toast';

export default function SearchBar({onSearch}) {
  const onSubmitHeader = (evt)=> {
evt.preventDefault()
const form = evt.target;
const request = form.elements.input.value;
if (request.trim() === "") {
  toast.error("Please, enter your request!");
  return;
}
onSearch(request.trim())
form.reset()
  }

  return <header className={css.header }>
    <form onSubmit={onSubmitHeader} className={css.form }>
      <input
        type="text"
        name="input"
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
      <Toaster />
    </form>
  </header>;
}
