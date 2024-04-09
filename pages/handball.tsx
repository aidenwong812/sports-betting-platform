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
         img: '/img/table/suppur-liga.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Cornell Big Red', img: '/img/table/mks.png' },
         team2: { name: 'Harvard Crimson', img: '' }
      },
      {
         id: 2,
         img: '',
         title: 'Mixed Martial Arts. KSW',
         team2: { name: 'Rutgers Scarlet Knights', img: '/img/table/naerbo.png' },
         team1: { name: 'Nebraska Cornhuskers', img: '' }
      },
      {
         id: 3,
         img: '',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Hamilton Tiger Cats', img: '/img/table/rc-trimo.png' },
         team2: { name: 'Saskatchewan', img: '/img/table/ribnica.png' }
      },
      {
         id: 4,
         img: '',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Memphis Tigers', img: '' },
         team2: { name: 'Houston Cougars', img: '/img/table/handbold.png' }
      },
      {
         id: 5,
         img: '',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Nevada Wolf Pack', img: '' },
         team2: { name: 'Colorado St. Rams', img: '' }
      },
      ]
   },
   {
      "Tomorrow": [
         {
            id: 6,
            img: '/img/table/freemad.png',
            title: 'Mixed Martial Arts. KSW',
            team1: { name: 'San Jose St. Spartans', img: '/img/table/sydhavus.png' },
            team2: { name: 'UNLV Rebels', img: '/img/table/ajax.png' }
         },
         {
            id: 7,
            img: '/img/table/bruges333.png',
            title: 'Mixed Martial Arts. KSW',
            team1: { name: 'Indiana Hossiars', img: '/img/table/petra.png' },
            team2: { name: 'Michigan Wolverines', img: '' }
         },
         {
            id: 8,
            img: '/img/table/bruges333.png',
            title: 'Mixed Martial Arts. KSW',
            team1: { name: 'Florida Gators', img: '/img/table/bruges333.png' },
            team2: { name: 'Missouri Tigers', img: '' }
         },
         {
            id: 9,
            img: '/img/table/olis.png',
            title: 'Mixed Martial Arts. KSW',
            team1: { name: 'Oklahoma Sooners', img: '/img/table/valence33.png' },
            team2: { name: 'Texas Longhorns', img: '' }
         },
         {
            id: 10,
            img: '',
            title: 'Mixed Martial Arts. KSW',
            team1: { name: 'Kansas Jayhawks', img: '' },
            team2: { name: 'TCU Horned Frogs', img: '' }
         },
         {
            id: 11,
            img: '',
            title: 'Mixed Martial Arts. KSW',
            team1: { name: 'Pittsburgh Panthers', img: '/img/table/ifk.png' },
            team2: { name: 'Verginia Tech Hockies', img: '/img/table/alk.png' }
         },
         {
            id: 12,
            img: '',
            title: 'Mixed Martial Arts. KSW',
            team1: { name: 'UAB blazers', img: '/img/table/amo.png' },
            team2: { name: 'Virginia Tech Hokies', img: '/img/table/hkmalmo.png' }
         }
      ]
   },
]
const handball = () => {
   return (
      <>
         <BreadCrumb title='Handball' />
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
                                                         {singleItem.img ? <img src={singleItem.img} alt='image' /> : <i className="icon-handball"></i>}
                                                      </span>
                                                      <span>{singleItem.title} </span>
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
                                                            <span>{singleItem.team1.name}</span>
                                                            <span className="icon">
                                                               {singleItem.team1.img ? <img src={singleItem.team1.img} /> : <i className="icon-handball"></i>}
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
                                                               {singleItem.team2.img ? <img src={singleItem.team2.img} /> : <i className="icon-handball"></i>}
                                                            </span>
                                                            <span>{singleItem.team2.name}</span>
                                                         </Link>
                                                      </li>
                                                   </ul>
                                                   <div className="table-body-right">
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">1</span>
                                                         <span>3.89</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">X</span>
                                                         <span>5.89</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">2</span>
                                                         <span>1.19</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">O 53.5</span>
                                                         <span>1.84</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">U 53.5</span>
                                                         <span>1.61</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="last-digit">+18</span>
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

export default handball;