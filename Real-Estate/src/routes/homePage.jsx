import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import SearchBar from '../components/navbar/searchbar/searchbar';
import './homePage.scss';

function Counter({ target }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTimestamp = null;

        function updateCounter(timestamp) {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            const duration = 1000; // 1 second

            if (progress < duration) {
                let newCount = Math.round((progress / duration) * target);
                setCount(newCount);
                requestAnimationFrame(updateCounter);
            } else {
                setCount(target);
            }
        }

        requestAnimationFrame(updateCounter);
    }, [target]);

    return <motion.h1 animate={{ opacity: [0, 1] }} transition={{ duration: 0.5 }}>{count}+</motion.h1>;
}

function HomePage() {
    return (
        <div className="homePage">
            <div className="textcontainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find the best real estate place at Ghar Dekho
                    </h1>

                    <SearchBar />

                    <div className="boxes">
                        <div className="box">
                            <Counter target={16} />
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <Counter target={200} />
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <Counter target={2000} />
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imagecontainer">    
                <img src="bg.png" alt="" />
            </div>
        </div>
    );
}
export default HomePage;