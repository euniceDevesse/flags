import './search.css'
import { IoIosSearch } from "react-icons/io";
export default function Search() {

    return(
        <div className="search-field">
                <IoIosSearch className='search-icon' />
                <input type="text" placeholder="Digite o nome de um pais" onChange={handleSearch} value={search} />
            </div>
    )
}