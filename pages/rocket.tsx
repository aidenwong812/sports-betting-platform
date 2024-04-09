import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import Sponsor from '@/components/Sponsor';

const matchData = [{
   id: 1,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team1: { name: 'Moist Esports', img: '/img/table/moist.png' },
   team2: { name: 'Harvard Crimson', img: '' }
},
{
   id: 2,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team2: { name: 'Rutgers Scarlet Knights', img: '/img/table/evil.png' },
   team1: { name: 'Nebraska Cornhuskers', img: '' }
},
{
   id: 3,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team1: { name: 'Hamilton Tiger Cats', img: '/img/table/sonq1.png' },
   team2: { name: 'Saskatchewan', img: '/img/table/sonq2.png' }
},
{
   id: 4,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team1: { name: 'Memphis Tigers', img: '/img/table/karmine.png' },
   team2: { name: 'Houston Cougars', img: '/img/table/guid.png' }
},
{
   id: 5,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team1: { name: 'Nevada Wolf Pack', img: '' },
   team2: { name: 'Colorado St. Rams', img: '' }
},
{
   id: 6,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team1: { name: 'San Jose St. Spartans', img: '' },
   team2: { name: 'UNLV Rebels', img: '' }
},
{
   id: 7,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team1: { name: 'Indiana Hossiars', img: '/img/table/oxygen.png' },
   team2: { name: 'Michigan Wolverines', img: '' }
},
{
   id: 8,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team1: { name: 'Florida Gators', img: '' },
   team2: { name: 'Missouri Tigers', img: '/img/table/vitality.png' }
},
{
   id: 9,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team1: { name: 'Oklahoma Sooners', img: '/img/table/valence33.png' },
   team2: { name: 'Texas Longhorns', img: '' }
},
{
   id: 10,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team1: { name: 'Kansas Jayhawks', img: '/img/table/furia.png' },
   team2: { name: 'TCU Horned Frogs', img: '' }
},
{
   id: 11,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team1: { name: 'Pittsburgh Panthers', img: '' },
   team2: { name: 'Verginia Tech Hockies', img: '' }
},
{
   id: 12,
   img: '/img/table/rocket-l.png',
   title: 'Rocket League. RLCS. EU',
   team1: { name: 'UAB blazers', img: '' },
   team2: { name: 'Virginia Tech Hokies', img: '' }
}
]

const rocket = () => {
   return (
      <>
         <BreadCrumb title="Rocket" />
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
                                 Today
                              </h3>
                           </div>
                           <div className="table-wrap">
                              {
                                 matchData.map(({ id, img, team1, team2, title }) => (
                                    <div key={id} className="table-inner">
                                       <div className="table-head">
                                          <Link href="details" className="left-compo">
                                             <span>
                                                <img src={img} alt="img" />
                                             </span>
                                             <span>{title} </span>
                                          </Link>
                                          <ul className="right-compo">
                                             <li>
                                                21:45
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
                                                <Link href="#0">
                                                   <span>{team1.name}</span>
                                                   <span className="icon">
                                                      <img src={team1.img ? team1.img : "/img/table/heet.png"} alt="img" />
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
                                                      <img src={team2.img ? team2.img : "/img/table/heet.png"} alt="img" />
                                                   </span>
                                                   <span>{team2.name}</span>
                                                </Link>
                                             </li>
                                          </ul>
                                          <div className="table-body-right">
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">1</span>
                                                <span>1.05</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">2</span>
                                                <span>7.91</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">-</span>
                                                <span>-</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">-</span>
                                                <span>-</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="last-digit">+16</span>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 ))
                              }
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
      </>
   );
};

export default rocket;