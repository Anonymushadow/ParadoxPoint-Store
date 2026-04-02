import "./SearchBar.css";

export const SearchBar = ({ setSearch }) => {
    const handleInput = (e)=>{
        setSearch(e.target.value);
    }

    return (
        <div className="searchbar__container">
                <h2 className="searchbar__name">Fragmentos del punto de paradoja</h2>
            <div className="searchbar__content">
                <input className="searchbar" placeholder="Explorar la grieta" onChange={handleInput} />
                <div className="searchbar__img__container">
                    <img src="./images/categories/search-icon.png" alt="" className="searchbar__img" />
                </div>
            </div>
        </div>
    )
}