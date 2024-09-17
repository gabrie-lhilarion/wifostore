import React from 'react'

function User() {
    const showOverLay = () => {
        document.getElementById('overlay').classList.remove('hidden')
    }

    return (
        <p
            onClick={showOverLay}
            className='bg-slate-200 m-2 p-2 cursor-pointer'>
            Guest
        </p>
    )
}

export default User