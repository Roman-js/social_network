import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setPageAC, setUsersAC, setUsersCountAC, unfollowAC} from "../../Redux/users-reducer";
import {number} from "prop-types";
import * as axios from "axios";



class UsersComponent extends  React.Component {

    componentDidMount() {
        if(this.props.users.length===0){

            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response=>{

                this.props.setUsers(response.data.items);
                this.props.setUsersCount(response.data.totalCount)
            })
        }
    }

    onPageChanged = (pageNumber) =>{
        this.props.setPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response=>{

            this.props.setUsers(response.data.items)
        })
    }

    render(){

        return <div>
            <Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users ={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
            />
        </div>
    }}



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (numberOfPage)=>{
            dispatch(setPageAC(numberOfPage))
        },
        setUsersCount: (numberOfUsersCount)=>{
            dispatch(setUsersCountAC(numberOfUsersCount))
        }
    }
}
const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UsersComponent)


export default UserContainer;