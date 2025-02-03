import { useState } from 'react';
import './searchbar.scss';

const types = ["buy","rent"];

function SearchBar() {
    const [query,setQuery] = useState({
        type:"buy",
        location : "",
        minPrice :0,
        maxPrice :0,
    });
    const switchType = (type) => {
        setQuery((prev) => ({ ...prev, type }));
    };
    
    return (
        <div className="searchbar">
            <div className="type">
                
                   { types.map((type) =>(
                        <button key = {type} onClick={() => switchType(type)} className={query.type == type ? "active" : ""}>
                        {type}

                        </button>    
                                      
     )) }
      </div> 
                    
                
                
            <form>
                <input type="text" name="location" placeholder="City location" />
                <input type="number" name="minPrice" placeholder="Min Price" min={0} max={100000} />
                <input type="number" name="maxPrice" min={0} max={1000000} placeholder="Max Price" />
                <button>
                    <img src="/search.png" alt="" />
                </button>
            </form>
            
        </div>
    );
}

export default SearchBar;
