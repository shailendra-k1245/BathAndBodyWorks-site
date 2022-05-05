import React from 'react'
import Footer from '../footer/Footer'
import MidFrag from './Midfrag'
import "./frag.scss"

export default function Soap() {
  return (
    <div className='fragMain'>
        <div className='fragHead'>
            <p><a href="google.com">HOME</a> / HAND SOAPS & SANITIZERS</p>
        </div>

        <MidFrag />
        <Footer />

    </div>
  )
}
