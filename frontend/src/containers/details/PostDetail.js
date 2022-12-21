import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { get_post_by_id } from '../../store/actions/post';
import { classSheet } from '../../styles/classSheet';

const PostDetail = ({get_post_by_id, post, current_user}) => {
    const {id} = useParams();
    const {con, flexCtr, row} = classSheet;
    useEffect(() => {if(id) get_post_by_id(id)}, []);
    if(post){
        const {author, image, body, date_created} = post;
        return (
            <div className={`${con} ${flexCtr} card shadow-sm`}>
                <div className={`${row} text-center`}>
                    <h1 className='card-header text-decoration-underline'>Posted By: {author}</h1>
                </div>
                {image ? <div className={`${row} text-center`}>
                    <img src={image} alt='' /> 
                </div>: null}
                <div className={`${row} text-center`}>
                    <p className=''>Posted By: {body}</p>
                </div>
                <div className={`${row} text-center`}>
                    <p className='fs-3'>Posted On: {date_created}</p>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    post: state.post.post
})

export default connect(mapStateToProps, {get_post_by_id})(PostDetail);