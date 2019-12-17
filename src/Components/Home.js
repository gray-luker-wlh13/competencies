import React from 'react';

const Home = (props) => {
    console.log(props);
    return(
        <div>
            {props.match.isExact ? (
                <>
                    This is Home!!!
                    <button onClick={() => props.history.goBack()}>Go Back!</button>
                </>
            ) : (
                <>
                    This is not Home!!
                </>
            )}
        </div>
    )
}

export default Home;