import React from 'react';
import { Login, SignIn } from './index'

function Overlay() {

    const [visible, setVisible] = React.useState('signin')
    const switchCard = (card) => {
        setVisible(card)
    }

    return (
        <div id='overlay' className={`hidden flex flex-col top-0 left-0 fixed w-[100vw] h-[100vh] bg-slate-800 z-[100] bg-opacity-50`}>

            <div>
                {visible === 'signin' ? <SignIn toggle={switchCard} /> : <Login toggle={switchCard} />}

            </div>
        </div>
    );
}

export default Overlay;
