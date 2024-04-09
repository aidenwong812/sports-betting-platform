import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import ModalVideo from 'react-modal-video'
import { useState } from 'react';
import Sponsor from '@/components/Sponsor';
const liveEvents = [
   {
      id: 1,
      title: 'IWT E-tennis Series',
      team1: 'Leicester City (Bulka)',
      team2: 'Monaco (djamik_afc)',
      img: '/img/table/te1.png'
   },
   {
      id: 2,
      title: 'IWT E-tennis Series',
      team1: 'Bayer 04 Leverkusen (Andy_M)',
      team2: 'Real Sociedad (Papa_blond)',
      img: '/img/table/te2.png'
   },
   {
      id: 3,
      title: 'IWT E-tennis Series',
      team1: 'Manchester United (ECF_DaVa)',
      team2: 'Tottenham Hotspur (ECF_dm1trena)',
      img: '/img/table/te3.png'
   },
]

const etennis = () => {
   const [isOpen, setOpen] = useState(false)
   return (
      <>
         <BreadCrumb title='Etennis' />
         <div className="main-body-tabbing ">
            <div className="container">
               <div className="main-tabbing">
                  <div className="tab-content" id="tabContentmain">
                     {/* <!--all tab start--> */}
                     <div className="tab-pane fade show active" id="betsall" role="tabpanel">
                        <div className="match-table">
                           {/* <!--table five--> */}
                           <div className="match-table-head mt-span-7 mb-3">
                              <h3>
                                 Live events
                              </h3>
                           </div>
                           <div className="table-wrap">
                              {liveEvents.map(({ id, title, img, team1, team2 }) => (
                                 <div key={id} className="table-inner efootball-customize">
                                    <div className="table-head">
                                       <Link href="details" className="left-compo">
                                          <span>
                                             <i className="icon-etennis"></i>
                                          </span>
                                          <span className="leuge-title">{title} </span>
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
                                                <Link href="#0">
                                                   <span className="icon">
                                                      <i className="icon-etennis"></i>
                                                   </span>
                                                   <span>{team1}</span>
                                                </Link>
                                             </div>
                                             <div className="items">
                                                <Link href="#0">
                                                   <span className="icon">
                                                      <i className="icon-etennis"></i>
                                                   </span>
                                                   <span>{team2}</span>
                                                </Link>
                                             </div>
                                          </div>
                                          <div className="ebasket-right-content">
                                             <Link href="#0"><span className="blods">1</span> H1 H2</Link>
                                             <Link href="#0">10</Link>
                                             <Link href="#0"><span className="blods">1</span> 10</Link>
                                          </div>
                                       </div>
                                       <div className="table-body-right">
                                          <Link href="#0" className="table-pointing-box">
                                             <span className="list">1</span>
                                             <span>5.05</span>
                                          </Link>
                                          <Link href="#0" className="table-pointing-box">
                                             <span className="list">X</span>
                                             <span>7.10</span>
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
                                          <Link onClick={() => setOpen(true)} href="#" className="table-pointing-box video-btn">
                                             <span className="basketman">
                                                <img src={img} alt="img" />
                                             </span>
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                           {/* <!--Prematch--> */}

                        </div>
                     </div>
                     {/* <!--all tab End--> */}
                  </div>
               </div>
            </div>
         </div>
        {/* Sponsor Section */}
        <Sponsor />
         <ModalVideo channel='youtube' isOpen={isOpen} videoId="Qg6zu49kXSA" onClose={() => setOpen(false)} />
      </>
   );
};

export default etennis;