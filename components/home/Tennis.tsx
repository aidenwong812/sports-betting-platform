import Link from 'next/link';
import React from 'react';

const Tennis = () => {
    return (
        <>
            <div className="match-table-head">
                <h2>
                    Tennis
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
                                <img src="/img/table/wta.png" alt="flag" />
                            </span>
                            <span>
                                WTA Tokyo
                            </span>
                        </Link>
                        <ul className="right-compo">
                            <li>
                                Set 1
                            </li>
                            <li>
                                Match Winner
                            </li>
                            <li>
                                Total
                            </li>
                        </ul>
                    </div>
                    <div className="table-body">
                        <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                            <div className="ebasket-left">
                                <div className="items">
                                    <Link href="details">
                                        <span className="icon">
                                            <img src="/img/table/solder.png" alt="flag" />
                                        </span>
                                        <span>Samsonova Ludmilla</span>
                                    </Link>
                                </div>
                                <div className="items">
                                    <Link href="details">
                                        <span className="icon">
                                            <img src="/img/table/king.png" alt="plag" />
                                        </span>
                                        <span>Wang Xinyu</span>
                                    </Link>
                                </div>
                            </div>
                            <div className="ebasket-right-content">
                                <Link href="#0"><span className="blods">0</span>  S1 GP</Link>
                                <Link href="#0">40</Link>
                                <Link href="#0"><span className="blods">0</span> 17 30 6</Link>
                            </div>
                        </div>
                        <div className="table-body-right">
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">1</span>
                                <span>1.17</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">2</span>
                                <span>4.39</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">O 22.5</span>
                                <span>1.80</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">U 22.5</span>
                                <span>1.91</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="batbinton">
                                    <img src="/img/table/batbintonplay.png" alt="basketball" />
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="table-inner">
                    <div className="table-head">
                        <Link href="details" className="left-compo">
                            <span>
                                <img src="/img/table/wta.png" alt="icon" />
                            </span>
                            <span>
                                WTA Tokyo
                            </span>
                        </Link>
                        <ul className="right-compo">
                            <li>
                                Live in: 16m
                            </li>
                            <li>
                                Match Winner
                            </li>
                            <li>
                                Total
                            </li>
                        </ul>
                    </div>
                    <div className="table-body">
                        <ul className="table-body-left">
                            <li>
                                <Link href="details">
                                    <span>Wickmayer Yanina</span>
                                    <span className="icon">
                                        <img src="/img/table/ninja.png" alt="flag" />
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
                                        <img src="/img/table/skill.png" alt="flag" />
                                    </span>
                                    <span>Raducanu Emma</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="table-body-right">
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">1</span>
                                <span>2.57</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">X</span>
                                <span>13.85</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">O 22.5</span>
                                <span>1.51</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">U 22.5</span>
                                <span>1.80</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="last-digit">+39</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="table-inner">
                    <div className="table-head">
                        <Link href="details" className="left-compo">
                            <span>
                                <img src="/img/table/wta.png" alt="icon" />
                            </span>
                            <span>
                                WTA Tokyo
                            </span>
                        </Link>
                        <ul className="right-compo">
                            <li>
                                Live in: 16m
                            </li>
                            <li>
                                Match Winner
                            </li>
                            <li>
                                Total
                            </li>
                        </ul>
                    </div>
                    <div className="table-body">
                        <ul className="table-body-left">
                            <li>
                                <Link href="details">
                                    <span>Kudermetova Veronika</span>
                                    <span className="icon">
                                        <img src="/img/table/teab.png" alt="flag" />
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
                                        <img src="/img/table/team2.png" alt="flag" />
                                    </span>
                                    <span>Conteras Gomez Fernanda</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="table-body-right">
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">1</span>
                                <span>08.77</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">X</span>
                                <span>23.85</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">O 22.5</span>
                                <span>4.51</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">U 22.5</span>
                                <span>1.01</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="last-digit">+40</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="table-inner">
                    <div className="table-head">
                        <Link href="details" className="left-compo">
                            <span>
                                <img src="/img/table/wta.png" alt="icon" />
                            </span>
                            <span>
                                WTA Tokyo
                            </span>
                        </Link>
                        <ul className="right-compo">
                            <li>
                                Live in: 16m
                            </li>
                            <li>
                                Match Winner
                            </li>
                            <li>
                                Total
                            </li>
                        </ul>
                    </div>
                    <div className="table-body">
                        <ul className="table-body-left">
                            <li>
                                <Link href="details">
                                    <span>Ostapenko Jelena</span>
                                    <span className="icon">
                                        <img src="/img/table/team3.png" alt="flag" />
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
                                        <img src="/img/table/team4.png" alt="flag" />
                                    </span>
                                    <span>Gasanova Anastasia</span>
                                </Link>
                            </li>
                        </ul>
                        <div className="table-body-right">
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">1</span>
                                <span>3.57</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">X</span>
                                <span>54.05</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">O 22.5</span>
                                <span>02.51</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="list">U 22.5</span>
                                <span>5.01</span>
                            </Link>
                            <Link href="#0" className="table-pointing-box">
                                <span className="last-digit">+58</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Tennis;