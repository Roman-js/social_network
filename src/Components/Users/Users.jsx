import React from "react";
import userPhoto from '../../assets/images/user.jpg'
import classes from './Users.module.css'
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../API/api";



const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    let minLimit = props.currentPage - 5;
    let maxLimit = props.currentPage + 5;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div>
            {pages.map(p => {
                return (
                    <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} className={props.currentPage === p && classes.selectedPage}>
                        {p > minLimit && p < maxLimit? p+' ': null}{p === pages.length? ' ... '+ p: null}
                </span>
                )
            })
            }
        </div>

        {
            props.users.map(u => <div key={u.id}>

                    <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>
                        </NavLink>
                    </div>

                  <div>  {u.followed ?
                      <button disabled={props.followingInProgress.some(id => id===u.id)}

                              onClick={() => {
                                  props.unfollow(u.id, `unfollow`)
                          // props.toggleIsFollowingProgress(true, u.id)
                          //         usersAPI.isUnfollow(u.id)
                          //     .then(data => {
                          //         //debugger;
                          //         if (data.resultCode === 0) {
                          //             props.acceptUnfollow(u.id)
                          //         }
                          //         props.toggleIsFollowingProgress(false, u.id)
                          //     });

                      }} >Follow</button> :
                      <button disabled={props.followingInProgress.some(id => id===u.id)}
                              onClick={() => {
                                  props.follow(u.id)
                          // props.toggleIsFollowingProgress(true, u.id)
                          //         usersAPI.isFollow(u.id)
                          //     .then(data => {
                          //         if (data.resultCode === 0) {
                          //             props.acceptFollow(u.id)
                          //         }
                          //         props.toggleIsFollowingProgress(false, u.id)
                          //     });

                      }} >Unfollow</button>}
                                </div>
                    </span>
                    <span>
                    <div>{u.name}</div>
                    <div>{u.status}</div>
                    </span>
                </div>
            )
        }
    </div>
}
export default Users;