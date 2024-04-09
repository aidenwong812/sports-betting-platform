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
      "Prematch 14.10.2023": [{
         id: 1,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Slovan Bratislava-2', img: '/img/table/petra.png' },
         team2: { name: 'Wave Esports', img: '' }
      },
      {
         id: 2,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team2: { name: 'MOUZ', img: '/img/table/dawid.png' },
         team1: { name: 'WeSports', img: '' }
      },
      {
         id: 3,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Zlin', img: '' },
         team2: { name: 'Litomerice', img: '' }
      },
      {
         id: 4,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Sprought', img: '' },
         team2: { name: 'BIG', img: '' }
      },
      {
         id: 5,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'All for one', img: '/img/table/michal.png' },
         team2: { name: 'Topolcany', img: '/img/table/daniel.png' }
      },
      {
         id: 6,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Lodis by Illuminar', img: '/img/table/robert.png' },
         team2: { name: '9INE', img: '' }
      },
         ,]
   },
   {
      "Prematch 16.10.2023": [{
         id: 7,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Sprought', img: '/img/table/petra.png' },
         team2: { name: 'BIG', img: '' }
      },
      {
         id: 8,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Sprought', img: '/img/table/dawid.png' },
         team2: { name: 'Sevila', img: '' }
      },
      {
         id: 9,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Sprought', img: '' },
         team2: { name: 'Maccabi Haifa', img: '' }
      },

      ]
   },
   {
      "Prematch 18.10.2023": [{
         id: 10,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Sprought', img: '/img/table/petra.png' },
         team2: { name: 'Benifa', img: '/img/table/sam.png' }
      },
      {
         id: 11,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Sprought', img: '/img/table/sam.png' },
         team2: { name: 'Hughes Sam', img: '' }
      },
      ]
   },
   {
      "Prematch 20.10.2023": [{
         id: 12,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Rodrigez Piera', img: '/img/table/petra.png' },
         team2: { name: 'Omielancuk Daniel', img: '/img/table/sam.png' }
      },
      {
         id: 13,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. KSW',
         team1: { name: 'Sprought', img: '/img/table/dawid.png' },
         team2: { name: 'Juventas', img: '' }
      }, {
         id: 14,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. MMA Fight Night',
         team1: { name: 'Sprought', img: '/img/table/dawid.png' },
         team2: { name: 'Liverpool', img: '' }
      },
      {
         id: 14,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. MMA Fight Night',
         team1: { name: 'Sprought', img: '' },
         team2: { name: 'Liverpool', img: '' }
      },
      {
         id: 15,
         img: '/img/table/ksw.png',
         title: 'Mixed Martial Arts. MMA Fight Night',
         team1: { name: 'Sprought', img: '/img/table/michal.png' },
         team2: { name: 'Chelsea', img: '/img/table/daniel.png' }
      }
      ]
   },
]
const mma = () => {
   return (
      <>
         <BreadCrumb title='MMA' />
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
                                                         <img src="/img/table/ksw.png" alt="icon" />
                                                      </span>
                                                      <span>{singleItem.title}</span>
                                                   </Link>
                                                   <ul className="right-compo">
                                                      <li>
                                                         Oct 14 - 22:00
                                                      </li>
                                                      <li>
                                                         Fight Winner
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
                                                               {singleItem.team1.img ? <img src={singleItem.team1.img} alt='image' /> : <i className="icon-mma"></i>}
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
                                                               {singleItem.team2.img ? <img src={singleItem.team2.img} alt='image' /> : <i className="icon-mma"></i>}
                                                            </span>
                                                            <span>{singleItem.team2.name}</span>
                                                         </Link>
                                                      </li>
                                                   </ul>
                                                   <div className="table-body-right">
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">1</span>
                                                         <span>1.67</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">X</span>
                                                         <span>1.77</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">O</span>
                                                         <span>-</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">U</span>
                                                         <span>-</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="last-digit">+17</span>
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

export default mma;