import React from 'react'

const Home = () => {
    return(
        <div className='container'>
            <br/>
            <div className='card p-2 bg-light text-center'>
                <br />
                <h1 className='card-title'>Welcome to the Social Lif3</h1>
                <p className='text-muted'>The worlds chill center for social media.</p>
                <a href='/login' className='btn btn-secondary btn-sm'>Click Here</a>
                <br />
            </div>
        </div>
    )
}
export default Home