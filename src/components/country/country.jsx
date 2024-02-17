import './country.css'
import { IoIosSearch } from "react-icons/io";
import { useEffect } from "react";
import { useState } from "react";
import React from "react";
import api from "../../services/api";
export default function Country() {

    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");


    function request() {
        api.get("all").then((response) => {
            setData(response.data)
        })
    }

    useEffect(() => {
        api.get("all").then((response) => {
            setData(response.data)
        })
    }, [data])

    function handleSearch(event) {
        setSearch(event.target.value)
    }

    const searchData = data.filter((item) => {
        return item.name.common.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <div className='main-container'>
            <div className="search-field">
                <IoIosSearch className='search-icon' />
                <input type="text" placeholder="Digite o nome de um pais" onChange={handleSearch} value={search} />
            </div>
            <div className="container">
                {searchData.map((item) => (

                    <div key={item.id} className='flags card'>
                        <img src={item.flags.png} alt="imagem" />
                        <div className="info">
                            <h2>{item.name.common}</h2>
                            <p><b>Population: </b>{item.population}</p>
                            <p><b>Region: </b>{item.region}</p>
                            <p><b>Capital: </b>{item.capital}</p>
                        </div>
                    </div>
                )

                )}
            </div>
        </div>

    )
}     