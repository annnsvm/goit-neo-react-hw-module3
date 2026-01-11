import css from "./SearchBox.module.css";

const SearchBox = ({ value, callbackOnChange }) => {
  return (
    <div className={css.searchContainer}>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(evt) => callbackOnChange(evt.target.value)}
        className={css.searchBox}
      ></input>
    </div>
  );
};

export default SearchBox;
