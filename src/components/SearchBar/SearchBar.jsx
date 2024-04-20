

export default function SearchBar({onSearch}) {
  const onSubmitHeader = (evt)=> {
evt.preventDefault()
const form = evt.target;
const request = form.elements.input.value;
if (request.trim() === "") {
  "Please, enter your request!";
  return;
}
onSearch(request.trim())
form.reset()
  }

  return <header>
    <form onSubmit={onSubmitHeader}>
      <input
        type="text"
        name="input"
        placeholder="Search images and photos"
      />
      <button type="submit">Search</button>
    </form>
  </header>;
}
