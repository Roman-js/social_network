import React from "react";
import userPhoto from '../../assets/images/user.jpg'
import classes from './Users.module.css'


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
        return <div>
            <div>
                {pages.map(p => {
                    return <span onClick={(e) => {
                        props.onPageChanged(p)
                    }} class={props.currentPage === p && classes.selectedPage}>{p}</span>
                })
                }

            </div>

            {
                props.users.map(u => <div key={u.id}>

                    <span>
                    <div>   <img src={u.photos.small !== null ? u.photos.small : userPhoto}/>  </div>

                  <div>  {u.followed ?
                      <button onClick={() => {
                          props.unfollow(u.id)
                      }}>Follow</button> :
                      <button onClick={() => {
                          props.follow(u.id)
                      }}>Unfollow</button>}
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