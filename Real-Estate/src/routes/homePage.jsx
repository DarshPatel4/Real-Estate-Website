import SearchBar from '../components/navbar/searchbar/searchbar';
import  './homePage.scss';
function HomePage()
{
    return(
        <div className="homePage">
        <div className="textcontainer">
            <div className="wrapper">
                <h1 className="title">
                   Find the best real estate place at Ghar Dekho
                </h1>
           
           
                <p>
                </p>
                <SearchBar />
      
                <div className="boxes">
                    <div className="box">
                        <h1>16+</h1>
                        <h2>years of experience</h2>
                    </div>
                    <div className="box">
                        <h1>200</h1>
                        <h2>Award gained </h2>
                    </div>
                    <div className="box">
                        <h1>2000+</h1>
                        <h2>Property Ready </h2>
                    </div>
                </div>   
             
            </div>
        </div>
        <div className="imagecontainer">    <img src="bg.png" alt="" /></div>
    
        </div>
    )
}

export default HomePage;