import React from 'react';
import { useSelector } from 'react-redux';
//import {Link} from 'react-router-dom';

import './index.scss';


export const SinglePostPage = ({ match }) => {
    const { postId } = match.params;

    const post = useSelector((state) =>
        state.posts.find((post) => `${post.id}` === postId)
    )

    if (!post) (<h2>Post not found</h2>)

    return (
        <div>
            <p>
                <strong>Product ID: {post.id}</strong>
            </p>
            <img src={post.url} alt={post.id} />
            <p>
                <strong>Product price: {post.price} $</strong>
            </p>
        </div>
    )
}


