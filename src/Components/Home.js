import React from 'react';

const Home = (props) => {
    return(
        <div>
            This is Home!!!
            <button onClick={() => props.history.goBack()}>Go Back!</button>
        </div>
    )
}

export default Home;