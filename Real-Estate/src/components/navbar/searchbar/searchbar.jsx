import { useState } from 'react';
import './searchbar.scss';

const types = ["buy",]

function SearchBar() {
    const [query,setQuery] = useState({
        type:"buy",
        location : "",
        minPrice :0,
        maxPrice :0,
    })
    const switchtype = () => {
        setQuery((prev) => ({...prev,type:val}));


    };
    return (
        <div className="searchbar">
            <div className="type">
                
                   { types.map((type) =>(
                        <button key = {type} onClick={() => switchtype("buy")}>
                        {type}

                        </button>
                          

     )) }
                    
                
                
            <form action="">
                <input type="text" name="location" placeholder="City location" />
                <input type="number" name="minPrice" placeholder="Min Price" />
                <input type="number" name="maxPrice" min={0} max={1000000} placeholder="Max Price" />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
            </div>  
        </div>
    );
}

export default SearchBar;
