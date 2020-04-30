import React from 'react';
import Pagination from '../common/Pagination/Pagination';
import User from './User';



const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged, users, ...props }) => {

    return <div>
        <Pagination
            currentPage={currentPage}
            totalUsersCount={totalUsersCount}
            pageSize={pageSize}
            onPageChanged={onPageChanged} />

        <div>
            {users.map(u => <User
                key={u.id}
                user={u}
                followingInProgress={props.followingInProgress}
                unfollow={props.unfollow}
                follow={props.follow} />)
            }
        </div>
    </div>
}
export default Users;