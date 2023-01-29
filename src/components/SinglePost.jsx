import React from 'react';
import { Link } from 'react-router-dom';

export const SinglePost = () => {
    return (
        <div>
            <h1>Single Post</h1>

            <button>
                <Link to='/posts'>
                    Back to Post List
                </Link>
            </button>
        </div>
    )
};

export default SinglePost;
