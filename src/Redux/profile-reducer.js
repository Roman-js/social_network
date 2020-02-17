const ADD_POST = 'ADD-POST'
const UPDATE_POST = 'UPDATE-POST'

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 4, message: state.newPostText, likes: 0};
            //let copyPosts = [...state.posts, newPost];
            state.posts.push(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_POST:
                state.newPostText = action.currentPost;
            return state;

        default: return state;
    }

}
export const addPostActionCreator = () =>({type: 'ADD-POST'})
export const updatePostActionCreator = (text) =>({type: 'UPDATE-POST', currentPost: text})

export  default  profileReducer;