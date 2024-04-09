import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import Sponsor from '@/components/Sponsor';

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
      "Today": [{
         id: 1,
         img: '/img/table/sky.png',
         title: 'Saturday Championship League',
         team1: { name: 'Cornell Big Red', img: '' },
         team2: { name: 'Harvard Crimson', img: '' }
      },
      {
         id: 2,
         img: '/img/table/sky.png',
         title: 'Saturday Championship League',
         team2: { name: 'Rutgers Scarlet Knights', img: '' },
         team1: { name: 'Nebraska Cornhuskers', img: '' }
      },
      {
         id: 3,
         img: '',
         title: 'Saturday Championship League',
         team1: { name: 'Hamilton Tiger Cats', img: '' },
         team2: { name: 'Saskatchewan', img: '' }
      },
      {
         id: 4,
         img: '',
         title: 'Saturday Championship League',
         team1: { name: 'New Zeland', img: '/img/table/details/newzeland.png' },
         team2: { name: 'Pakistan', img: '/img/table/pakistan.png' }
      },
      {
         id: 5,
         img: '',
         title: 'Saturday Championship League',
         team1: { name: 'India', img: '/img/table/india.png' },
         team2: { name: 'Bangladesh', img: '/img/table/bangladesh.png' }
      },
      {
         id: 6,
         img: '',
         title: 'Saturday Championship League',
         team1: { name: 'San Jose St. Spartans', img: '' },
         team2: { name: 'UNLV Rebels', img: '' }
      },
      {
         id: 7,
         img: '/img/table/boxings.png',
         title: 'Saturday Championship League',
         team1: { name: 'Indiana Hossiars', img: '' },
         team2: { name: 'Michigan Wolverines', img: '' }
      },

      ]
   },
   {
      "Tomorrow": [{
         id: 8,
         img: '/img/table/sky.png',
         title: 'Saturday Championship League',
         team1: { name: 'Florida Gators', img: '' },
         team2: { name: 'Missouri Tigers', img: '' }
      },
      {
         id: 9,
         img: '/img/table/sky.png',
         title: 'Saturday Championship League',
         team1: { name: 'Oklahoma Sooners', img: '' },
         team2: { name: 'Texas Longhorns', img: '' }
      },
      {
         id: 10,
         img: '',
         title: 'Saturday Championship League',
         team1: { name: 'Kansas Jayhawks', img: '' },
         team2: { name: 'TCU Horned Frogs', img: '' }
      },
      {
         id: 11,
         img: '',
         title: 'Saturday Championship League',
         team1: { name: 'New Zeland', img: '/img/table/details/newzeland.png' },
         team2: { name: 'Pakistan', img: '/img/table/pakistan.png' }
      },
      {
         id: 12,
         img: '',
         title: 'Saturday Championship League',
         team1: { name: 'India', img: '/img/table/india.png' },
         team2: { name: 'Bangladesh', img: '/img/table/bangladesh.png' }
      },

      ]
   },
   {
      "Prematch 20.10.2023": [
         {
            id: 19,
            img: '/img/table/nfl.png',
            title: 'Saturday Championship League Fight Night',
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
            title: 'Saturday Championship League Fight Night',
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
            title: 'Saturday Championship League Fight Night',
            team1: { name: 'Miami Dolphins', img: '/img/table/dolphin.png' },
            team2: { name: 'Minnesota Vikings', img: '/img/table/minners.png' }
         },
         {
            id: 22,
            img: '/img/table/nfl.png',
            title: 'Saturday Championship League Fight Night',
            team1: { name: 'Pittsburgh Steelers', img: '/img/table/steelers.png' },
            team2: { name: 'Tampa Bay Buccaneers', img: '/img/table/buccanee.png' }
         },
      ]
   },
]
const cricket = () => {
   return (
      <>
         <BreadCrumb title='Cricket' />
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
                           <div className="table-wrap mb-5">
                              <div className="table-inner efootball-customize">
                                 <div className="table-head">
                                    <Link href="details" className="left-compo">
                                       <span>
                                          <img src="/img/table/marsh.png" alt="img" />
                                       </span>
                                       <span className="leuge-title">
                                          Sheffield Shield
                                       </span>
                                    </Link>
                                    <ul className="right-compo">
                                       <li className="dotsred">
                                          Innings 2
                                       </li>
                                       <li>
                                          Match Winner
                                       </li>
                                       <li>
                                          Tasmanian Tigers total runs bef...
                                       </li>
                                    </ul>
                                 </div>
                                 <div className="table-body">
                                    <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                                       <div className="ebasket-left">
                                          <div className="items">
                                             <Link href="#0">
                                                <span className="icon">
                                                   <img src="/img/table/bulls.png" alt="img" />
                                                </span>
                                                <span>Queensland Bulls</span>
                                             </Link>
                                          </div>
                                          <div className="items">
                                             <Link href="#0">
                                                <span className="icon">
                                                   <img src="/img/table/tiger.png" alt="img" />
                                                </span>
                                                <span>Tasmanian Tigers</span>
                                             </Link>
                                          </div>
                                       </div>
                                       <div className="ebasket-right-content">
                                          <Link href="#0"><span className="blods">458</span> H1 H2</Link>
                                          <Link href="#0">10</Link>
                                          <Link href="#0"><span className="blods">201</span> 10</Link>
                                       </div>
                                    </div>
                                    <div className="table-body-right">
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">-</span>
                                          <span>-</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">-</span>
                                          <span>-</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">O 40.5</span>
                                          <span>1.85</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">U 40.5</span>
                                          <span>1.80</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="last-digit">+18</span>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
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
                                                         {singleItem.img ? <img src={singleItem.img} alt="icon" /> : <i className="icon-cricket"></i>}
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
                                                               {singleItem.team1.img ? <img src={singleItem.team1.img} alt="" /> : <i className='icon-cricket'></i>}
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
                                                               {singleItem.team2.img ? <img src={singleItem.team2.img} alt="" /> : <i className='icon-cricket'></i>}
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
         {/* <!--Main-body-tabing--> */}

         {/* <!--Sponsor Section--> */}
         <Sponsor />
      </>
   );
};

export default cricket;