import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import ModalVideo from 'react-modal-video'
import { useState } from 'react';
import Sponsor from '@/components/Sponsor';
const ehockyData = [
   {
      id: 1,
      title: 'Cyberhockey. EHC CUP (3x4 MиH.)',
      team1: { name: 'Pittsburgh Penguins (Chuga)', score: 2 },
      team2: { name: 'Nashville Predators (Alpha)', score: 4 },
      img: "/img/table/play01.png"
   },
   {
      id: 2,
      title: 'Cyberhockey. EHC CUP (3x4 MиH.))',
      team1: { name: 'Los Angeles Lakers', score: 110 },
      team2: { name: 'New York Knicks', score: 96 },
      img: "/img/table/play02.png"
   },
   {
      id: 3,
      title: 'Football. UEFA Champions League (11x11)',
      team1: { name: 'Real Madrid', score: 2 },
      team2: { name: 'Paris Saint-Germain', score: 1 },
      img: "/img/table/play03.png"
   },
   {
      id: 4,
      title: 'Cyber Hockey. F5 Hockey World Champio.',
      team1: { name: 'Boston Red Sox', score: 3 },
      team2: { name: 'New York Yankees', score: 4 },
      img: "/img/table/play13.png"
   },
   {
      id: 5,
      title: 'Soccer. English Premier League (11x11)',
      team1: { name: 'Manchester City', score: 1 },
      team2: { name: 'Liverpool', score: 1 },
      img: "/img/table/play14.png"
   },
   {
      id: 6,
      title: 'Cyberhockey. EHC CUP (3x4 MиH.)',
      team1: { name: 'Justify', score: 1 },
      team2: { name: 'Good Magic', score: 2 },
      img: "/img/table/play06.png"
   },
   {
      id: 7,
      title: 'Golf. The Masters Tournament',
      team1: { name: 'Tiger Woods', score: -13 },
      team2: { name: 'Dustin Johnson', score: -12 },
      img: "/img/table/play07.png"
   },
   {
      id: 8,
      title: 'Tennis. Wimbledon',
      team1: { name: 'Roger Federer', score: 6 },
      team2: { name: 'Novak Djokovic', score: 4 },
      img: "/img/table/play08.png"
   },
   {
      id: 9,
      title: 'Boxing. Heavyweight Championship',
      team1: { name: 'Anthony Joshua', score: 4 },
      team2: { name: 'Tyson Fury', score: 2 },
      img: "/img/table/play09.png"
   },
   {
      id: 10,
      title: 'MMA. UFC 264: Poirier vs. McGregor 3',
      team1: { name: 'Dustin Poirier', score: 4 },
      team2: { name: 'Conor McGregor', score: 5 },
      img: "/img/table/play10.png"
   },
   {
      id: 11,
      title: 'Ice Skating Competition: Men\'s Singles',
      team1: { name: 'Yuzuru Hanyu (Japan)', score: 322.59 },
      team2: { name: 'Nathan Chen (USA)', score: 299.15 },
      img: '/img/table/play11.png'
   },
   {
      id: 12,
      title: 'Rugby Match: New Zealand vs South Africa',
      team1: { name: 'New Zealand', score: 32 },
      team2: { name: 'South Africa', score: 12 },
      img: '/img/table/play12.png'
   },
]
const ehocky = () => {
   const [isOpen, setOpen] = useState(false)
   return (
      <>
         <BreadCrumb title='Ehocky' />
         {/* <!--Breadcumnd--> */}

         {/* <!--Main-body-tabing--> */}
         <div className="main-body-tabbing">
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
                              {ehockyData.map(({id,img,team1,team2,title }) => (
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
                                             Live
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
                                                      <i className="icon-hockyman"></i>
                                                   </span>
                                                   <span>{team1.name}</span>
                                                </Link>
                                             </div>
                                             <div className="items">
                                                <Link href="#0">
                                                   <span className="icon">
                                                      <i className="icon-hockyman"></i>
                                                   </span>
                                                   <span>{team2.name})</span>
                                                </Link>
                                             </div>
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
                                          <Link onClick={()=>setOpen(true)} href="#" className="table-pointing-box video-btn">
                                             <span className="basketman">
                                                <img src={img} alt="img" />
                                             </span>
                                          </Link>
                                       </div>
                                    </div>
                                 </div>
                              ))}
                           </div>
                           {/* <!--table five--> */}
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

export default ehocky;