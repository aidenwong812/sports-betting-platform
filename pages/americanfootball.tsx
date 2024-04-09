import BreadCrumb from '@/components/BreadCrumb';
import Sponsor from '@/components/Sponsor';
import Link from 'next/link';
import React from 'react';
interface matchInterface {
   id: number;
   img: string;
   title: string;
   team1: {
      name: string;
      img: string;
   },
   team2: {
      name: string;
      img: string;
   }
}
const matchData = [
   {
      "Tommorrow": [{
         id: 1,
         img: '/img/table/ncaa.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Cornell Big Red', img: '/img/table/cornell.png' },
         team2: { name: 'Harvard Crimson', img: '/img/table/crimson.png' }
      },
      {
         id: 2,
         img: '/img/table/ncaa.png',
         title: 'Mixed Martial Arts. KSW',
         team2: { name: 'Rutgers Scarlet Knights', img: '/img/table/rr.png' },
         team1: { name: 'Nebraska Cornhuskers', img: '/img/table/nn.png' }
      },
      {
         id: 3,
         img: '/img/table/cfl.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Hamilton Tiger Cats', img: '/img/table/catstiger.png' },
         team2: { name: 'Saskatchewan', img: '/img/table/saska.png' }
      },
      {
         id: 4,
         img: '/img/table/ncaa.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Memphis Tigers', img: '/img/table/m-tiger.png' },
         team2: { name: 'Houston Cougars', img: '/img/table/uh.png' }
      },
      {
         id: 5,
         img: '/img/table/ncaa.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Nevada Wolf Pack', img: '/img/table/pack.png' },
         team2: { name: 'Colorado St. Rams', img: '/img/table/rams.png' }
      },
      {
         id: 6,
         img: '/img/table/ncaa.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'San Jose St. Spartans', img: '/img/table/jose.png' },
         team2: { name: 'UNLV Rebels', img: '/img/table/unlv.png' }
      },
      {
         id: 7,
         img: '/img/table/ncaa.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Indiana Hossiars', img: '/img/table/petra.png' },
         team2: { name: 'Michigan Wolverines', img: '' }
      },
      {
         id: 8,
         img: '/img/table/ncaa.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Florida Gators', img: '/img/table/hoosiers.png' },
         team2: { name: 'Missouri Tigers', img: '/img/table/m-logo.png' }
      },
      {
         id: 9,
         img: '/img/table/ncaa.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Oklahoma Sooners', img: '/img/table/gators.png' },
         team2: { name: 'Texas Longhorns', img: '/img/table/missouri.png' }
      },
      {
         id: 10,
         img: '/img/table/ncaa.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Kansas Jayhawks', img: '/img/table/qu.png' },
         team2: { name: 'TCU Horned Frogs', img: '/img/table/caw.png' }
      }
      ]
   },
   {
      "Prematch 16.10.2023": [
         {
            id: 11,
            img: '/img/table/ncaa.png',
            title: 'Mixed Martial Arts. KSW',
            team1: { name: 'Pittsburgh Panthers', img: '/img/table/kansas.png' },
            team2: { name: 'Verginia Tech Hockies', img: '/img/table/tcu.png' }
         },
         {
            id: 12,
            img: '/img/table/ncaa.png',
            title: 'Mixed Martial Arts. KSW',
            team1: { name: 'UAB blazers', img: '/img/table/tulance.png' },
            team2: { name: 'Virginia Tech Hokies', img: '/img/table/toledos.png' }
         },
         {
            id: 13,
            img: '/img/table/cfl.png',
            title: 'Mixed Martial Arts. KSW',
            team1: { name: 'Tulane Green Wave', img: '/img/table/pitt.png' },
            team2: { name: 'East Carolina Pirates', img: '/img/table/vt.png' }
         }, {
            id: 14,
            img: '/img/table/ncaa.png',
            title: 'Mixed Martial Arts. MMA Fight Night',
            team1: { name: 'Tulane Green Waves', img: '/img/table/uabs.png' },
            team2: { name: 'Toledo Rockets', img: '/img/table/ecu.png' }
         },
      ]
   },
   {
      "Prematch 18.10.2023": [,
         {
            id: 15,
            img: '/img/table/nfl.png',
            title: 'Mixed Martial Arts. MMA Fight Night',
            team1: { name: 'Carolina Panthers', img: '/img/table/carolina.png' },
            team2: { name: 'San Francisco Tigers', img: '/img/table/sfsan.png' }
         },
         {
            id: 16,
            img: '/img/table/nfl.png',
            title: 'Mixed Martial Arts. MMA Fight Night',
            team1: { name: 'Los Angeles Rams', img: '/img/table/la.png' },
            team2: { name: 'Dallas Cowboys', img: '/img/table/dallas.png' }
         },
         {
            id: 17,
            img: '/img/table/nfl.png',
            title: 'Mixed Martial Arts. MMA Fight Night',
            team1: { name: 'Arizona Cardinals', img: '/img/table/arizona.png' },
            team2: { name: 'Dallas Cowboys', img: '/img/table/philadelphia.png' }
         },
         {
            id: 18,
            img: '/img/table/nfl.png',
            title: 'Mixed Martial Arts. MMA Fight Night',
            team1: { name: 'Baltimore Ravens', img: '/img/table/ravens-b.png' },
            team2: { name: 'Cincinnati Bengals', img: '/img/table/b.png' }
         }
      ]
   },
   {
      "Prematch 20.10.2023": [
         {
            id: 19,
            img: '/img/table/nfl.png',
            title: 'Mixed Martial Arts. MMA Fight Night',
            team1: { name: 'Kansas City Chiefs', img: '/img/table/carolina.png' },
            team2: { name: 'Las Vegas Raiders', img: '/img/table/sfsan.png' }
         }
      ]
   },
   {
      "Prematch 22.10.2023": [
         {
            id: 20,
            img: '/img/table/nfl.png',
            title: 'Mixed Martial Arts. MMA Fight Night',
            team1: { name: 'Chicago Bears', img: '/img/table/pepe.png' },
            team2: { name: 'Washigton Commanders', img: '/img/table/w.png' }
         }
      ]
   },
   {
      "Prematch 24.10.2023": [
         {
            id: 21,
            img: '/img/table/nfl.png',
            title: 'Mixed Martial Arts. MMA Fight Night',
            team1: { name: 'Miami Dolphins', img: '/img/table/dolphin.png' },
            team2: { name: 'Minnesota Vikings', img: '/img/table/minners.png' }
         },
         {
            id: 22,
            img: '/img/table/nfl.png',
            title: 'Mixed Martial Arts. MMA Fight Night',
            team1: { name: 'Pittsburgh Steelers', img: '/img/table/steelers.png' },
            team2: { name: 'Tampa Bay Buccaneers', img: '/img/table/buccanee.png' }
         },
      ]
   },
]
const americanfootball = () => {
   return (
      <>
         <BreadCrumb title='American Football' />

         <div className="main-body-tabbing">
            <div className="container">
               <div className="main-tabbing">
                  <div className="tab-content" id="tabContentmain">
                     {/* <!--all tab start--> */}
                     <div className="tab-pane fade show active" id="betsall" role="tabpanel">
                        <div className="match-table">
                           {matchData.map((item, index) => (
                              <div key={index}>
                                 {Object.entries(item).map(([key, value]) => (
                                    <div key={key}>
                                       <div className="match-table-head pt-20 pb-20">
                                          <h2>{key} </h2>
                                       </div>
                                       <div className="table-wrap mb-5">
                                          {value.map((singleItem: matchInterface) => (
                                             <div key={singleItem.id} className="table-inner">
                                                <div className="table-head">
                                                   <Link href="details" className="left-compo">
                                                      <span>
                                                         <img src={singleItem.img} alt="icon" />
                                                      </span>
                                                      <span>{singleItem.title} </span>
                                                   </Link>
                                                   <ul className="right-compo">
                                                      <li>
                                                         Live in: 29m
                                                      </li>
                                                      <li>
                                                         Match Winner
                                                      </li>
                                                      <li>
                                                         Total maps
                                                      </li>
                                                   </ul>
                                                </div>
                                                <div className="table-body">
                                                   <ul className="table-body-left">
                                                      <li>
                                                         <Link href="#0">
                                                            <span>{singleItem.team1.name}</span>
                                                            <span className="icon">
                                                               <img src={singleItem.team1.img} alt="" />
                                                            </span>
                                                         </Link>
                                                      </li>
                                                      <li>
                                                         <Link href="#0" className="vs">
                                                            VS
                                                         </Link>
                                                      </li>
                                                      <li>
                                                         <Link href="#0">
                                                            <span className="icon">
                                                               <img src={singleItem.team2.img} alt="" />
                                                            </span>
                                                            <span>{singleItem.team2.name}</span>
                                                         </Link>
                                                      </li>
                                                   </ul>
                                                   <div className="table-body-right">
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">1</span>
                                                         <span>1.29</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">X</span>
                                                         <span>2.9</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">O</span>
                                                         <span>1.84</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">U 2.5</span>
                                                         <span>5.7</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="last-digit">+44</span>
                                                      </Link>
                                                   </div>
                                                </div>
                                             </div>
                                          ))}
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           ))}
                        </div>
                     </div>
                     {/* <!--all tab End--> */}
                  </div>
               </div>
            </div>
         </div>
         {/* Sponsor Secton */}
         <Sponsor />
      </>
   );
};

export default americanfootball;