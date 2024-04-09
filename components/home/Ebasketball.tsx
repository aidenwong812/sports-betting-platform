import Link from 'next/link';
import React from 'react';

const Ebasketball = () => {
    return (
        <>
         <div className="match-table-head">
                                    <h2>
                                        eBasketball
                                    </h2>
                                    <Link href="details" className="tablebtn">
                                        More
                                    </Link>
                                </div>
                                <div className="table-wrap mb-40 pb-10">
                                    <div className="table-inner">
                                        <div className="table-head">
                                            <Link href="details" className="left-compo">
                                                <span>
                                                    <img src="/img/table/basketball.svg" alt="flag" />
                                                </span>
                                                <span>
                                                    Cyberbasketball, Esports Battle (4x8 min.)
                                                </span>
                                            </Link>
                                            <ul className="right-compo">
                                                <li>
                                                    Quarter 3 '18
                                                </li>
                                                <li>
                                                    Winner. Main time
                                                </li>
                                                <li>
                                                    Total. Quarter 3
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="table-body">
                                            <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                                <div className="ebasket-left">
                                                    <div className="items">
                                                        <Link href="details">
                                                            <span className="icon">
                                                                <img src="/img/table/cuber.png" alt="flag" />
                                                            </span>
                                                            <span>New York Knicks (cyber)</span>
                                                        </Link>
                                                    </div>
                                                    <div className="items">
                                                        <Link href="details">
                                                            <span className="icon">
                                                                <img src="/img/table/pistons.png" alt="plag" />
                                                            </span>
                                                            <span>Detroit Pistons (cyber)</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                                <div className="ebasket-right-content">
                                                    <Link href="#0"><span className="blods">43</span> Q1 Q2 Q3</Link>
                                                    <Link href="#0">22 16 5</Link>
                                                    <Link href="#0"><span className="blods">53</span> 17 30 6</Link>
                                                </div>
                                            </div>
                                            <div className="table-body-right">
                                                <Link href="#0" className="table-pointing-box">
                                                    <span className="list">1</span>
                                                    <span>12.00</span>
                                                </Link>
                                                <Link href="#0" className="table-pointing-box">
                                                    <span className="list">X</span>
                                                    <span>37.00</span>
                                                </Link>
                                                <Link href="#0" className="table-pointing-box">
                                                    <span className="list">O 41.5</span>
                                                    <span>1.02</span>
                                                </Link>
                                                <Link href="#0" className="table-pointing-box">
                                                    <span className="list">U 41.5</span>
                                                    <span>1.77</span>
                                                </Link>
                                                <Link href="https://www.youtube.com/watch?v=Qg6zu49kXSA" className="table-pointing-box video-btn">
                                                    <span className="basketman">
                                                        <img src="/img/table/basketman.png" alt="basketball" />
                                                    </span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="table-inner">
                                        <div className="table-head">
                                            <Link href="details" className="left-compo">
                                                <span>
                                                    <img src="/img/table/basketball.svg" alt="icon" />
                                                </span>
                                                <span>
                                                    Cyberbasketball, Esports Battle (4x8 min.)
                                                </span>
                                            </Link>
                                            <ul className="right-compo">
                                                <li>
                                                    1m
                                                </li>
                                                <li>
                                                    Winner. Half 1
                                                </li>
                                                <li>
                                                    Total. Quarter 2
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="table-body">
                                            <ul className="table-body-left">
                                                <li>
                                                    <Link href="details">
                                                        <span>Minnesota Timberwolves</span>
                                                        <span className="icon">
                                                            <img src="/img/table/minnersota.png" alt="flag" />
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#0" className="vs">
                                                        VS
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="details">
                                                        <span className="icon">
                                                            <img src="/img/table/jazz.png" alt="flag" />
                                                        </span>
                                                        <span>Utah Jazz (cyber)</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                            <div className="table-body-right">
                                                <Link href="#0" className="table-pointing-box">
                                                    <span className="list"><i className="fas fa-lock"></i></span>
                                                    <span>2.57</span>
                                                </Link>
                                                <Link href="#0" className="table-pointing-box">
                                                    <span className="list"><i className="fas fa-lock"></i></span>
                                                    <span>13.85</span>
                                                </Link>
                                                <Link href="#0" className="table-pointing-box">
                                                    <span className="list"><i className="fas fa-lock"></i></span>
                                                    <span>1.51</span>
                                                </Link>
                                                <Link href="#0" className="table-pointing-box">
                                                    <span className="list"><i className="fas fa-lock"></i></span>
                                                    <span>1.80</span>
                                                </Link>
                                                <Link href="#0" className="table-pointing-box">
                                                    <span className="list"><i className="fas fa-lock"></i></span>
                                                    <span>1.84</span>
                                                </Link>
                                                <Link href="#0" className="table-pointing-box">
                                                    <span className="last-digit">+30</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
        </>
    );
};

export default Ebasketball;