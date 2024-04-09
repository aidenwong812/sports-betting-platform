import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import ModalVideo from 'react-modal-video';
import { useState } from 'react';
import Sponsor from '@/components/Sponsor';
const efootballMatchData = [
   {
      id: 1,
      title: 'Cyberfootball. eSports Battle. Europa League',
      team1: 'Leicester City (Bulka)',
      team2: 'Monaco (djamik_afc)',
      img: '/img/table/play01.png'
   },
   {
      id: 2,
      title: 'Cyberbasketball. NBA 2K League',
      team1: 'Los Angeles Lakers (KingPinned)',
      team2: 'Golden State Warriors (LukaDoncic)',
      img: '/img/table/play02.png'
   },
   {
      id: 3,
      title: 'Cyberhockey. Stanley Cup Finals',
      team1: 'Tampa Bay Lightning (Iceman)',
      team2: 'Montreal Canadiens (GoalieGuy)',
      img: '/img/table/play03.png'
   },
   {
      id: 4,
      title: 'Cyberbaseball. MLB Championship',
      team1: 'New York Yankees (Slugger)',
      team2: 'Houston Astros (AcePitcher)',
      img: '/img/table/play04.png'
   },
   {
      id: 5,
      title: 'Cybersoccer. Champions League',
      team1: 'Real Madrid (Ronaldo7)',
      team2: 'Manchester City (PepG)',
      img: '/img/table/play09.png'
   },
   {
      id: 6,
      title: 'Cyberfootball. FIFA World Cup',
      team1: 'Brazil (NeymarJr)',
      team2: 'Germany (Kroos)',
      img: '/img/table/play06.png'
   },
   {
      id: 7,
      title: 'Cyberbasketball. WNBA Finals',
      team1: 'Seattle Storm (SueBird)',
      team2: 'Connecticut Sun (TinaCharles)',
      img: '/img/table/play07.png'
   },
   {
      id: 8,
      title: 'Cyberhockey. NHL All-Star Game',
      team1: 'Atlantic Division (Kucherov)',
      team2: 'Pacific Division (McDavid)',
      img: '/img/table/play08.png'
   },
   {
    id: 9,
    title: 'Cyberfootball. Premier League',
    team1: 'Manchester United (Pogba)',
    team2: 'Liverpool (Salah)',
    img: '/img/table/play09.png'
  },
  {
    id: 10,
    title: 'Cyberbasketball. EuroLeague',
    team1: 'CSKA Moscow (MilosTeodosic)',
    team2: 'Real Madrid (Llull)',
    img: '/img/table/play10.png'
  },
  {
    id: 11,
    title: 'Cybersoccer. World Cup Qualifiers',
    team1: 'Argentina (Messi)',
    team2: 'France (Mbappe)',
    img: '/img/table/play11.png'
  },
  {
    id: 12,
    title: 'Cyberhockey. KHL Playoffs',
    team1: 'SKA Saint Petersburg (Kovalchuk)',
    team2: 'AK Bars Kazan (Zaripov)',
    img: '/img/table/play12.png'
  }
]


const efootball = () => {
   const [isOpen, setOpen] = useState(false);
   return (
      <>
         <BreadCrumb title="Efootball" />
         {/* <!--Breadcumnd--> */}

         {/* <!--Main-body-tabing--> */}
         <div className="main-body-tabbing ">
            <div className="container">
               <div className="main-tabbing">
                  <div className="tab-content" id="tabContentmain">
                     {/* <!--all tab start--> */}
                     <div className="tab-pane fade show active" id="betsall" role="tabpanel">
                        <div className="match-table">
                           {/* <!--table five--> */}
                           <div className="match-table-head">
                              <h3>
                                 Live events
                              </h3>
                           </div>
                           <div className="table-wrap">
                              {
                                 efootballMatchData.map(({ id, img, team1, team2, title }) => (
                                    <div key={id} className="table-inner efootball-customize">
                                       <div className="table-head">
                                          <Link href="details" className="left-compo">
                                             <span>
                                                <i className="icon-football"></i>
                                             </span>
                                             <span className="leuge-title">
                                                {title}
                                             </span>
                                          </Link>
                                          <ul className="right-compo">
                                             <li className="dotsred">
                                                Half 2'47
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
                                                   <Link href="#0">
                                                      <span className="icon">
                                                         <i className="icon-football"></i>
                                                      </span>
                                                      <span>{team1}</span>
                                                   </Link>
                                                </div>
                                                <div className="items">
                                                   <Link href="#0">
                                                      <span className="icon">
                                                         <i className="icon-football"></i>
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
                           {/* <!--Prematch--> */}

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

export default efootball;