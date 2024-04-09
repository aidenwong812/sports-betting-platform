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
         img: '/img/table/league.png',
         title: 'Overwatch. OWL',
         team1: { name: 'Cornell Big Red', img: '/img/table/gx.png' },
         team2: { name: 'Harvard Crimson', img: '/img/table/sparks.png' }
      },
      {
         id: 2,
         img: '/img/table/league.png',
         title: 'Overwatch. OWL',
         team2: { name: 'Rutgers Scarlet Knights', img: '/img/table/valiant.png' },
         team1: { name: 'Nebraska Cornhuskers', img: '/img/table/dragons.png' }
      },
      {
         id: 3,
         img: '/img/table/league.png',
         title: 'Overwatch. OWL',
         team1: { name: 'Hamilton Tiger Cats', img: '/img/table/pusion.png' },
         team2: { name: 'Saskatchewan', img: '/img/table/chen.png' }
      },]
   },
   {
      "Today": [{
         id: 4,
         img: '/img/table/league.png',
         title: 'Overwatch. OWL',
         team1: { name: 'Atlanta Reign', img: '/img/table/gx.png' },
         team2: { name: 'Florida Mayhem', img: '/img/table/mahem.png' }
      },
      {
         id: 5,
         img: '/img/table/league.png',
         title: 'Overwatch. OWL',
         team1: { name: 'Washington Justice', img: '/img/table/juventus.png' },
         team2: { name: 'Los Angeles Gladiators', img: '/img/table/los.png' }
      },
      {
         id: 6,
         img: '/img/table/league.png',
         title: 'Overwatch. OWL',
         team1: { name: 'Houston Outlaws', img: '/img/table/hauston.png' },
         team2: { name: 'Dallas Fuel', img: '/img/table/dallas.png' }
      },]
   }
]
const ow = () => {
   return (
      <>
         <BreadCrumb title="OW" />
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

export default ow;