import React from 'react';
import classes from './Post.module.css';
import PropTypes from 'prop-types';


const Post = (props) => {



    return (

        <div>
            <div className={classes.avatar}>
                <div>
                    <div>
                        {props.avatar.avatar}
                        {props.message}
                    </div>

                    <div>
                        <span>like {props.likes}</span>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Post;

Post.propTypes = {
    Post: PropTypes.object
}