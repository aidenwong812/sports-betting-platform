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
      "Tommorrow": [{
         id: 1,
         img: '/img/table/boxings.png',
         title: 'Boxing',
         team1: { name: 'Cornell Big Red', img: '' },
         team2: { name: 'Harvard Crimson', img: '/img/table/argentina.png' }
      },
      {
         id: 2,
         img: '/img/table/boxings.png',
         title: 'Boxing',
         team2: { name: 'Rutgers Scarlet Knights', img: '/img/table/cesarus.png' },
         team1: { name: 'Nebraska Cornhuskers', img: '/img/table/armenta.png' }
      },
      {
         id: 3,
         img: '/img/table/boxings.png',
         title: 'Boxing',
         team1: { name: 'Hamilton Tiger Cats', img: '' },
         team2: { name: 'Saskatchewan', img: '/img/table/murray.png' }
      },
      {
         id: 4,
         img: '/img/table/boxings.png',
         title: 'Boxing',
         team1: { name: 'Memphis Tigers', img: '/img/table/cesarus.png' },
         team2: { name: 'Houston Cougars', img: '' }
      },
      {
         id: 5,
         img: '/img/table/boxings.png',
         title: 'Boxing',
         team1: { name: 'Nevada Wolf Pack', img: '/img/table/argentina.png' },
         team2: { name: 'Colorado St. Rams', img: '/img/table/murray.png' }
      },
      {
         id: 6,
         img: '/img/table/boxings.png',
         title: 'Boxing',
         team1: { name: 'San Jose St. Spartans', img: '' },
         team2: { name: 'UNLV Rebels', img: '' }
      },
      {
         id: 7,
         img: '/img/table/boxings.png',
         title: 'Boxing',
         team1: { name: 'Indiana Hossiars', img: '/img/table/j-man.png' },
         team2: { name: 'Michigan Wolverines', img: '/img/table/armenta.png' }
      },
      {
         id: 8,
         img: '/img/table/boxings.png',
         title: 'Boxing',
         team1: { name: 'Florida Gators', img: '/img/table/j-man.png' },
         team2: { name: 'Missouri Tigers', img: '' }
      },
      {
         id: 9,
         img: '/img/table/boxings.png',
         title: 'Boxing',
         team1: { name: 'Oklahoma Sooners', img: '' },
         team2: { name: 'Texas Longhorns', img: '' }
      },
      {
         id: 10,
         img: '/img/table/boxings.png',
         title: 'Boxing',
         team1: { name: 'Kansas Jayhawks', img: '/img/table/argentina.png' },
         team2: { name: 'TCU Horned Frogs', img: '' }
      }
      ]
   },
   {
      "Prematch 16.10.2023": [
         {
            id: 11,
            img: '/img/table/boxings.png',
            title: 'Boxing',
            team1: { name: 'Pittsburgh Panthers', img: '/img/table/cesarus.png' },
            team2: { name: 'Verginia Tech Hockies', img: '/img/table/mairena.png' }
         },
         {
            id: 12,
            img: '/img/table/boxings.png',
            title: 'Boxing',
            team1: { name: 'UAB blazers', img: '/img/table/cesarus.png' },
            team2: { name: 'Virginia Tech Hokies', img: '' }
         },
         {
            id: 13,
            img: '/img/table/boxings.png',
            title: 'Boxing',
            team1: { name: 'Tulane Green Wave', img: '/img/table/murray.png' },
            team2: { name: 'East Carolina Pirates', img: '' }
         }, {
            id: 14,
            img: '/img/table/boxings.png',
            title: 'Boxing Fight Night',
            team1: { name: 'Tulane Green Waves', img: '' },
            team2: { name: 'Toledo Rockets', img: '/img/table/mairena.png' }
         },
      ]
   },
   {
      "Prematch 18.10.2023": [,
         {
            id: 15,
            img: '/img/table/boxings.png',
            title: 'Boxing Fight Night',
            team1: { name: 'Carolina Panthers', img: '/img/table/carolina.png' },
            team2: { name: 'San Francisco Tigers', img: '/img/table/sfsan.png' }
         },
         {
            id: 16,
            img: '/img/table/boxings.png',
            title: 'Boxing Fight Night',
            team1: { name: 'Los Angeles Rams', img: '/img/table/la.png' },
            team2: { name: 'Dallas Cowboys', img: '/img/table/dallas.png' }
         },
         {
            id: 17,
            img: '/img/table/boxings.png',
            title: 'Boxing Fight Night',
            team1: { name: 'Arizona Cardinals', img: '/img/table/arizona.png' },
            team2: { name: 'Dallas Cowboys', img: '/img/table/philadelphia.png' }
         },
         {
            id: 18,
            img: '/img/table/boxings.png',
            title: 'Boxing Fight Night',
            team1: { name: 'Baltimore Ravens', img: '/img/table/ravens-b.png' },
            team2: { name: 'Cincinnati Bengals', img: '/img/table/b.png' }
         }
      ]
   },
   {
      "Prematch 20.10.2023": [
         {
            id: 19,
            img: '/img/table/boxings.png',
            title: 'Boxing Fight Night',
            team1: { name: 'Kansas City Chiefs', img: '/img/table/carolina.png' },
            team2: { name: 'Las Vegas Raiders', img: '/img/table/sfsan.png' }
         }
      ]
   },
   {
      "Prematch 22.10.2023": [
         {
            id: 20,
            img: '/img/table/boxings.png',
            title: 'Boxing Fight Night',
            team1: { name: 'Chicago Bears', img: '/img/table/pepe.png' },
            team2: { name: 'Washigton Commanders', img: '/img/table/w.png' }
         }
      ]
   },
   {
      "Prematch 24.10.2023": [
         {
            id: 21,
            img: '/img/table/boxings.png',
            title: 'Boxing Fight Night',
            team1: { name: 'Miami Dolphins', img: '/img/table/dolphin.png' },
            team2: { name: 'Minnesota Vikings', img: '/img/table/minners.png' }
         },
         {
            id: 22,
            img: '/img/table/boxings.png',
            title: 'Boxing Fight Night',
            team1: { name: 'Pittsburgh Steelers', img: '/img/table/steelers.png' },
            team2: { name: 'Tampa Bay Buccaneers', img: '/img/table/buccanee.png' }
         },
      ]
   },
]


const boxing = () => {
   return (
      <>
         <BreadCrumb title="Boxing" />
         {/* <!--Breadcumnd--> */}

         {/* <!--Main-body-tabing--> */}
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
                                                               {singleItem.team1.img ? <img src={singleItem.team1.img} alt="" /> : <i className='icon-boxing'></i>}
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
                                                               {singleItem.team2.img ? <img src={singleItem.team2.img} alt="" /> : <i className='icon-boxing'></i>}
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

export default boxing;