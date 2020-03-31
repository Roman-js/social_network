import React from "react";
import {connect} from "react-redux";
import Users from "./Users";
import {
    acceptFollow, followThunkCreator, getUsersThunkCreator,
    toggleIsFollowingProgress,
    acceptUnfollow, unFollowThunkCreator
} from "../../Redux/users-reducer";
import Preloader from "../../common/Preloader";


class UsersComponent extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        //     if (this.props.users.length === 0) {
        //         this.props.toggleIsFetching(true)
        //
        //         usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        //
        //             .then(data => {
        //             this.props.toggleIsFetching(false)
        //             this.props.setUsers(data.items);
        //             this.props.setUsersCount(data.totalCount)
        //         })
        //     }
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
        //  this.props.setPage(pageNumber);
        //  this.props.toggleIsFetching(true)
        //  usersAPI.getUsers(pageNumber, this.props.pageSize)
        //      .then(data => {
        //      this.props.toggleIsFetching(false)
        //      this.props.setUsers(data.items)
        //  })
    }

    render() {
        //debugger
        return <div>
            {this.props.isFetching ? <Preloader/> : null}

            <Users
                onPageChanged={this.onPageChanged}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                unfollow={this.props.unFollowThunkCreator}
                follow={this.props.followThunkCreator}
            />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {

        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress,


    }
}
// let mapDispatchToProps = (dispatch) => {
//     return {
//         acceptFollow: (userId) => {
//             dispatch(followAC(userId))
//         },
//         acceptUnfollow: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setPage: (numberOfPage) => {
//             dispatch(setPageAC(numberOfPage))
//         },
//         setUsersCount: (numberOfUsersCount) => {
//             dispatch(setUsersCountAC(numberOfUsersCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }
const UserContainer = connect(mapStateToProps, {
    follow: acceptFollow, unfollow: acceptUnfollow,
    toggleIsFollowingProgress, getUsersThunkCreator, unFollowThunkCreator,
    followThunkCreator
})(UsersComponent)


export default UserContainer;