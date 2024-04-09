import React from 'react';
import ProgressSlider from './ProgressSlider';
import Football from './Football';
import Efootball from './Efootball';
import VirtualSports from './VirtualSports';
import CounterStrike from './CounterStrike';
import Basketball from './Basketball';
import Ebasketball from './Ebasketball';
import Tennis from './Tennis';
import Dota from './Dota';
import LeagueofLegend from './LeagueofLegend';
import Icehocky from './Icehocky';
import Mma from './Mma';
import Link from 'next/link';

const Hometab = () => {
    const percentStyle = { "--percent": 28 } as React.CSSProperties;
    return (
        <div className="main-body-tabbing">
            <div className="container">
                <div className="main-tabbing">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link className="nav-link link-secondary active" id="all-tab" data-bs-toggle="tab" data-bs-target="#betsall" href="#"><span>All</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-secondary" id="combo-tab01" data-bs-toggle="tab" data-bs-target="#combo01" href="#"><span>Live</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-secondary" id="combo-tab02" data-bs-toggle="tab" data-bs-target="#combo02" href="#"><span>Today</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-secondary" id="combo-tab03" data-bs-toggle="tab" data-bs-target="#combo03" href="#"><span>Tomorrow</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-secondary" id="combo-tab04" data-bs-toggle="tab" data-bs-target="#combo04" href="#"><span>1h</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-secondary" id="combo-tab05" data-bs-toggle="tab" data-bs-target="#combo05" href="#"><span>3h</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-secondary" id="combo-tab06" data-bs-toggle="tab" data-bs-target="#combo06" href="#"><span>6h</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-secondary" id="combo-tab07" data-bs-toggle="tab" data-bs-target="#combo07" href="#"><span>12h</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-secondary" id="combo-tab08" data-bs-toggle="tab" data-bs-target="#combo08" href="#"><span>24h</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link link-secondary" id="combo-tab09" data-bs-toggle="tab" data-bs-target="#combo09" href="#"><span>Calender</span></Link>
                        </li>
                    </ul>
                    <div className="tab-content" id="tabContentmain">
                        {/* <!--all tab start--> */}
                        <div className="tab-pane fade show active" id="betsall" role="tabpanel">
                            {/* <!--progress slider--> */}
                           <ProgressSlider />


                            {/* <!--match table Start--> */}
                            <div className="match-table pt-60">
                                {/* <!--table one--> */}
                                <Football />
                                {/* <!--table two--> */}
                                <Efootball />
                                {/* <!--Virtual Sports--> */}

                                <VirtualSports />

                                {/* <!--table Three--> */}
                                <CounterStrike />
                                {/* <!--table four--> */}
                                <Basketball />
                                {/* <!--table five--> */}
                                <Ebasketball />
                                {/* <!--table six--> */}
                                <Tennis />
                                {/* <!--table seven--> */}
                                <Dota />
                                {/* <!--table eight--> */}
                                <LeagueofLegend />
                                {/* <!--table nine--> */}
                                <Icehocky />
                                {/* <!--table eight--> */}
                                <Mma />
                            </div>
                        </div>
                        {/* <!--all tab End--> */}

                        {/* <!--live tab start--> */}
                        <div className="tab-pane fade" id="combo01" role="tabpanel">
                            {/* <!--countries section--> */}
                            <div className="head-title mt-3 mb-4">
                                <h2>
                                    Countries
                                </h2>
                            </div>
                            <div className="countries-tab pb-60">
                                <div className="accordion" id="countries">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab1">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries1" aria-expanded="false" aria-controls="countries1">
                                                <span className="icon"><img src="/img/table/china.png" alt="china" /></span >
                                                <span>China</span>
                                            </button>
                                            <div id="countries1" className="accordion-collapse collapse" data-bs-parent="#countries">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span >
                                                        <span>WHL</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        1 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab2">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries2" aria-expanded="false" aria-controls="countries2">
                                                <span className="icon"><img src="/img/table/mexico.png" alt="china" /></span >
                                                <span>Mexico</span>
                                            </button>
                                            <div id="countries2" className="accordion-collapse collapse" data-bs-parent="#countries">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span >
                                                        <span>WHL</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        1 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab3">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries3" aria-expanded="false" aria-controls="countries3">
                                                <span className="icon"><img src="/img/table/canada.png" alt="china" /></span >
                                                <span>Canada</span>
                                            </button>
                                            <div id="countries3" className="accordion-collapse collapse" data-bs-parent="#countries">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span >
                                                        <span>WHL</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        1 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab4">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries4" aria-expanded="false" aria-controls="countries4">
                                                <span className="icon"><i className="icon-football"></i></span>
                                                <span> FIFA eSports </span>
                                            </button>
                                            <div id="countries4" className="accordion-collapse collapse" data-bs-parent="#countries">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span >
                                                        <span>WHL</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        1 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--progress slider--> */}

                           <ProgressSlider />


                            {/* <!--match table Start--> */}
                            <div className="match-table pt-60">
                                {/* <!--table one--> */}
                                <Football />
                                {/* <!--table two--> */}
                                <Efootball />
                                {/* <!--Virtual Sports--> */}
                                <VirtualSports />
                                {/* <!--table Three--> */}
                                <CounterStrike />
                                {/* <!--table four--> */}
                                <Basketball />
                                {/* <!--table five--> */}
                                <Ebasketball />
                                {/* <!--table six--> */}
                                <Tennis />
                                {/* <!--table seven--> */}
                                <Dota />
                                {/* <!--table eight--> */}
                                <LeagueofLegend />
                                {/* <!--table nine--> */}
                                <Icehocky />
                                {/* <!--table eight--> */}
                                <Mma />
                            </div>
                        </div>
                        {/* <!--live tab End--> */}

                        {/* <!--today tab start--> */}
                        <div className="tab-pane fade" id="combo02" role="tabpanel">
                            {/* <!--countries section--> */}
                            <div className="head-title mt-3 mb-4">
                                <h2>
                                    Top Leagues
                                </h2>
                            </div>
                            <div className="leauge-name d-flex align-items-center justify-content-between">
                                <Link href="#0" className="left-countries">
                                    <span><img src="/img/table/whl.png" alt="img" /></span>
                                    <span> Europe - UEFA Nations League </span>
                                </Link>
                                <Link href="#0">
                                    3 <i className="fas fa-angle-right"></i>
                                </Link>
                            </div>
                            <div className="head-title-two">
                                <h3>
                                    Countries
                                </h3>
                            </div>
                            <div className="countries-tab pb-60">
                                <div className="accordion" id="countriestoday">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab5">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries5" aria-expanded="false" aria-controls="countries5">
                                                <span className="icon"><img src="/img/table/algeria.png" alt="china" /></span>
                                                <span>Algeria</span>
                                            </button>
                                            <div id="countries5" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab6">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries6" aria-expanded="false" aria-controls="countries6">
                                                <span className="icon"><img src="/img/table/argentina.png" alt="china" /></span>
                                                <span> Argentina </span>
                                            </button>
                                            <div id="countries6" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab0077">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries0077" aria-expanded="false" aria-controls="countries0077">
                                                <span className="icon"><img src="/img/table/australia.png" alt="china" /></span>
                                                <span>Australia</span>
                                            </button>
                                            <div id="countries0077" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab8">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries8" aria-expanded="false" aria-controls="countries8">
                                                <span className="icon"><img src="/img/table/bahrain.png" alt="img" /></span>
                                                <span> Bahrain </span>
                                            </button>
                                            <div id="countries8" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab9">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries9" aria-expanded="false" aria-controls="countries9">
                                                <span className="icon"><img src="/img/table/austria.png" alt="img" /></span>
                                                <span>  Austria  </span>
                                            </button>
                                            <div id="countries9" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab10">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries10" aria-expanded="false" aria-controls="countries10">
                                                <span className="icon"><img src="/img/table/israel.png" alt="img" /></span>
                                                <span>  Israel   </span>
                                            </button>
                                            <div id="countries10" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab11">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries11" aria-expanded="false" aria-controls="countries11">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="img" /></span>
                                                <span>   Belgium    </span>
                                            </button>
                                            <div id="countries11" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab12">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries12" aria-expanded="false" aria-controls="countries12">
                                                <span className="icon"><img src="/img/table/bolivia.png" alt="img" /></span>
                                                <span>    Bolivia     </span>
                                            </button>
                                            <div id="countries12" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab13">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries13" aria-expanded="false" aria-controls="countries13">
                                                <span className="icon"><img src="/img/table/bosnia.png" alt="img" /></span>
                                                <span> Bosnia & Herzegovina </span>
                                            </button>
                                            <div id="countries13" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab14">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries14" aria-expanded="false" aria-controls="countries14">
                                                <span className="icon"><img src="/img/table/brazil.png" alt="img" /></span>
                                                <span> Brazil </span>
                                            </button>
                                            <div id="countries14" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab15">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries15" aria-expanded="false" aria-controls="countries15">
                                                <span className="icon"><img src="/img/table/burkina.png" alt="img" /></span>
                                                <span> Burkina Faso </span>
                                            </button>
                                            <div id="countries15" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab16">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries16" aria-expanded="false" aria-controls="countries16">
                                                <span className="icon"><img src="/img/table/japan.png" alt="img" /></span>
                                                <span> Japan </span>
                                            </button>
                                            <div id="countries16" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab17">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries17" aria-expanded="false" aria-controls="countries17">
                                                <span className="icon"><img src="/img/table/czech.png" alt="img" /></span>
                                                <span> Czech Republic </span>
                                            </button>
                                            <div id="countries17" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab18">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries18" aria-expanded="false" aria-controls="countries18">
                                                <span className="icon"><img src="/img/table/finland.png" alt="img" /></span>
                                                <span> Finland </span>
                                            </button>
                                            <div id="countries18" className="accordion-collapse collapse" data-bs-parent="#countriestoday">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--match table Start--> */}

                            <div className="match-table">
                                {/* <!--table one--> */}
                                <Football />
                                {/* <!--table two--> */}
                                <Efootball />
                                {/* <!--Virtual Sports--> */}
                               <VirtualSports />
                                {/* <!--table Three--> */}
                                <CounterStrike />
                                {/* <!--table four--> */}
                                <Basketball />
                                {/* <!--table five--> */}
                                <Ebasketball />
                            </div>
                        </div>
                        {/* <!--today tab End--> */}

                        {/* <!--tomorrow tab start--> */}
                        <div className="tab-pane fade" id="combo03" role="tabpanel">
                            {/* <!--countries section--> */}
                            <div className="head-title mt-3 mb-4">
                                <h2>
                                    Top Leagues
                                </h2>
                            </div>
                            <div className="leauge-name d-flex align-items-center justify-content-between">
                                <Link href="#0" className="left-countries">
                                    <span><img src="/img/table/whl.png" alt="img" /></span>
                                    <span> Europe - UEFA Nations League </span>
                                </Link>
                                <Link href="#0">
                                    10 <i className="fas fa-angle-right"></i>
                                </Link>
                            </div>
                            <div className="head-title-two">
                                <h3>
                                    Countries
                                </h3>
                            </div>
                            <div className="countries-tab">
                                <div className="accordion" id="countriestmorrow">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab19">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries19" aria-expanded="false" aria-controls="countries19">
                                                <span className="icon"><img src="/img/table/angola.png" alt="china" /></span>
                                                <span>Angola</span>
                                            </button>
                                            <div id="countries19" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab20">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries20" aria-expanded="false" aria-controls="countries20">
                                                <span className="icon"><img src="/img/table/argentina.png" alt="china" /></span>
                                                <span> Argentina </span>
                                            </button>
                                            <div id="countries20" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab077">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries077" aria-expanded="false" aria-controls="countries077">
                                                <span className="icon"><img src="/img/table/aruba.png" alt="china" /></span>
                                                <span>Aruba</span>
                                            </button>
                                            <div id="countries077" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab28">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries28" aria-expanded="false" aria-controls="countries28">
                                                <span className="icon"><img src="/img/table/brazil.png" alt="img" /></span>
                                                <span> Brazil </span>
                                            </button>
                                            <div id="countries28" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab22">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries22" aria-expanded="false" aria-controls="countries22">
                                                <span className="icon"><img src="/img/table/wurope.png" alt="img" /></span>
                                                <span> Europe </span>
                                            </button>
                                            <div id="countries22" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab30">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries30" aria-expanded="false" aria-controls="countries30">
                                                <span className="icon"><img src="/img/table/japan.png" alt="img" /></span>
                                                <span> Japan </span>
                                            </button>
                                            <div id="countries30" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab23">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries23" aria-expanded="false" aria-controls="countries23">
                                                <span className="icon"><img src="/img/table/austria.png" alt="img" /></span>
                                                <span>  Austria  </span>
                                            </button>
                                            <div id="countries23" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab27">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries27" aria-expanded="false" aria-controls="countries27">
                                                <span className="icon"><img src="/img/table/bosnia.png" alt="img" /></span>
                                                <span> Bosnia & Herzegovina </span>
                                            </button>
                                            <div id="countries27" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab26">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries26" aria-expanded="false" aria-controls="countries26">
                                                <span className="icon"><img src="/img/table/bolivia.png" alt="img" /></span>
                                                <span>    Bolivia     </span>
                                            </button>
                                            <div id="countries26" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab24">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries24" aria-expanded="false" aria-controls="countries24">
                                                <span className="icon"><img src="/img/table/israel.png" alt="img" /></span>
                                                <span>  Israel   </span>
                                            </button>
                                            <div id="countries24" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab32">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries32" aria-expanded="false" aria-controls="countries32">
                                                <span className="icon"><img src="/img/table/finland.png" alt="img" /></span>
                                                <span> Finland </span>
                                            </button>
                                            <div id="countries32" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab31">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries31" aria-expanded="false" aria-controls="countries31">
                                                <span className="icon"><img src="/img/table/czech.png" alt="img" /></span>
                                                <span> Czech Republic </span>
                                            </button>
                                            <div id="countries31" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab25">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries25" aria-expanded="false" aria-controls="countries25">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="img" /></span>
                                                <span>   Belgium    </span>
                                            </button>
                                            <div id="countries25" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab29">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries29" aria-expanded="false" aria-controls="countries29">
                                                <span className="icon"><img src="/img/table/burkina.png" alt="img" /></span>
                                                <span> Burkina Faso </span>
                                            </button>
                                            <div id="countries29" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab33">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries33" aria-expanded="false" aria-controls="countries33">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="img" /></span>
                                                <span>Paraguay</span>
                                            </button>
                                            <div id="countries33" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab34">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries34" aria-expanded="false" aria-controls="countries34">
                                                <span className="icon"><img src="/img/table/panama.png" alt="img" /></span>
                                                <span> Panama </span>
                                            </button>
                                            <div id="countries34" className="accordion-collapse collapse" data-bs-parent="#countriestmorrow">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--match table Start--> */}

                            <div className="match-table pt-60">
                                {/* <!--table one--> */}
                                <Football />
                                {/* <!--table two--> */}
                               <Efootball />
                                {/* <!--Virtual Sports--> */}
                                <VirtualSports />
                                {/* <!--table Three--> */}
                                <CounterStrike />
                                {/* <!--table five--> */}
                                <Ebasketball />
                            </div>
                        </div>
                        {/* <!--tomorrow tab End--> */}

                        {/* <!--1h tab start--> */}
                        <div className="tab-pane fade" id="combo04" role="tabpanel">
                            {/* <!--countries section--> */}
                            <div className="head-title mt-3 mb-4">
                                <h2>
                                    Countries
                                </h2>
                            </div>
                            <div className="countries-tab">
                                <div className="accordion" id="countries1h">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab40">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries40" aria-expanded="false" aria-controls="countries40">
                                                <span className="icon"><img src="/img/table/japan.png" alt="china" /></span>
                                                <span>Japan</span>
                                            </button>
                                            <div id="countries40" className="accordion-collapse collapse" data-bs-parent="#countries1h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab39">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries39" aria-expanded="false" aria-controls="countries39">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span> Paraguay </span>
                                            </button>
                                            <div id="countries39" className="accordion-collapse collapse" data-bs-parent="#countries1h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab41">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries41" aria-expanded="false" aria-controls="countries41">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span>Belgium</span>
                                            </button>
                                            <div id="countries41" className="accordion-collapse collapse" data-bs-parent="#countries1h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab42">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries42" aria-expanded="false" aria-controls="countries42">
                                                <span className="icon"><img src="/img/table/panama.png" alt="img" /></span>
                                                <span> Panama </span>
                                            </button>
                                            <div id="countries42" className="accordion-collapse collapse" data-bs-parent="#countries1h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--match table Start--> */}

                            <div className="match-table pt-60">
                                {/* <!--table one--> */}
                                <Football />
                                {/* <!--table two--> */}
                               <Efootball />
                                {/* <!--Virtual Sports--> */}
                                <VirtualSports />
                                {/* <!--table Three--> */}
                                <CounterStrike />
                                {/* <!--table five--> */}
                                <Ebasketball />
                            </div>
                        </div>
                        {/* <!--1h tab End--> */}

                        {/* <!--3h tab start--> */}
                        <div className="tab-pane fade" id="combo05" role="tabpanel">
                            {/* <!--countries section--> */}
                            <div className="head-title mt-3 mb-4">
                                <h2>
                                    Countries
                                </h2>
                            </div>
                            <div className="countries-tab">
                                <div className="accordion" id="countries3h">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab50">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries45" aria-expanded="false" aria-controls="countries45">
                                                <span className="icon"><img src="/img/table/algeria.png" alt="china" /></span>
                                                <span>Algeria</span>
                                            </button>
                                            <div id="countries45" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab51">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries46" aria-expanded="false" aria-controls="countries46">
                                                <span className="icon"><img src="/img/table/australia.png" alt="china" /></span>
                                                <span>  Australia  </span>
                                            </button>
                                            <div id="countries46" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab52">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries47" aria-expanded="false" aria-controls="countries47">
                                                <span className="icon"><img src="/img/table/china.png" alt="china" /></span>
                                                <span>China</span>
                                            </button>
                                            <div id="countries47" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab53">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries48" aria-expanded="false" aria-controls="countries48">
                                                <span className="icon"><img src="/img/table/india.png" alt="img" /></span>
                                                <span> India </span>
                                            </button>
                                            <div id="countries48" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab54">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries54" aria-expanded="false" aria-controls="countries54">
                                                <span className="icon"><img src="/img/table/czech.png" alt="img" /></span>
                                                <span> Czech Republic </span>
                                            </button>
                                            <div id="countries54" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab55">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries55" aria-expanded="false" aria-controls="countries55">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="img" /></span>
                                                <span> Belgium </span>
                                            </button>
                                            <div id="countries55" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab56">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries56" aria-expanded="false" aria-controls="countries56">
                                                <span className="icon"><img src="/img/table/wurope.png" alt="img" /></span>
                                                <span> Europe </span>
                                            </button>
                                            <div id="countries56" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab57">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries57" aria-expanded="false" aria-controls="countries57">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="img" /></span>
                                                <span> Paraguay</span>
                                            </button>
                                            <div id="countries57" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab58">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries58" aria-expanded="false" aria-controls="countries58">
                                                <span className="icon"><img src="/img/table/panama.png" alt="img" /></span>
                                                <span> Panama</span>
                                            </button>
                                            <div id="countries58" className="accordion-collapse collapse" data-bs-parent="#countries3h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--match table Start--> */}

                            <div className="match-table pt-60">
                                {/* <!--table one--> */}
                                <Football />
                                {/* <!--table two--> */}
                               <Efootball />
                                {/* <!--Virtual Sports--> */}
                                <VirtualSports />
                                {/* <!--table Three--> */}
                                <CounterStrike />
                                {/* <!--table five--> */}
                                <Ebasketball />
                            </div>
                        </div>
                        {/* <!--3h tab End--> */}

                        {/* <!--6h tab start--> */}
                        <div className="tab-pane fade" id="combo06" role="tabpanel">
                            {/* <!--countries section--> */}
                            <div className="head-title mt-3 mb-4">
                                <h2>
                                    Countries
                                </h2>
                            </div>
                            <div className="countries-tab">
                                <div className="accordion" id="countries6h">
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab61">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries61" aria-expanded="false" aria-controls="countries61">
                                                <span className="icon"><img src="/img/table/aruba.png" alt="china" /></span>
                                                <span>Aruba</span>
                                            </button>
                                            <div id="countries61" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab62">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries62" aria-expanded="false" aria-controls="countries62">
                                                <span className="icon"><img src="/img/table/china.png" alt="china" /></span>
                                                <span>China</span>
                                            </button>
                                            <div id="countries62" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab63">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries63" aria-expanded="false" aria-controls="countries63">
                                                <span className="icon"><img src="/img/table/japan.png" alt="china" /></span>
                                                <span>Japan</span>
                                            </button>
                                            <div id="countries63" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab64">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries64" aria-expanded="false" aria-controls="countries64">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span>Belgium</span>
                                            </button>
                                            <div id="countries64" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab65">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries65" aria-expanded="false" aria-controls="countries65">
                                                <span className="icon"><img src="/img/table/angola.png" alt="china" /></span>
                                                <span>Angola</span>
                                            </button>
                                            <div id="countries65" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab66">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries66" aria-expanded="false" aria-controls="countries66">
                                                <span className="icon"><img src="/img/table/panama.png" alt="china" /></span>
                                                <span>Panama</span>
                                            </button>
                                            <div id="countries66" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab67">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries67" aria-expanded="false" aria-controls="countries67">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span>Paraguay</span>
                                            </button>
                                            <div id="countries67" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab68">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries68" aria-expanded="false" aria-controls="countries68">
                                                <span className="icon"><img src="/img/table/australia.png" alt="china" /></span>
                                                <span>Australia</span>
                                            </button>
                                            <div id="countries68" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab71">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries71" aria-expanded="false" aria-controls="countries71">
                                                <span className="icon"><img src="/img/table/wurope.png" alt="china" /></span>
                                                <span>Europe</span>
                                            </button>
                                            <div id="countries71" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab73">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries73" aria-expanded="false" aria-controls="countries73">
                                                <span className="icon"><img src="/img/table/czech.png" alt="china" /></span>
                                                <span>Czech Republic</span>
                                            </button>
                                            <div id="countries73" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab74">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries74" aria-expanded="false" aria-controls="countries74">
                                                <span className="icon"><img src="/img/table/india.png" alt="china" /></span>
                                                <span>India</span>
                                            </button>
                                            <div id="countries74" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab75">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries75" aria-expanded="false" aria-controls="countries75">
                                                <span className="icon"><img src="/img/table/brazil.png" alt="china" /></span>
                                                <span>Brazil</span>
                                            </button>
                                            <div id="countries75" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab76">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries76" aria-expanded="false" aria-controls="countries76">
                                                <span className="icon"><img src="/img/table/austria.png" alt="china" /></span>
                                                <span>Austria</span>
                                            </button>
                                            <div id="countries76" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab77">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries77s" aria-expanded="false" aria-controls="countries77s">
                                                <span className="icon"><img src="/img/table/algeria.png" alt="china" /></span>
                                                <span>Algeria</span>
                                            </button>
                                            <div id="countries77s" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab78">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries78" aria-expanded="false" aria-controls="countries78">
                                                <span className="icon"><img src="/img/table/bosnia.png" alt="china" /></span>
                                                <span>Bosina & Herzegovina</span>
                                            </button>
                                            <div id="countries78" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab79">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries79" aria-expanded="false" aria-controls="countries79">
                                                <span className="icon"><img src="/img/table/argentina.png" alt="china" /></span>
                                                <span>Argentina</span>
                                            </button>
                                            <div id="countries79" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab80">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries80" aria-expanded="false" aria-controls="countries80">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span>Paraguay</span>
                                            </button>
                                            <div id="countries80" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab81">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries81" aria-expanded="false" aria-controls="countries81">
                                                <span className="icon"><img src="/img/table/israel.png" alt="china" /></span>
                                                <span>Israel</span>
                                            </button>
                                            <div id="countries81" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab82">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries82" aria-expanded="false" aria-controls="countries82">
                                                <span className="icon"><img src="/img/table/panama.png" alt="china" /></span>
                                                <span>Panama</span>
                                            </button>
                                            <div id="countries82" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab83">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries83" aria-expanded="false" aria-controls="countries83">
                                                <span className="icon"><img src="/img/table/finland.png" alt="china" /></span>
                                                <span>Finland</span>
                                            </button>
                                            <div id="countries83" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab84">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries84" aria-expanded="false" aria-controls="countries84">
                                                <span className="icon"><img src="/img/table/czech.png" alt="china" /></span>
                                                <span>Czech Republic</span>
                                            </button>
                                            <div id="countries84" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab85">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries85" aria-expanded="false" aria-controls="countries85">
                                                <span className="icon"><img src="/img/table/bolivia.png" alt="china" /></span>
                                                <span>Bolivia</span>
                                            </button>
                                            <div id="countries85" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab86">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries86" aria-expanded="false" aria-controls="countries86">
                                                <span className="icon"><img src="/img/table/burkina.png" alt="china" /></span>
                                                <span>Burkina Faso</span>
                                            </button>
                                            <div id="countries86" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header" id="countriestab87">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#countries87" aria-expanded="false" aria-controls="countries87">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span>Belgium</span>
                                            </button>
                                            <div id="countries87" className="accordion-collapse collapse" data-bs-parent="#countries6h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe-UEFA Nations</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        3 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!--match table Start--> */}

                            <div className="match-table pt-60">
                                {/* <!--table one--> */}
                                <Football />
                                {/* <!--table two--> */}
                                <Efootball />
                                {/* // <!--Virtual Sports--> */}
                                <VirtualSports />
                                {/* // <!--table Three--> */}
                                <CounterStrike />
                                {/* // <!--table five--> */}
                                <Ebasketball />
                            </div>
                        </div>
                        {/* // <!--6h tab End--> */}

                        {/* // <!--12h tab start--> */}
                        <div className="tab-pane fade" id="combo07" role="tabpanel">
                            {/* // <!--countries section--> */}
                            <div className="head-title mt-3 mb-4">
                                <h2>
                                    Top Leagues
                                </h2>
                            </div>
                            <div className="leauge-name d-flex align-items-center justify-content-between">
                                <Link href="#0" className="left-countries">
                                    <span><img src="/img/table/whl.png" alt="img" /></span>
                                    <span> Europe - UEFA Nations League </span>
                                </Link>
                                <Link href="#0">
                                    9 <i className="fas fa-angle-right"></i>
                                </Link>
                            </div>
                            <div className="head-title-two">
                                <h3>
                                    Countries
                                </h3>
                            </div>
                            <div className="countries-tab pb-60">
                                <div className="accordion" id="countries12h">
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta" aria-expanded="false" aria-controls="s12ghonta">
                                                <span className="icon"><img src="/img/table/bosnia.png" alt="china" /></span>
                                                <span> Bosnia & Herzegovina </span>
                                            </button>
                                            <div id="s12ghonta" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta2" aria-expanded="false" aria-controls="s12ghonta2">
                                                <span className="icon"><img src="/img/table/china.png" alt="china" /></span>
                                                <span>China</span>
                                            </button>
                                            <div id="s12ghonta2" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta3" aria-expanded="false" aria-controls="s12ghonta3">
                                                <span className="icon"><img src="/img/table/japan.png" alt="china" /></span>
                                                <span>Japan</span>
                                            </button>
                                            <div id="s12ghonta3" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta04" aria-expanded="false" aria-controls="s12ghonta04">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span>Paraguay</span>
                                            </button>
                                            <div id="s12ghonta04" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta4" aria-expanded="false" aria-controls="s12ghonta4">
                                                <span className="icon"><img src="/img/table/bolivia.png" alt="china" /></span>
                                                <span>Bolivia</span>
                                            </button>
                                            <div id="s12ghonta4" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta5" aria-expanded="false" aria-controls="s12ghonta5">
                                                <span className="icon"><img src="/img/table/panama.png" alt="china" /></span>
                                                <span>Panama</span>
                                            </button>
                                            <div id="s12ghonta5" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta7" aria-expanded="false" aria-controls="s12ghonta7">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span>Belgium</span>
                                            </button>
                                            <div id="s12ghonta7" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta8" aria-expanded="false" aria-controls="s12ghonta8">
                                                <span className="icon"><img src="/img/table/angola.png" alt="china" /></span>
                                                <span>Angola</span>
                                            </button>
                                            <div id="s12ghonta8" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta9" aria-expanded="false" aria-controls="s12ghonta9">
                                                <span className="icon"><img src="/img/table/panama.png" alt="china" /></span>
                                                <span>Panama</span>
                                            </button>
                                            <div id="s12ghonta9" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta10" aria-expanded="false" aria-controls="s12ghonta10">
                                                <span className="icon"><img src="/img/table/australia.png" alt="china" /></span>
                                                <span> Australia </span>
                                            </button>
                                            <div id="s12ghonta10" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta11" aria-expanded="false" aria-controls="s12ghonta11">
                                                <span className="icon"><img src="/img/table/israel.png" alt="china" /></span>
                                                <span> Israel </span>
                                            </button>
                                            <div id="s12ghonta11" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta12" aria-expanded="false" aria-controls="s12ghonta12">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span> Paraguay </span>
                                            </button>
                                            <div id="s12ghonta12" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta13" aria-expanded="false" aria-controls="s12ghonta13">
                                                <span className="icon"><img src="/img/table/wurope.png" alt="china" /></span>
                                                <span> Europe </span>
                                            </button>
                                            <div id="s12ghonta13" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta14" aria-expanded="false" aria-controls="s12ghonta14">
                                                <span className="icon"><img src="/img/table/argentina.png" alt="china" /></span>
                                                <span> Argentina </span>
                                            </button>
                                            <div id="s12ghonta14" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta15" aria-expanded="false" aria-controls="s12ghonta15">
                                                <span className="icon"><img src="/img/table/czech.png" alt="china" /></span>
                                                <span> Czech Republic </span>
                                            </button>
                                            <div id="s12ghonta15" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta16" aria-expanded="false" aria-controls="s12ghonta16">
                                                <span className="icon"><img src="/img/table/india.png" alt="china" /></span>
                                                <span> India </span>
                                            </button>
                                            <div id="s12ghonta16" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta17" aria-expanded="false" aria-controls="s12ghonta17">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span> Paraguay </span>
                                            </button>
                                            <div id="s12ghonta17" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta18" aria-expanded="false" aria-controls="s12ghonta18">
                                                <span className="icon"><img src="/img/table/brazil.png" alt="china" /></span>
                                                <span> Brazil </span>
                                            </button>
                                            <div id="s12ghonta18" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta19" aria-expanded="false" aria-controls="s12ghonta19">
                                                <span className="icon"><img src="/img/table/wurope.png" alt="china" /></span>
                                                <span> Europe </span>
                                            </button>
                                            <div id="s12ghonta19" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta20" aria-expanded="false" aria-controls="s12ghonta20">
                                                <span className="icon"><img src="/img/table/austria.png" alt="china" /></span>
                                                <span> Austria </span>
                                            </button>
                                            <div id="s12ghonta20" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta21" aria-expanded="false" aria-controls="s12ghonta21">
                                                <span className="icon"><img src="/img/table/algeria.png" alt="china" /></span>
                                                <span> Algeria </span>
                                            </button>
                                            <div id="s12ghonta21" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta22" aria-expanded="false" aria-controls="s12ghonta22">
                                                <span className="icon"><img src="/img/table/aruba.png" alt="china" /></span>
                                                <span> Aruba </span>
                                            </button>
                                            <div id="s12ghonta22" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta23" aria-expanded="false" aria-controls="s12ghonta23">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span> Belgium </span>
                                            </button>
                                            <div id="s12ghonta23" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta24" aria-expanded="false" aria-controls="s12ghonta24">
                                                <span className="icon"><img src="/img/table/panama.png" alt="china" /></span>
                                                <span> Panama </span>
                                            </button>
                                            <div id="s12ghonta24" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta25" aria-expanded="false" aria-controls="s12ghonta25">
                                                <span className="icon"><img src="/img/table/finland.png" alt="china" /></span>
                                                <span> Finland </span>
                                            </button>
                                            <div id="s12ghonta25" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta26" aria-expanded="false" aria-controls="s12ghonta26">
                                                <span className="icon"><img src="/img/table/czech.png" alt="china" /></span>
                                                <span> Czech Republic </span>
                                            </button>
                                            <div id="s12ghonta26" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta27" aria-expanded="false" aria-controls="s12ghonta27">
                                                <span className="icon"><img src="/img/table/burkina.png" alt="china" /></span>
                                                <span> Burkina Faso </span>
                                            </button>
                                            <div id="s12ghonta27" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta28" aria-expanded="false" aria-controls="s12ghonta28">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span> Belgium </span>
                                            </button>
                                            <div id="s12ghonta28" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#s12ghonta29" aria-expanded="false" aria-controls="s12ghonta29">
                                                <span className="icon"><img src="/img/table/japan.png" alt="china" /></span>
                                                <span> Japan </span>
                                            </button>
                                            <div id="s12ghonta29" className="accordion-collapse collapse" data-bs-parent="#countries12h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // <!--match table Start--> */}

                            <div className="match-table">
                                {/* // <!--Virtual Sports--> */}
                                <VirtualSports />
                                {/* // <!--table Three--> */}
                               <CounterStrike />
                                {/* // <!--table five--> */}
                               <Ebasketball />
                            </div>
                        </div>
                        {/* // <!--12h tab End--> */}

                        {/* // <!--24h tab start--> */}
                        <div className="tab-pane fade" id="combo08" role="tabpanel">
                            {/* // <!--countries section--> */}
                            <div className="head-title mt-3 mb-4">
                                <h2>
                                    Top Leagues
                                </h2>
                            </div>
                            <div className="leauge-name d-flex align-items-center justify-content-between">
                                <Link href="#0" className="left-countries">
                                    <span><img src="/img/table/whl.png" alt="img" /></span>
                                    <span> Europe - UEFA Nations League </span>
                                </Link>
                                <Link href="#0">
                                    3 <i className="fas fa-angle-right"></i>
                                </Link>
                            </div>
                            <div className="head-title-two">
                                <h3>
                                    Countries
                                </h3>
                            </div>
                            <div className="countries-tab pb-60">
                                <div className="accordion" id="countries24h">
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta" aria-expanded="false" aria-controls="v12ghonta">
                                                <span className="icon"><img src="/img/table/bosnia.png" alt="china" /></span>
                                                <span> Bosnia & Herzegovina </span>
                                            </button>
                                            <div id="v12ghonta" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta2" aria-expanded="false" aria-controls="v12ghonta2">
                                                <span className="icon"><img src="/img/table/china.png" alt="china" /></span>
                                                <span>China</span>
                                            </button>
                                            <div id="v12ghonta2" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta3" aria-expanded="false" aria-controls="v12ghonta3">
                                                <span className="icon"><img src="/img/table/japan.png" alt="china" /></span>
                                                <span>Japan</span>
                                            </button>
                                            <div id="v12ghonta3" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta4tahir" aria-expanded="false" aria-controls="v12ghonta4tahir">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span>Paraguay</span>
                                            </button>
                                            <div id="v12ghonta4tahir" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta4" aria-expanded="false" aria-controls="v12ghonta4">
                                                <span className="icon"><img src="/img/table/bolivia.png" alt="china" /></span>
                                                <span>Bolivia</span>
                                            </button>
                                            <div id="v12ghonta4" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta5" aria-expanded="false" aria-controls="v12ghonta5">
                                                <span className="icon"><img src="/img/table/panama.png" alt="china" /></span>
                                                <span>Panama</span>
                                            </button>
                                            <div id="v12ghonta5" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta7" aria-expanded="false" aria-controls="v12ghonta7">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span>Belgium</span>
                                            </button>
                                            <div id="v12ghonta7" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta8" aria-expanded="false" aria-controls="v12ghonta8">
                                                <span className="icon"><img src="/img/table/angola.png" alt="china" /></span>
                                                <span>Angola</span>
                                            </button>
                                            <div id="v12ghonta8" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta9" aria-expanded="false" aria-controls="v12ghonta9">
                                                <span className="icon"><img src="/img/table/panama.png" alt="china" /></span>
                                                <span>Panama</span>
                                            </button>
                                            <div id="v12ghonta9" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta10" aria-expanded="false" aria-controls="v12ghonta10">
                                                <span className="icon"><img src="/img/table/australia.png" alt="china" /></span>
                                                <span> Australia </span>
                                            </button>
                                            <div id="v12ghonta10" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta11" aria-expanded="false" aria-controls="v12ghonta11">
                                                <span className="icon"><img src="/img/table/israel.png" alt="china" /></span>
                                                <span> Israel </span>
                                            </button>
                                            <div id="v12ghonta11" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta12" aria-expanded="false" aria-controls="v12ghonta12">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span> Paraguay </span>
                                            </button>
                                            <div id="v12ghonta12" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta13" aria-expanded="false" aria-controls="v12ghonta13">
                                                <span className="icon"><img src="/img/table/wurope.png" alt="china" /></span>
                                                <span> Europe </span>
                                            </button>
                                            <div id="v12ghonta13" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta14" aria-expanded="false" aria-controls="v12ghonta14">
                                                <span className="icon"><img src="/img/table/argentina.png" alt="china" /></span>
                                                <span> Argentina </span>
                                            </button>
                                            <div id="v12ghonta14" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta15" aria-expanded="false" aria-controls="v12ghonta15">
                                                <span className="icon"><img src="/img/table/czech.png" alt="china" /></span>
                                                <span> Czech Republic </span>
                                            </button>
                                            <div id="v12ghonta15" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta16" aria-expanded="false" aria-controls="v12ghonta16">
                                                <span className="icon"><img src="/img/table/india.png" alt="china" /></span>
                                                <span> India </span>
                                            </button>
                                            <div id="v12ghonta16" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta17" aria-expanded="false" aria-controls="v12ghonta17">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span> Paraguay </span>
                                            </button>
                                            <div id="v12ghonta17" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta18" aria-expanded="false" aria-controls="v12ghonta18">
                                                <span className="icon"><img src="/img/table/brazil.png" alt="china" /></span>
                                                <span> Brazil </span>
                                            </button>
                                            <div id="v12ghonta18" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta19" aria-expanded="false" aria-controls="v12ghonta19">
                                                <span className="icon"><img src="/img/table/wurope.png" alt="china" /></span>
                                                <span> Europe </span>
                                            </button>
                                            <div id="v12ghonta19" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta20" aria-expanded="false" aria-controls="v12ghonta20">
                                                <span className="icon"><img src="/img/table/austria.png" alt="china" /></span>
                                                <span> Austria </span>
                                            </button>
                                            <div id="v12ghonta20" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta21" aria-expanded="false" aria-controls="v12ghonta21">
                                                <span className="icon"><img src="/img/table/algeria.png" alt="china" /></span>
                                                <span> Algeria </span>
                                            </button>
                                            <div id="v12ghonta21" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta22" aria-expanded="false" aria-controls="v12ghonta22">
                                                <span className="icon"><img src="/img/table/aruba.png" alt="china" /></span>
                                                <span> Aruba </span>
                                            </button>
                                            <div id="v12ghonta22" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta23" aria-expanded="false" aria-controls="v12ghonta23">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span> Belgium </span>
                                            </button>
                                            <div id="v12ghonta23" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta24" aria-expanded="false" aria-controls="v12ghonta24">
                                                <span className="icon"><img src="/img/table/panama.png" alt="china" /></span>
                                                <span> Panama </span>
                                            </button>
                                            <div id="v12ghonta24" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta25" aria-expanded="false" aria-controls="v12ghonta25">
                                                <span className="icon"><img src="/img/table/finland.png" alt="china" /></span>
                                                <span> Finland </span>
                                            </button>
                                            <div id="v12ghonta25" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta26" aria-expanded="false" aria-controls="v12ghonta26">
                                                <span className="icon"><img src="/img/table/czech.png" alt="china" /></span>
                                                <span> Czech Republic </span>
                                            </button>
                                            <div id="v12ghonta26" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta27" aria-expanded="false" aria-controls="v12ghonta27">
                                                <span className="icon"><img src="/img/table/burkina.png" alt="china" /></span>
                                                <span> Burkina Faso </span>
                                            </button>
                                            <div id="v12ghonta27" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta28" aria-expanded="false" aria-controls="v12ghonta28">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span> Belgium </span>
                                            </button>
                                            <div id="v12ghonta28" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta29" aria-expanded="false" aria-controls="v12ghonta29">
                                                <span className="icon"><img src="/img/table/japan.png" alt="china" /></span>
                                                <span> Japan </span>
                                            </button>
                                            <div id="v12ghonta29" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta31" aria-expanded="false" aria-controls="v12ghonta31">
                                                <span className="icon"><img src="/img/table/guatemala.png" alt="china" /></span>
                                                <span> Guatemala </span>
                                            </button>
                                            <div id="v12ghonta31" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#v12ghonta32" aria-expanded="false" aria-controls="v12ghonta32">
                                                <span className="icon"><img src="/img/table/ireland.png" alt="china" /></span>
                                                <span> Ireland </span>
                                            </button>
                                            <div id="v12ghonta32" className="accordion-collapse collapse" data-bs-parent="#countries24h">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // <!--match table Start--> */}

                            <div className="match-table">
                                {/* // <!--Virtual Sports--> */}
                               <VirtualSports />
                                {/* // <!--table Three--> */}
                                <CounterStrike />
                                {/* // <!--table five--> */}
                                <Ebasketball />
                            </div>
                        </div>
                        {/* // <!--24h tab End--> */}

                        {/* // <!--calender tab start--> */}
                        <div className="tab-pane fade" id="combo09" role="tabpanel">
                            {/* // <!--countries section--> */}
                            <div className="calender-bar">
                                <input type="text" name="datetimes" />
                                <i className="fa-regular fa-calendar-days"></i>
                            </div>
                            <div className="head-title mt-3 mb-4">
                                <h2>
                                    Top Leagues
                                </h2>
                            </div>
                            <div className="leauge-name d-flex align-items-center justify-content-between">
                                <Link href="#0" className="left-countries">
                                    <span><img src="/img/table/whl.png" alt="img" /></span>
                                    <span> Europe - UEFA Nations League </span>
                                </Link>
                                <Link href="#0">
                                    9 <i className="fas fa-angle-right"></i>
                                </Link>
                            </div>
                            <div className="head-title-two">
                                <h3>
                                    Countries
                                </h3>
                            </div>
                            <div className="countries-tab pb-60">
                                <div className="accordion" id="countriescalender">
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta" aria-expanded="false" aria-controls="c12ghonta">
                                                <span className="icon"><img src="/img/table/guatemala.png" alt="china" /></span>
                                                <span> Guatemala </span>
                                            </button>
                                            <div id="c12ghonta" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta2" aria-expanded="false" aria-controls="c12ghonta2">
                                                <span className="icon"><img src="/img/table/china.png" alt="china" /></span>
                                                <span>China</span>
                                            </button>
                                            <div id="c12ghonta2" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta3" aria-expanded="false" aria-controls="c12ghonta3">
                                                <span className="icon"><img src="/img/table/japan.png" alt="china" /></span>
                                                <span>Japan</span>
                                            </button>
                                            <div id="c12ghonta3" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta4tahir" aria-expanded="false" aria-controls="c12ghonta4tahir">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span>Paraguay</span>
                                            </button>
                                            <div id="c12ghonta4tahir" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta4" aria-expanded="false" aria-controls="c12ghonta4">
                                                <span className="icon"><img src="/img/table/bolivia.png" alt="china" /></span>
                                                <span>Bolivia</span>
                                            </button>
                                            <div id="c12ghonta4" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta5" aria-expanded="false" aria-controls="c12ghonta5">
                                                <span className="icon"><img src="/img/table/panama.png" alt="china" /></span>
                                                <span>Panama</span>
                                            </button>
                                            <div id="c12ghonta5" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta7" aria-expanded="false" aria-controls="c12ghonta7">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span>Belgium</span>
                                            </button>
                                            <div id="c12ghonta7" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta8" aria-expanded="false" aria-controls="c12ghonta8">
                                                <span className="icon"><img src="/img/table/angola.png" alt="china" /></span>
                                                <span>Angola</span>
                                            </button>
                                            <div id="c12ghonta8" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta9" aria-expanded="false" aria-controls="c12ghonta9">
                                                <span className="icon"><img src="/img/table/panama.png" alt="china" /></span>
                                                <span>Panama</span>
                                            </button>
                                            <div id="c12ghonta9" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta10" aria-expanded="false" aria-controls="c12ghonta10">
                                                <span className="icon"><img src="/img/table/australia.png" alt="china" /></span>
                                                <span> Australia </span>
                                            </button>
                                            <div id="c12ghonta10" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta11" aria-expanded="false" aria-controls="c12ghonta11">
                                                <span className="icon"><img src="/img/table/israel.png" alt="china" /></span>
                                                <span> Israel </span>
                                            </button>
                                            <div id="c12ghonta11" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta12" aria-expanded="false" aria-controls="c12ghonta12">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span> Paraguay </span>
                                            </button>
                                            <div id="c12ghonta12" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta13" aria-expanded="false" aria-controls="c12ghonta13">
                                                <span className="icon"><img src="/img/table/wurope.png" alt="china" /></span>
                                                <span> Europe </span>
                                            </button>
                                            <div id="c12ghonta13" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta14" aria-expanded="false" aria-controls="c12ghonta14">
                                                <span className="icon"><img src="/img/table/argentina.png" alt="china" /></span>
                                                <span> Argentina </span>
                                            </button>
                                            <div id="c12ghonta14" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta15" aria-expanded="false" aria-controls="c12ghonta15">
                                                <span className="icon"><img src="/img/table/czech.png" alt="china" /></span>
                                                <span> Czech Republic </span>
                                            </button>
                                            <div id="c12ghonta15" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta16" aria-expanded="false" aria-controls="c12ghonta16">
                                                <span className="icon"><img src="/img/table/india.png" alt="china" /></span>
                                                <span> India </span>
                                            </button>
                                            <div id="c12ghonta16" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta31" aria-expanded="false" aria-controls="c12ghonta31">
                                                <span className="icon"><img src="/img/table/estonia.png" alt="china" /></span>
                                                <span> Estonia </span>
                                            </button>
                                            <div id="c12ghonta31" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta32tahir" aria-expanded="false" aria-controls="c12ghonta32tahir">
                                                <span className="icon"><img src="/img/table/guatemala.png" alt="china" /></span>
                                                <span> Guatemala </span>
                                            </button>
                                            <div id="c12ghonta32tahir" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta17" aria-expanded="false" aria-controls="c12ghonta17">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span> Paraguay </span>
                                            </button>
                                            <div id="c12ghonta17" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta18" aria-expanded="false" aria-controls="c12ghonta18">
                                                <span className="icon"><img src="/img/table/brazil.png" alt="china" /></span>
                                                <span> Brazil </span>
                                            </button>
                                            <div id="c12ghonta18" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta19" aria-expanded="false" aria-controls="c12ghonta19">
                                                <span className="icon"><img src="/img/table/wurope.png" alt="china" /></span>
                                                <span> Europe </span>
                                            </button>
                                            <div id="c12ghonta19" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta32" aria-expanded="false" aria-controls="c12ghonta32">
                                                <span className="icon"><img src="/img/table/paraguay.png" alt="china" /></span>
                                                <span> Paraguay </span>
                                            </button>
                                            <div id="c12ghonta32" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta20" aria-expanded="false" aria-controls="c12ghonta20">
                                                <span className="icon"><img src="/img/table/austria.png" alt="china" /></span>
                                                <span> Austria </span>
                                            </button>
                                            <div id="c12ghonta20" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta21" aria-expanded="false" aria-controls="c12ghonta21">
                                                <span className="icon"><img src="/img/table/algeria.png" alt="china" /></span>
                                                <span> Algeria </span>
                                            </button>
                                            <div id="c12ghonta21" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta22" aria-expanded="false" aria-controls="c12ghonta22">
                                                <span className="icon"><img src="/img/table/aruba.png" alt="china" /></span>
                                                <span> Aruba </span>
                                            </button>
                                            <div id="c12ghonta22" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta23" aria-expanded="false" aria-controls="c12ghonta23">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span> Belgium </span>
                                            </button>
                                            <div id="c12ghonta23" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta24" aria-expanded="false" aria-controls="c12ghonta24">
                                                <span className="icon"><img src="/img/table/panama.png" alt="china" /></span>
                                                <span> Panama </span>
                                            </button>
                                            <div id="c12ghonta24" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta25" aria-expanded="false" aria-controls="c12ghonta25">
                                                <span className="icon"><img src="/img/table/finland.png" alt="china" /></span>
                                                <span> Finland </span>
                                            </button>
                                            <div id="c12ghonta25" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta26" aria-expanded="false" aria-controls="c12ghonta26">
                                                <span className="icon"><img src="/img/table/czech.png" alt="china" /></span>
                                                <span> Czech Republic </span>
                                            </button>
                                            <div id="c12ghonta26" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta27" aria-expanded="false" aria-controls="c12ghonta27">
                                                <span className="icon"><img src="/img/table/burkina.png" alt="china" /></span>
                                                <span> Burkina Faso </span>
                                            </button>
                                            <div id="c12ghonta27" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta28" aria-expanded="false" aria-controls="c12ghonta28">
                                                <span className="icon"><img src="/img/table/belgi.png" alt="china" /></span>
                                                <span> Belgium </span>
                                            </button>
                                            <div id="c12ghonta28" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <div className="accordion-header">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#c12ghonta29" aria-expanded="false" aria-controls="c12ghonta29">
                                                <span className="icon"><img src="/img/table/japan.png" alt="china" /></span>
                                                <span> Japan </span>
                                            </button>
                                            <div id="c12ghonta29" className="accordion-collapse collapse" data-bs-parent="#countriescalender">
                                                <div className="accordion-body d-flex align-items-center justify-content-between">
                                                    <Link href="#0" className="left-countries">
                                                        <span><img src="/img/table/whl.png" alt="img" /></span>
                                                        <span>Europe - UEFA Nations Leaue</span>
                                                    </Link>
                                                    <Link href="#0">
                                                        9 <i className="fas fa-angle-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* // <!--match table Start--> */}

                            <div className="match-table">
                                {/* // <!--Virtual Sports--> */}
                                <VirtualSports />
                                {/* // <!--table Three--> */}
                                <CounterStrike />
                                {/* // <!--table five--> */}
                                <Ebasketball />
                            </div>
                        </div>
                        {/* // <!--calender tab End--> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hometab;