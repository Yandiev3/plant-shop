import React from 'react'
import Header from '../layout/Header'
import './main.scss'

export default function Main() {
  return (
    <>
    <main>
    <section className='first'>
        <Header/>

        <div className="firtContainer">
            <div className="firtContent">
                <h1>Happiness blooms from within</h1>
                <p>Our environment, the world in which we live and work, is a mirror of our attitudes and expectations.</p>
                <div className="firstBtn">
                    <button>Shop now</button>
                    <button>Explore plants →</button>
                </div>
            </div>
            <div className="firstImage">
                <img src="./image/catry.png" alt="#"/>
            </div>
        </div>
    </section>
    </main>
    </>
  )
}
