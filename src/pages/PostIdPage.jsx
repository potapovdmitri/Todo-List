import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
    const navigate = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostsById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getByID(id);
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })

    useEffect( () => {
        fetchPostsById(navigate.id);
        fetchComments(navigate.id);
    }, []) 

    return (
        <div>
            <h1>You have navigated to post page ID = {navigate.id}</h1>
            {isLoading 
            ? <Loader/>
            : <div>{post.id}. {post.title}</div>
            }
            <h1>
                Comments
            </h1>
            {isComLoading
            ? <Loader/>
            : <div>
                {comments.map(comm => 
                    <div key={comm.id} style={{marginTop:"15px"}}>
                        <h5>{comm.email}</h5>
                        <div>{comm.body}</div>
                    </div>
                )}
            </div>
            }
        </div>
    );
};

export default PostIdPage;