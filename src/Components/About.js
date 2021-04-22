import React from 'react'
import Pic from './Pic'
import Footer from './Footer'
import Appbar from './Navbar'
import './About.css'
export default function About() {
    return (
        <>
        <div>
        <Appbar />
        </div>
        <div>
        <Pic />
        </div>
        <div className="cl1">
        <b>What's TradingView?</b>
        </div>
        <div className="cl2">
        The world isn't an orderly place, it's a mess — markets are exactly the same.<br/> We'd like to help traders and investors navigate these currents of chaos,<br/> find the opportunities that lie within, and then leap on them.
        </div>
        <div className="cl3">
        <b>Home for all traders and investors</b>
        </div>
        <div className="cl4">
        We're here to provide you one thing and thing only: the best space to analyse<br/> markets.
        Use us to follow your favorite assets, find trading ideas.<br/>
        </div>
        <br/><br/>
        <div>
        <Footer />
        </div>
        </>
    )
}