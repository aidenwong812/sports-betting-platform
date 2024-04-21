import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import Sponsor from '@/components/Sponsor';
import { useEffect, useState } from 'react';
import getOdds from '@/lib/getOdds';

const details = () => {
   return (
      <>
         <BreadCrumb title="Details" />
         {/* <!--Breadcumnd--> */}

         {/* <!--Banner--> */}
         <div className="details-banner pt-60 pb-60">
            <div className="container">
               <div className="details-wrapper">
                  <div className="scoreboard-head">
                     <span><img src="/img/table/details/scoreboard.png" alt="img" /></span>
                     <span className="text-base">Scoreboard</span>
                  </div>
                  <div className="banner-wrapper owl-theme owl-carousel">
                     <div className="details-img">
                        <div className="details-progress">
                           <div className="detail-progress-items">
                              <div className="bar1">
                                 <div className="changchun">
                                    <img src="/img/table/details/changchun.png" alt="img" />
                                 </div>
                              </div>
                              <p>
                                 FURIA
                              </p>
                           </div>
                           <div className="detail-progress-items details-middle-items">
                              <Link href="#0" className="live">
                                 Break 1'45
                              </Link>
                              <div className="detaisl-middle-circle-wrap d-flex align-items-center">
                                 <h3 className="gra">1</h3>
                                 <div className="bar-middle-circle">
                                    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                       <path d="M83.4422 83.4422C84.4988 84.4988 86.2179 84.5035 87.2159 83.3913C93.1946 76.728 97.2863 68.5673 99.0393 59.7545C100.969 50.0555 99.9784 40.0021 96.194 30.8658C92.4096 21.7295 86.001 13.9206 77.7785 8.42652C69.5561 2.93245 59.8891 4.51887e-07 50 0C40.1109 -4.51887e-07 30.4439 2.93245 22.2215 8.42652C13.999 13.9206 7.59041 21.7295 3.80602 30.8658C0.0216423 40.0021 -0.968525 50.0555 0.960735 59.7545C2.71371 68.5673 6.80542 76.728 12.7841 83.3913C13.7821 84.5035 15.5012 84.4988 16.5578 83.4422V83.4422C17.6144 82.3856 17.6075 80.6777 16.6169 79.559C11.3911 73.6573 7.81207 66.4618 6.26793 58.6988C4.54746 50.0495 5.43047 41.0841 8.80529 32.9366C12.1801 24.789 17.8952 17.8252 25.2278 12.9257C32.5604 8.02626 41.1812 5.41117 50 5.41117C58.8188 5.41117 67.4396 8.02626 74.7722 12.9257C82.1048 17.8252 87.8199 24.789 91.1947 32.9366C94.5695 41.0841 95.4525 50.0495 93.7321 58.6989C92.1879 66.4618 88.6089 73.6573 83.3831 79.559C82.3925 80.6777 82.3856 82.3856 83.4422 83.4422V83.4422Z" fill="#D9D9D9" />
                                       <path d="M15.4609 17.6919C14.3697 16.6711 12.6512 16.7239 11.6909 17.8687C3.97445 27.0681 -0.194085 38.7672 0.00693804 50.8329C0.207961 62.8986 4.7639 74.4523 12.7825 83.3896C13.7804 84.5018 15.4997 84.4973 16.5563 83.4407V83.4407C17.613 82.3842 17.606 80.6762 16.6154 79.5574C9.58572 71.6181 5.59499 61.4046 5.41735 50.7428C5.23972 40.081 8.888 29.7402 15.6493 21.5711C16.6021 20.42 16.5522 18.7127 15.4609 17.6919V17.6919Z" fill="url(#paint0_linear_965_3)" />
                                       <defs>
                                          <linearGradient id="paint0_linear_965_3" x1="-6.43565" y1="115" x2="121.545" y2="94.548" gradientUnits="userSpaceOnUse">
                                             <stop offset="5%" stopColor="#81CD34" />
                                             <stop offset="1" stopColor="#00A182" />
                                          </linearGradient>
                                       </defs>
                                    </svg>
                                    <span>VS</span>
                                 </div>
                                 <h3 className="sto">0</h3>
                              </div>
                              <div className="matchfixing-box">
                                 <Link href="#0" className="match">
                                    <span>
                                       <img src="/img/table/details/changchun.png" alt="img" />
                                    </span>
                                    <span>
                                       10
                                    </span>
                                 </Link>
                                 <Link href="#0" className="match">
                                    <span>
                                       10
                                    </span>
                                    <span className="reds">
                                       <img src="/img/table/details/red.png" alt="img" />
                                    </span>
                                 </Link>
                                 <Link href="#0" className="match">
                                    <span>
                                       <img src="/img/table/details/zall.png" alt="img" />
                                    </span>
                                    <span>
                                       10
                                    </span>
                                 </Link>
                              </div>
                           </div>
                           <div className="detail-progress-items detail-last-items">
                              <div className="bar1">
                                 <div className="changchun">
                                    <img src="/img/table/details/zall.png" alt="img" />
                                 </div>
                              </div>
                              <p>
                                 OutSiders
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="detail-tap">
                     <ul className="nav">
                        <li className="nav-item">
                           <Link className="nav-link link-secondary active" id="details-tab" data-bs-toggle="tab" data-bs-target="#detail1" href="#"><span>All markets</span></Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link link-secondary" id="details-tab01" data-bs-toggle="tab" data-bs-target="#details2" href="#"><span>Winner</span></Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link link-secondary" id="details-tab02" data-bs-toggle="tab" data-bs-target="#details3" href="#"><span>Total</span></Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link link-secondary" id="details-tab03" data-bs-toggle="tab" data-bs-target="#details4" href="#"><span>Handicap</span></Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link link-secondary" id="details-tab04" data-bs-toggle="tab" data-bs-target="#details5" href="#"><span>Correct score</span></Link>
                        </li>
                        <li className="nav-item">
                           <Link className="nav-link link-secondary" id="details-tab05" data-bs-toggle="tab" data-bs-target="#details6" href="#"><span>Others</span></Link>
                        </li>
                     </ul>
                  </div>
               </div>
               <div className="tab-content pt-60" id="d-wrap">
                  <div className="tab-pane fade show active" id="detail1" role="tabpanel">
                     <div className="row g-4">
                        <div className="col-xxl-6 col-xl-12 col-lg-6">
                           <div className="detail-match-winner">
                              <div className="details-match-wrap">
                                 <div className="accordion" id="details-accordion">
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor1" aria-expanded="false" aria-controls="detaislaccor1">
                                             <span>Match Winner</span>
                                          </button>
                                          <div id="detaislaccor1" className="accordion-collapse collapse show">
                                             <div className="accordion-body d-flex align-items-center justify-content-between">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.75</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">2.01</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor2" aria-expanded="false" aria-controls="detaislaccor2">
                                             <span>Winner. Map 2</span>
                                          </button>
                                          <div id="detaislaccor2" className="accordion-collapse collapse show">
                                             <div className="accordion-body d-flex align-items-center justify-content-between">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.61</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">2.17</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor5" aria-expanded="false" aria-controls="detaislaccor5">
                                             <span>Handicap. Map 1</span>
                                          </button>
                                          <div id="detaislaccor5" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.5</span>
                                                      <span className="num">2.32</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">1.19</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -2.5</span>
                                                      <span className="num">1.74</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders -2.5</span>
                                                      <span className="num">1.98</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA +3.5</span>
                                                      <span className="num">1.56</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders -3.5</span>
                                                      <span className="num">2.28</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA +4.5</span>
                                                      <span className="num">1.41</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders -4.5</span>
                                                      <span className="num">2.67</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA +5.5</span>
                                                      <span className="num">1.29</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders -5.5</span>
                                                      <span className="num">3.26</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor7" aria-expanded="false" aria-controls="detaislaccor7">
                                             <span>Handicap. Map 3</span>
                                          </button>
                                          <div id="detaislaccor7" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 26.5</span>
                                                      <span className="num">1.78</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 26.5</span>
                                                      <span className="num">1.93</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 27.5</span>
                                                      <span className="num">2.28</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 27.5</span>
                                                      <span className="num">1.60</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 28.5</span>
                                                      <span className="num"> 2.87</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 28.5</span>
                                                      <span className="num">1.37</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor9" aria-expanded="false" aria-controls="detaislaccor9">
                                             <span>Map 1 result and total rounds</span>
                                          </button>
                                          <div id="detaislaccor9" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and over 26.5</span>
                                                      <span className="num">3.60</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and under 26.5</span>
                                                      <span className="num">3.90</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and over 26.5</span>
                                                      <span className="num">3.15</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and under 26.5</span>
                                                      <span className="num">3.30</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor12" aria-expanded="false" aria-controls="detaislaccor12">
                                             <span>Map 3 result and total rounds</span>
                                          </button>
                                          <div id="detaislaccor12" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and over 26.5</span>
                                                      <span className="num">3.80</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and under 26.5</span>
                                                      <span className="num">3.10</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and over 26.5</span>
                                                      <span className="num">3.5</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and under 26.5</span>
                                                      <span className="num">3.30</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor14" aria-expanded="false" aria-controls="detaislaccor14">
                                             <span>Way of 16 round ending on map 1</span>
                                          </button>
                                          <div id="detaislaccor14" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">1.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb defused</span>
                                                      <span className="num">3.50</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb exploded</span>
                                                      <span className="num">10.00</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team Include</span>
                                                      <span className="num">10.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Time over</span>
                                                      <span className="num">100.00</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">7.10</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor16" aria-expanded="false" aria-controls="detaislaccor16">
                                             <span>Total even/odd. Map 2</span>
                                          </button>
                                          <div id="detaislaccor16" className="accordion-collapse collapse show">
                                             <div className="accordion-body d-flex align-items-center justify-content-between">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Odd</span>
                                                      <span className="num">2.15</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Even</span>
                                                      <span className="num">1.65</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor17" aria-expanded="false" aria-controls="detaislaccor17">
                                             <span>Map 1. Will be overtime</span>
                                          </button>
                                          <div id="detaislaccor17" className="accordion-collapse collapse show">
                                             <div className="accordion-body d-flex align-items-center justify-content-between">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Yes</span>
                                                      <span className="num">7.30</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>No</span>
                                                      <span className="num">1.04</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor18" aria-expanded="false" aria-controls="detaislaccor18">
                                             <span>Map 3. Will be overtime</span>
                                          </button>
                                          <div id="detaislaccor18" className="accordion-collapse collapse show">
                                             <div className="accordion-body d-flex align-items-center justify-content-between">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Yes</span>
                                                      <span className="num">7.30</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>No</span>
                                                      <span className="num">1.04</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor19" aria-expanded="false" aria-controls="detaislaccor19">
                                             <span>Way of 16 round ending on map 3</span>
                                          </button>
                                          <div id="detaislaccor19" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">1.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and under 26.5</span>
                                                      <span className="num">3.50</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and over 26.5</span>
                                                      <span className="num">10.00</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and under 26.5</span>
                                                      <span className="num">10.30</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor20" aria-expanded="false" aria-controls="detaislaccor20">
                                             <span>Way of 16 round ending on map 3</span>
                                          </button>
                                          <div id="detaislaccor20" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">1.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and under 26.5</span>
                                                      <span className="num">7.45</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and over 26.5</span>
                                                      <span className="num">8.00</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and under 26.5</span>
                                                      <span className="num">3.80</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-12 col-lg-6">
                           <div className="detail-match-winner">
                              <div className="details-match-wrap">
                                 <div className="accordion" id="details-accordionright">
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor3" aria-expanded="false" aria-controls="detaislaccor3">
                                             <span>Winner. Map 1</span>
                                          </button>
                                          <div id="detaislaccor3" className="accordion-collapse collapse show">
                                             <div className="accordion-body d-flex align-items-center justify-content-between">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.99</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">1.73</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor4" aria-expanded="false" aria-controls="detaislaccor4">
                                             <span>Winner. Map 3</span>
                                          </button>
                                          <div id="detaislaccor4" className="accordion-collapse collapse show">
                                             <div className="accordion-body d-flex align-items-center justify-content-between">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.80</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">1.90</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor6" aria-expanded="false" aria-controls="detaislaccor6">
                                             <span>Handicap. Map 2</span>
                                          </button>
                                          <div id="detaislaccor6" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.4</span>
                                                      <span className="num">2.45</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +2.5</span>
                                                      <span className="num">1.95</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -00.5</span>
                                                      <span className="num">1.12</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders 8.4</span>
                                                      <span className="num">1.98</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA +3.5</span>
                                                      <span className="num">1.56</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders -3.5</span>
                                                      <span className="num">2.28</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA +8.5</span>
                                                      <span className="num">9.41</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders -4.9</span>
                                                      <span className="num">2.85</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA +9.5</span>
                                                      <span className="num">2.9</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders -2.5</span>
                                                      <span className="num">1.22</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor8" aria-expanded="false" aria-controls="detaislaccor8">
                                             <span>Total. Map 1</span>
                                          </button>
                                          <div id="detaislaccor8" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 28.5</span>
                                                      <span className="num">1.78</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 06.4</span>
                                                      <span className="num">1.93</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 57.1</span>
                                                      <span className="num">18.8</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 27.5</span>
                                                      <span className="num">5.05</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 8.15</span>
                                                      <span className="num"> 8.87</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 25.1</span>
                                                      <span className="num">2.47</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor11" aria-expanded="false" aria-controls="detaislaccor11">
                                             <span>Map 2 result and total rounds</span>
                                          </button>
                                          <div id="detaislaccor11" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and over 26.5</span>
                                                      <span className="num">3.56</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and under 26.5</span>
                                                      <span className="num">3.14</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and over 26.5</span>
                                                      <span className="num">3.1</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and under 26.5</span>
                                                      <span className="num">2.35</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor13" aria-expanded="false" aria-controls="detaislaccor13">
                                             <span>Way of 1 round ending on map 1</span>
                                          </button>
                                          <div id="detaislaccor13" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">1.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb defused</span>
                                                      <span className="num">3.50</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb exploded</span>
                                                      <span className="num">10.00</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Time over</span>
                                                      <span className="num">100.00</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor15" aria-expanded="false" aria-controls="detaislaccor15">
                                             <span>Way of 1 round ending on map 2</span>
                                          </button>
                                          <div id="detaislaccor15" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">1.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb defused</span>
                                                      <span className="num">3.50</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb exploded</span>
                                                      <span className="num">10.00</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team Include</span>
                                                      <span className="num">10.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">7.10</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Time over</span>
                                                      <span className="num">100.00</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor21" aria-expanded="false" aria-controls="detaislaccor21">
                                             <span>Total even/odd. Map 1</span>
                                          </button>
                                          <div id="detaislaccor21" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Odd</span>
                                                      <span className="num">2.15</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Even</span>
                                                      <span className="num">1.65</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor22" aria-expanded="false" aria-controls="detaislaccor22">
                                             <span>Total even/odd. Map 3</span>
                                          </button>
                                          <div id="detaislaccor22" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Yes</span>
                                                      <span className="num">9.30</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>No</span>
                                                      <span className="num">1.54</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor23" aria-expanded="false" aria-controls="detaislaccor23">
                                             <span>Total kills. Map 1. Round 1</span>
                                          </button>
                                          <div id="detaislaccor23" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 7.5</span>
                                                      <span className="num">2.25</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 7.5</span>
                                                      <span className="num">1.60</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor24" aria-expanded="false" aria-controls="detaislaccor24">
                                             <span>Total even/odd. Map 3</span>
                                          </button>
                                          <div id="detaislaccor24" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Odd</span>
                                                      <span className="num">7.30</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Even</span>
                                                      <span className="num">1.04</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor25" aria-expanded="false" aria-controls="detaislaccor25">
                                             <span>Map 2. Will be overtime</span>
                                          </button>
                                          <div id="detaislaccor25" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Yes</span>
                                                      <span className="num">7.30</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>No</span>
                                                      <span className="num">1.04</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor26" aria-expanded="false" aria-controls="detaislaccor26">
                                             <span>Total kills. Map 1. Round 1</span>
                                          </button>
                                          <div id="detaislaccor26" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 7.5</span>
                                                      <span className="num">2.25</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 7.5</span>
                                                      <span className="num">1.60</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor27" aria-expanded="false" aria-controls="detaislaccor27">
                                             <span>Will take first 3 rounds on map 2</span>
                                          </button>
                                          <div id="detaislaccor27" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.36</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders</span>
                                                      <span className="num">3.25</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <!--winner--> */}
                  <div className="tab-pane fade" id="details2" role="tabpanel">
                     <div className="row g-4">
                        <div className="col-xxl-6 col-xl-12 col-lg-6">
                           <div className="detail-match-winner">
                              <div className="details-match-wrap">
                                 <div className="accordion" id="details-accordionwinner">
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor28" aria-expanded="false" aria-controls="detaislaccor28">
                                             <span>Match Winner</span>
                                          </button>
                                          <div id="detaislaccor28" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.75</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">2.01</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor29" aria-expanded="false" aria-controls="detaislaccor29">
                                             <span>Winner. Map 2</span>
                                          </button>
                                          <div id="detaislaccor29" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.61</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">2.17</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor30" aria-expanded="false" aria-controls="detaislaccor30">
                                             <span>Winner. Map 1. Round 1</span>
                                          </button>
                                          <div id="detaislaccor30" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.86</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">1.81</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor31" aria-expanded="false" aria-controls="detaislaccor31">
                                             <span>Winner. Map 1. Round 1</span>
                                          </button>
                                          <div id="detaislaccor31" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.82</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">1.83</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-12 col-lg-6">
                           <div className="detail-match-winner">
                              <div className="details-match-wrap">
                                 <div className="accordion" id="details-accordionwinner2">
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor32" aria-expanded="false" aria-controls="detaislaccor32">
                                             <span>Winner. Map 1</span>
                                          </button>
                                          <div id="detaislaccor32" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.99</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">1.73</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor33my" aria-expanded="false" aria-controls="detaislaccor33my">
                                             <span>First kill. Map 1. Round 16</span>
                                          </button>
                                          <div id="detaislaccor33my" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.82</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">1.82</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor33" aria-expanded="false" aria-controls="detaislaccor33">
                                             <span>First kill. Map 2. Round 16</span>
                                          </button>
                                          <div id="detaislaccor33" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.82</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">1.82</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor34" aria-expanded="false" aria-controls="detaislaccor34">
                                             <span>First kill. Map 3. Round 16</span>
                                          </button>
                                          <div id="detaislaccor34" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.82</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">1.82</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <!--total--> */}
                  <div className="tab-pane fade" id="details3" role="tabpanel">
                     <div className="row g-4">
                        <div className="col-xxl-6 col-xl-12 col-lg-6">
                           <div className="detail-match-winner">
                              <div className="details-match-wrap">
                                 <div className="accordion" id="details-accordiontotal">
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor35" aria-expanded="false" aria-controls="detaislaccor35">
                                             <span>Total. Map 1</span>
                                          </button>
                                          <div id="detaislaccor35" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 23.5</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 23.5</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 24.6</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 24.6</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 25.7</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 25.7</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 26.7</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 26.7</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 27.5</span>
                                                      <span className="num">1.56</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 27.5</span>
                                                      <span className="num">3.55</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 28.7</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 28.7</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor36" aria-expanded="false" aria-controls="detaislaccor36">
                                             <span>Total. Map 1</span>
                                          </button>
                                          <div id="detaislaccor36" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 23.5</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 23.5</span>
                                                      <span className="num">3.71</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 24.5</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 24.5</span>
                                                      <span className="num">3.71</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 23.6</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 23.6</span>
                                                      <span className="num">3.71</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 23.7</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 23.7</span>
                                                      <span className="num">3.71</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 23.8</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 23.8</span>
                                                      <span className="num">3.71</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-12 col-lg-6">
                           <div className="detail-match-winner">
                              <div className="details-match-wrap">
                                 <div className="accordion" id="details-accordiontotal2">
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor37" aria-expanded="false" aria-controls="detaislaccor37">
                                             <span>Winner. Map 1</span>
                                          </button>
                                          <div id="detaislaccor37" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 23.5</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 73.5</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 23.9</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 23.5</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 3.5</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 23.5</span>
                                                      <span className="num">8.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 53.5</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 23.5</span>
                                                      <span className="num">2.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 20.5</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 20.5</span>
                                                      <span className="num">5.41</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 26.5</span>
                                                      <span className="num">1.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 26.5</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor38" aria-expanded="false" aria-controls="detaislaccor38">
                                             <span>Total even/odd. Map 1</span>
                                          </button>
                                          <div id="detaislaccor38" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Odd</span>
                                                      <span className="num">2.15</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Even</span>
                                                      <span className="num">1.65</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor39" aria-expanded="false" aria-controls="detaislaccor39">
                                             <span>Total even/odd. Map 1</span>
                                          </button>
                                          <div id="detaislaccor39" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Odd</span>
                                                      <span className="num">2.15</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Even</span>
                                                      <span className="num">1.65</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor40" aria-expanded="false" aria-controls="detaislaccor40">
                                             <span>Total kills. Map 1. Round 16</span>
                                          </button>
                                          <div id="detaislaccor40" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Over 7.5</span>
                                                      <span className="num">2.45</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Under 7.5</span>
                                                      <span className="num">1.60</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <!--handicap--> */}
                  <div className="tab-pane fade" id="details4" role="tabpanel">
                     <div className="row g-4">
                        <div className="col-xxl-6 col-xl-12 col-lg-6">
                           <div className="detail-match-winner">
                              <div className="details-match-wrap">
                                 <div className="accordion" id="details-accordionhandicap">
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor41" aria-expanded="false" aria-controls="detaislaccor41">
                                             <span>Handicap. Map 1</span>
                                          </button>
                                          <div id="detaislaccor41" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.5</span>
                                                      <span className="num">1.54</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.8</span>
                                                      <span className="num">1.25</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -7.5</span>
                                                      <span className="num">1.06</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.2</span>
                                                      <span className="num">1.22</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -5.5</span>
                                                      <span className="num">1.56</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">3.55</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -8.5</span>
                                                      <span className="num">1.46</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">3.51</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor42" aria-expanded="false" aria-controls="detaislaccor42">
                                             <span>Handicap. Map 3</span>
                                          </button>
                                          <div id="detaislaccor42" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.5</span>
                                                      <span className="num">1.54</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.8</span>
                                                      <span className="num">1.25</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -7.5</span>
                                                      <span className="num">1.06</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.2</span>
                                                      <span className="num">1.22</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -5.5</span>
                                                      <span className="num">1.56</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.55</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -8.5</span>
                                                      <span className="num">1.46</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.51</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-12 col-lg-6">
                           <div className="detail-match-winner">
                              <div className="details-match-wrap">
                                 <div className="accordion" id="details-accordionhandicap2">
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor43" aria-expanded="false" aria-controls="detaislaccor43">
                                             <span>Handicap. Map 2</span>
                                          </button>
                                          <div id="detaislaccor43" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.5</span>
                                                      <span className="num">2.96</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.8</span>
                                                      <span className="num">5.25</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -7.5</span>
                                                      <span className="num">2.06</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.2</span>
                                                      <span className="num">9.22</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -5.5</span>
                                                      <span className="num">7.56</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.55</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -8.5</span>
                                                      <span className="num">9.46</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.51</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor44" aria-expanded="false" aria-controls="detaislaccor44">
                                             <span>Maps Handicap</span>
                                          </button>
                                          <div id="detaislaccor44" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -1.5</span>
                                                      <span className="num">3.26</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">4.51</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA -3.8</span>
                                                      <span className="num">10.25</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">1.38</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <!--score--> */}
                  <div className="tab-pane fade" id="details5" role="tabpanel">
                     <div className="row g-4">
                        <div className="col-lg-12">
                           <div className="detail-match-winner">
                              <div className="details-match-wrap">
                                 <div className="accordion" id="details-accordionscore">
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor50" aria-expanded="false" aria-controls="detaislaccor50">
                                             <span>Correct Score</span>
                                          </button>
                                          <div id="detaislaccor50" className="accordion-collapse collapse show">
                                             <div className="accordion-body score-body-items-two">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>2-0</span>
                                                      <span className="num">1.54</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">3.61</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>2-1</span>
                                                      <span className="num">2.32</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders +3.5</span>
                                                      <span className="num">3.47</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <!--others--> */}
                  <div className="tab-pane fade" id="details6" role="tabpanel">
                     <div className="row g-4">
                        <div className="col-xxl-6 col-xl-12 col-lg-6">
                           <div className="detail-match-winner">
                              <div className="details-match-wrap">
                                 <div className="accordion" id="details-accordionscoretwo">
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor51" aria-expanded="false" aria-controls="detaislaccor51">
                                             <span>Map 1 result and total rounds</span>
                                          </button>
                                          <div id="detaislaccor51" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and over 26.5</span>
                                                      <span className="num">3.60</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and under 26.5</span>
                                                      <span className="num">3.90</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor52" aria-expanded="false" aria-controls="detaislaccor52">
                                             <span>Map 3 result and total rounds</span>
                                          </button>
                                          <div id="detaislaccor52" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and over 26.5</span>
                                                      <span className="num">3.60</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and under 26.5</span>
                                                      <span className="num">3.90</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and over 26.5</span>
                                                      <span className="num">3.40</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and under 26.5</span>
                                                      <span className="num">3.64</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor53" aria-expanded="false" aria-controls="detaislaccor53">
                                             <span>Way of 16 round ending on map 2</span>
                                          </button>
                                          <div id="detaislaccor53" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">1.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb defused</span>
                                                      <span className="num">3.50</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb exploded</span>
                                                      <span className="num">10.00</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Time over</span>
                                                      <span className="num">100.0</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb exploded</span>
                                                      <span className="num">10.00</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor54" aria-expanded="false" aria-controls="detaislaccor54">
                                             <span>Way of 16 round ending on map 3</span>
                                          </button>
                                          <div id="detaislaccor54" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">1.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb defused</span>
                                                      <span className="num">3.50</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb exploded</span>
                                                      <span className="num">10.00</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Time over</span>
                                                      <span className="num">100.0</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor55" aria-expanded="false" aria-controls="detaislaccor55">
                                             <span>Map 2. Will be overtime</span>
                                          </button>
                                          <div id="detaislaccor55" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Yes</span>
                                                      <span className="num">7.30</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>No</span>
                                                      <span className="num">1.04</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor56" aria-expanded="false" aria-controls="detaislaccor56">
                                             <span>Will take first 3 rounds on map 1</span>
                                          </button>
                                          <div id="detaislaccor56" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.95</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">1.80</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor57" aria-expanded="false" aria-controls="detaislaccor57">
                                             <span>Will take first 3 rounds on map 2</span>
                                          </button>
                                          <div id="detaislaccor57" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.25</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">4.52</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor58" aria-expanded="false" aria-controls="detaislaccor58">
                                             <span>Will take first 10 rounds on map 2</span>
                                          </button>
                                          <div id="detaislaccor58" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">14.5</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">04.52</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor59" aria-expanded="false" aria-controls="detaislaccor59">
                                             <span>Will take first 3 rounds on map 3</span>
                                          </button>
                                          <div id="detaislaccor59" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">8.5</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">4.00</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor60" aria-expanded="false" aria-controls="detaislaccor60">
                                             <span>Will take first 10 rounds on map 3</span>
                                          </button>
                                          <div id="detaislaccor60" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">10.5</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">8.00</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor61" aria-expanded="false" aria-controls="detaislaccor61">
                                             <span>Will take first 10 rounds on map 3</span>
                                          </button>
                                          <div id="detaislaccor61" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">84.5</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">8.40</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor62" aria-expanded="false" aria-controls="detaislaccor62">
                                             <span>Bomb will be planted on 1 round on map 1</span>
                                          </button>
                                          <div id="detaislaccor62" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">5.2</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">14.0</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor63" aria-expanded="false" aria-controls="detaislaccor63">
                                             <span>Bomb will be planted on 1 round on map 2</span>
                                          </button>
                                          <div id="detaislaccor63" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Yes</span>
                                                      <span className="num">1.25</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>No</span>
                                                      <span className="num">20.9</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor64" aria-expanded="false" aria-controls="detaislaccor64">
                                             <span>Knife kill on map 1</span>
                                          </button>
                                          <div id="detaislaccor64" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Yes</span>
                                                      <span className="num">4.85</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>No</span>
                                                      <span className="num">1.59</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor65" aria-expanded="false" aria-controls="detaislaccor65">
                                             <span>Knife kill on map 3</span>
                                          </button>
                                          <div id="detaislaccor65" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Yes</span>
                                                      <span className="num">5.40</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>No</span>
                                                      <span className="num">1.09</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-12 col-lg-6">
                           <div className="detail-match-winner">
                              <div className="details-match-wrap">
                                 <div className="accordion" id="details-accordionscore2">
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor66" aria-expanded="false" aria-controls="detaislaccor66">
                                             <span>Map 2 result and total rounds</span>
                                          </button>
                                          <div id="detaislaccor66" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and over 26.5</span>
                                                      <span className="num">2.90</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and under 26.5</span>
                                                      <span className="num">7.80</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA and under 26.5</span>
                                                      <span className="num">3.80</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Outsiders and under 26.5</span>
                                                      <span className="num">4.00</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor67" aria-expanded="false" aria-controls="detaislaccor67">
                                             <span>Way of 1 round ending on map 1</span>
                                          </button>
                                          <div id="detaislaccor67" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">1.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb defused</span>
                                                      <span className="num">3.50</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb exploded</span>
                                                      <span className="num">10.00</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Time over</span>
                                                      <span className="num">100.0</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor68" aria-expanded="false" aria-controls="detaislaccor68">
                                             <span>Way of 3 round ending on map 2</span>
                                          </button>
                                          <div id="detaislaccor68" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">1.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb defused</span>
                                                      <span className="num">3.50</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb exploded</span>
                                                      <span className="num">10.00</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Time over</span>
                                                      <span className="num">100.0</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor69" aria-expanded="false" aria-controls="detaislaccor69">
                                             <span>Way of 4 round ending on map 4</span>
                                          </button>
                                          <div id="detaislaccor69" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Team killed</span>
                                                      <span className="num">1.30</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb defused</span>
                                                      <span className="num">3.50</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Bomb exploded</span>
                                                      <span className="num">10.00</span>
                                                   </Link>
                                                </div>
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Time over</span>
                                                      <span className="num">100.0</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor70" aria-expanded="false" aria-controls="detaislaccor70">
                                             <span>Will take first 3 rounds on map 1</span>
                                          </button>
                                          <div id="detaislaccor70" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.95</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">1.80</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor71" aria-expanded="false" aria-controls="detaislaccor71">
                                             <span>Will take first 3 rounds on map 2</span>
                                          </button>
                                          <div id="detaislaccor71" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">1.25</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">4.52</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor72" aria-expanded="false" aria-controls="detaislaccor72">
                                             <span>Will take first 10 rounds on map 2</span>
                                          </button>
                                          <div id="detaislaccor72" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">14.5</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">04.52</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor73" aria-expanded="false" aria-controls="detaislaccor73">
                                             <span>Will take first 3 rounds on map 3</span>
                                          </button>
                                          <div id="detaislaccor73" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">8.5</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">4.00</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor74" aria-expanded="false" aria-controls="detaislaccor74">
                                             <span>Will take first 10 rounds on map 3</span>
                                          </button>
                                          <div id="detaislaccor74" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">10.5</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">8.00</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor75" aria-expanded="false" aria-controls="detaislaccor75">
                                             <span>Will take first 10 rounds on map 3</span>
                                          </button>
                                          <div id="detaislaccor75" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">84.5</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">8.40</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor76" aria-expanded="false" aria-controls="detaislaccor76">
                                             <span>Bomb will be planted on 1 round on map 1</span>
                                          </button>
                                          <div id="detaislaccor76" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>FURIA</span>
                                                      <span className="num">5.2</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>OutSiders</span>
                                                      <span className="num">14.0</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor77" aria-expanded="false" aria-controls="detaislaccor77">
                                             <span>Bomb will be planted on 1 round on map 2</span>
                                          </button>
                                          <div id="detaislaccor77" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Yes</span>
                                                      <span className="num">1.25</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>No</span>
                                                      <span className="num">20.9</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor78" aria-expanded="false" aria-controls="detaislaccor78">
                                             <span>Knife kill on map 1</span>
                                          </button>
                                          <div id="detaislaccor78" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Yes</span>
                                                      <span className="num">4.85</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>No</span>
                                                      <span className="num">1.59</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div className="accordion-item">
                                       <div className="accordion-header">
                                          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#detaislaccor79" aria-expanded="false" aria-controls="detaislaccor79">
                                             <span>Knife kill on map 3</span>
                                          </button>
                                          <div id="detaislaccor79" className="accordion-collapse collapse show">
                                             <div className="accordion-body">
                                                <div className="body-items">
                                                   <Link href="#0" className="item">
                                                      <span>Yes</span>
                                                      <span className="num">5.40</span>
                                                   </Link>
                                                   <Link href="#0" className="item">
                                                      <span>No</span>
                                                      <span className="num">1.09</span>
                                                   </Link>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         {/* <!--Banner--> */}

         {/* <!--Sponsor Section--> */}
         <Sponsor />
      </>
   );
};

export default details;