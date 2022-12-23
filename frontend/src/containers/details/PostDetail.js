import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_post_by_id } from '../../store/actions/post';
import { classSheet } from '../../styles/classSheet';
import PostForm from '../../components/forms/PostForm';
import CommentForm from '../../components/forms/CommentForm';

const PostDetail = ({get_post_by_id, post, current_user}) => {
    const {id} = useParams();
    const [updateMode, setUpdateMode] = useState(false)
    const [commentMode, setCommentMode] = useState(false)
    const {con, flexCtr, row} = classSheet;
    useEffect(() => {if(id) get_post_by_id(id)}, []);
    const deletePost = e => {
        e.preventDefault()
        if(window.confirm("Are you sure you want to delete this post? This action cannot be undone.")){
            // destroy_post(id)
        }
    }
    // console.log(post , "post")
    // console.log(id , "id")
    
    if(!updateMode && current_user.is_active && post){
        const {author, image, body, date_created} = post;
        // console.log(author, "auhtor")
        // console.log(body, "body")
        // console.log(image, "image")
        return (
            <div className={`${con} w-100 m-2`}>
                <div className={`${flexCtr} w-100 mt-3`}>
                    <div className='w-75 card m-3 shadow-sm text-center'>
                        <h1 className='card-header text-decoration-underline m-2 p-2'>Posted By: {author}</h1>
                        {image ? <img src={image} className='m-2 p-2' alt='' /> : null}
                        <p className='m-2 p-2'>{body}</p>    
                        <p className='fs-3 m-2 p-2'>Posted On: {date_created}</p>
                        <div className={`row text-center ${flexCtr}`}>
                            <div className={`col col-md-5 col-sm-8 shadow-sm m-2 p-3`}>
                                {current_user.id === author 
                                    ? <button className='btn btn-warning m-2' onClick={()=>setUpdateMode(true)}>Edit</button> 
                                    : <button className='btn btn-outline-primary m-2'><i class='far fa-thumbs-up'/></button>}
                            
                                {current_user.id === author
                                    ? <button className='btn btn-danger m-2' onClick={e=>deletePost(e)}>Delete</button> 
                                    : <button className='btn btn-outline-primary m-2'><i class='far fa-thumbs-down'/></button>}
                            
                                {current_user.id !== author && !commentMode
                                    ? <button className='btn btn-success m-2' onClick={()=>setCommentMode(true)}>comment</button>
                                    : <CommentForm post_id={id} setSubmitted={setCommentMode}/>}
                                {current_user.id === author 
                                    ? <button className='btn btn-success m-2'>viewlikes</button>
                                    : null}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }else if(updateMode && current_user && post){
        return(<PostForm update={post} />)
    }
}

const mapStateToProps = state => ({
    post: state.post.post,
    current_user: state.auth.current_user
})

export default connect(mapStateToProps, {get_post_by_id})(PostDetail);