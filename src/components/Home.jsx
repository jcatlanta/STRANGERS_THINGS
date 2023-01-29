import React from 'react'
import Posts from './Posts'

const Home = () => {
    return (
        <div>
            <h1 style={{
                textAlign: 'center',
                color: 'black',
                fontSize: '30px',
                fontWeight: 'bold',
                textTransform: 'uppercase'
            }}>Welcome to Stranger's Things</h1>
            <Posts />
        </div>
    )
}

export default Home;
