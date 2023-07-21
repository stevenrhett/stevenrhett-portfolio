import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './Root.module.css'


export default function ComingSoon() {
    const [count, setCount] = useState(0)


    return (

        <>
            <div className="coming-soon">
                <div className="coming-soon__logo">
                    <img src={reactLogo} alt="React logo"/>
                    <img src={viteLogo} alt="Vite logo"/>
                </div>
                <div className="coming-soon__text">
                    <h1>Coming Soon</h1>
                    <p>
                        <span>React</span> is a JavaScript library for building user interfaces.
                    </p>
                    <p>
                        <span>Vite</span> is an open source JavaScript framework for building web applications.
                    </p>
                </div>
                <div className="coming-soon__button">
                    <button onClick={() => setCount(count + 1)}>
                        {count}
                    </button>
                </div>
            </div>


        </>
    )
}
