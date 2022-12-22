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
            <div className={`${con} ${flexCtr} w-100 card my-3 shadow-sm`}>
                <h1 className='card-header text-center text-decoration-underline'>Posted By: {author}</h1>
                {image ? <div className={`${row} text-center`}>
                    <img src={image} alt='' /> 
                </div>: null}
                <div className={`${row} text-center`}>
                    <p className=''>{body}</p>
                </div>
                <div className={`${row} text-center`}>
                    <p className='fs-3'>Posted On: {date_created}</p>
                </div>
                <div className={`${row} flex-inline text-center`}>
                    <div className='col col-md-5 col-sm-8 shadow-sm m-2 p-3'>
                        {current_user.id === author 
                            ? <button className='btn btn-warning' onClick={()=>setUpdateMode(true)}>Edit</button> 
                            : <button>like button</button>}
                    </div>
                    <div className='col col-md-5 col-sm-8 shadow-sm m-2 p-3'>
                        {current_user.id === author
                            ? <button className='btn btn-danger' onClick={e=>deletePost(e)}>Delete</button> 
                            : <button>dislike button</button>}
                    </div>
                    <div className='col col-md-5 col-sm-8 shadow-sm m-2 p-3'>
                        {current_user.id === author
                            ? <button className='btn btn-primary'>view likes</button> 
                            : commentMode ? <CommentForm post_id={id} setSubmitted={setCommentMode}/>
                            : <button className='btn btn-success m-2' onClick={()=>setCommentMode(true)}>comment</button>}
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