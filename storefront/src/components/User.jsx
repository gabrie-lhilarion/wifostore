import React from 'react'

function User() {
    const currentUser = JSON.parse(localStorage.getItem('wifostore_user')) || []
    const showOverLay = () => {
        document.getElementById('overlay').classList.remove('hidden')
    }

    const showInitials = (user) => `${user.first_name[0]} ${user.last_name[0]}`

    return (Object.keys(currentUser).length === 0 ?
        <p
            onClick={showOverLay}
            className='bg-slate-200 m-2 p-2 cursor-pointer'>
            Guest
        </p> :
        <p
            className='bg-slate-200 m-2 p-2 cursor-pointer'>
            {showInitials(currentUser)}
        </p>
    )
}

export default User