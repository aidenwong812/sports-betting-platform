import Sponsor from '@/components/Sponsor';
import { ebasketballdata } from '@/data/ebasketball';
import { ehockyData } from '@/data/ehocky';
import Link from 'next/link';
import React, { useState } from 'react';
import ModalVideo from 'react-modal-video'

const live = () => {
   const [isOpen, setOpen] = useState(false)
   return (
      <>
         <div className="filter-banner">
            <div className="container">
               <div className="filter-banner-wrap">
                  <div className="accordion" id="bannerfilter-accordion">
                     <div className="accordion-item">
                        <div className="accordion-header">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bannerfilter" aria-expanded="false" aria-controls="bannerfilter">
                              <span className="icon"><i className="fas fa-bars"></i></span>
                              <span>Selected disciplines: 3/14</span>
                           </button>
                           <div id="bannerfilter" className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                 <ul className="banner-filter-components">
                                    <li>
                                       <span><i className="icon-basketball"></i></span>
                                       <Link href="#0">
                                          Basketball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-basketball"></i></span>
                                       <Link href="#0">
                                          eBasketball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-scgo"></i></span>
                                       <Link href="#0">
                                          CS:GO
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-basketball"></i></span>
                                       <Link href="#0">
                                          Basketball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-basketball"></i></span>
                                       <Link href="#0">
                                          eBasketball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-tennis"></i></span>
                                       <Link href="#0">
                                          Tennis
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-etennis"></i></span>
                                       <Link href="#0">
                                          eTennis
                                       </Link>
                                    </li><li>
                                       <span><i className="icon-hockyball"></i></span>
                                       <Link href="#0">
                                          Ice hockey
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-hockyman"></i></span>
                                       <Link href="#0">
                                          eHockey
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-volleyball"></i></span>
                                       <Link href="#0">
                                          Volleyball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-baseball"></i></span>
                                       <Link href="#0">
                                          Baseball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-futsal"></i></span>
                                       <Link href="#0">
                                          Futsal
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-cricket"></i></span>
                                       <Link href="#0">
                                          Cricket
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!--filter banner--> */}

         {/* <!--Main-body-tabing--> */}
         <div className="main-body-tabbing">
            <div className="container">
               <div className="main-tabbing">
                  <div className="tab-content" id="tabContentmain">
                     {/* <!--all tab start--> */}
                     <div className="tab-pane fade show active" id="betsall" role="tabpanel">
                        <div className="match-table">
                           {/* <!--table five--> */}
                           <div className="match-table-head">
                              <h2>
                                 eBasketball
                              </h2>
                              <Link href="details" className="tablebtn">
                                 More
                              </Link>
                           </div>
                           <div className="table-wrap mb-2">
                              {ebasketballdata.map(({ id, img, quarter, team1, team2, title, total, winner }) => (
                                 <div key={id} className="table-inner">
                                    <div className="table-head">
                                       <Link href="details" className="left-compo">
                                          <span>
                                             <img src={img} alt="flag" />
                                          </span>
                                          <span>{title}</span>
                                       </Link>
                                       <ul className="right-compo">
                                          <li className="dotsred">
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
                                                      <img src={team1.img} alt="flag" />
                                                   </span>
                                                   <span>{team1.name}</span>
                                                </Link>
                                             </div>
                                             <div className="items">
                                                <Link href="details">
                                                   <span className="icon">
                                                      <img src={team2.img} alt="plag" />
                                                   </span>
                                                   <span>{team2.name}</span>
                                                </Link>
                                             </div>
                                          </div>
                                          <div className="ebasket-right-content">
                                             <Link href="#0"><span className="blods">{team1.score}</span> Q1 Q2 Q3</Link>
                                             <Link href="#0">22 16 5</Link>
                                             <Link href="#0"><span className="blods">{team2.score}</span> 17 30 6</Link>
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
                                             <span className="list">1.5</span>
                                             <span>2.20</span>
                                          </Link>
                                          <Link href="#0" className="table-pointing-box">
                                             <span className="list">O 41.5</span>
                                             <span>1.02</span>
                                          </Link>
                                          <Link href="#0" className="table-pointing-box">
                                             <span className="list">U 41.5</span>
                                             <span>1.77</span>
                                          </Link>
                                          <Link href="#0" className="table-pointing-box">
                                             <span className="batbinton">
                                                <img src="/img/table/batbintonplay.png" alt="img" />
                                             </span>
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                           {/* <!--Ehocky--> */}
                           {/* <!--table five--> */}
                           <div className="match-table-head mt-5 pb-20">
                              <h2>
                                 eHockey
                              </h2>
                           </div>
                           <div className="table-wrap mb-2">
                              {
                                 ehockyData.map(({ id,img,team1,team2,title}) => (
                                    <div key={id} className="table-inner">
                                       <div className="table-head">
                                          <Link href="details" className="left-compo">
                                             <span>
                                                <i className="icon-hockyman"></i>
                                             </span>
                                             <span>{title} </span>
                                          </Link>
                                          <ul className="right-compo">
                                             <li className="dotsred">
                                                Period 3 '47
                                             </li>
                                             <li>
                                                Winner. Main time
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
                                                         <i className="icon-hockyman"></i>
                                                      </span>
                                                      <span>{team1.name}</span>
                                                   </Link>
                                                </div>
                                                <div className="items">
                                                   <Link href="details">
                                                      <span className="icon">
                                                         <i className="icon-hockyman"></i>
                                                      </span>
                                                      <span>{team2.name}</span>
                                                   </Link>
                                                </div>
                                             </div>
                                             <div className="ebasket-right-content">
                                                <Link href="#0"><span className="blods">{team1.score}</span>  P1 P2 P3</Link>
                                                <Link href="#0">200</Link>
                                                <Link href="#0"><span className="blods">{team2.score}</span> 112</Link>
                                             </div>
                                          </div>
                                          <div className="table-body-right">
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">1</span>
                                                <span>05.05</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">X</span>
                                                <span>7.010</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">5.4</span>
                                                <span>5.10</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">O 1.50</span>
                                                <span>8.02</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">U 71.5</span>
                                                <span>1.27</span>
                                             </Link>
                                             <Link onClick={()=> setOpen(true)} href="#" className="table-pointing-box video-btn">
                                                <span className="basketman">
                                                   <img src={img} alt="img" />
                                                </span>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 ))
                              }
                           </div>
                           {/* <!--table six--> */}
                           <div className="match-table-head mt-5 pb-20">
                              <h2>
                                 Cricket
                              </h2>
                           </div>
                           <div className="table-wrap">
                              <div className="table-inner">
                                 <div className="table-head">
                                    <Link href="details" className="left-compo">
                                       <span>
                                          <i className="icon-cricket"></i>
                                       </span>
                                       <span>
                                          Irani Cup
                                       </span>
                                    </Link>
                                    <ul className="right-compo">
                                       <li className="dotsred">
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
                                                   <i className="icon-cricket"></i>
                                                </span>
                                                <span>Melbourne Phoenix</span>
                                             </Link>
                                          </div>
                                          <div className="items">
                                             <Link href="details">
                                                <span className="icon">
                                                   <i className="icon-cricket"></i>
                                                </span>
                                                <span>Rest Of India</span>
                                             </Link>
                                          </div>
                                       </div>
                                       <div className="ebasket-right-content">
                                          <Link href="#0"><span className="blods">90</span> 10</Link>
                                          <Link href="#0">22 16 5</Link>
                                          <Link href="#0"><span className="blods">98</span> 00</Link>
                                       </div>
                                    </div>
                                    <div className="table-body-right">
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">1</span>
                                          <span>12.00</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">1.5</span>
                                          <span>2.20</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">O 41.5</span>
                                          <span>1.02</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">U 41.5</span>
                                          <span>1.77</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="batbinton">
                                             <img src="/img/table/batbintonplay.png" alt="img" />
                                          </span>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                              <div className="table-inner">
                                 <div className="table-head">
                                    <Link href="details" className="left-compo">
                                       <span>
                                          <i className="icon-cricket"></i>
                                       </span>
                                       <span>
                                          Australian Championship. NBL
                                       </span>
                                    </Link>
                                    <ul className="right-compo">
                                       <li className="dotsred">
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
                                                   <i className="icon-cricket"></i>
                                                </span>
                                                <span>KCA Tigers</span>
                                             </Link>
                                          </div>
                                          <div className="items">
                                             <Link href="details">
                                                <span className="icon">
                                                   <i className="icon-cricket"></i>
                                                </span>
                                                <span>KKA Eagles</span>
                                             </Link>
                                          </div>
                                       </div>
                                       <div className="ebasket-right-content">
                                          <Link href="#0"><span className="blods">63</span> 3</Link>
                                          <Link href="#0">25</Link>
                                          <Link href="#0"><span className="blods">0</span> 00</Link>
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
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="batbinton">
                                             <img src="/img/table/batbintonplay.png" alt="img" />
                                          </span>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     {/* <!--all tab End--> */}
                  </div>
               </div>
            </div>
         </div>
         {/* <!--Main-body-tabing--> */}

         {/* <!--Sponsor Section--> */}
         <Sponsor />
         <ModalVideo channel='youtube' isOpen={isOpen} videoId="Qg6zu49kXSA" onClose={() => setOpen(false)} />
      </>
   );
};

export default live;