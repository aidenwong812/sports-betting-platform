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
         img: '/img/table/rainhot.png',
         title: 'Rainbow Six. Brasileirao',
         team1: { name: 'Cornell Big Red', img: '/img/table/faze.png' },
         team2: { name: 'Harvard Crimson', img: '/img/table/tropicos.png' }
      },
      {
         id: 2,
         img: '/img/table/rainhot.png',
         title: 'Rainbow Six. Brasileirao',
         team2: { name: 'Rutgers Scarlet Knights', img: '/img/table/wm.png' },
         team1: { name: 'Nebraska Cornhuskers', img: '/img/table/milan.png' }
      },
      {
         id: 3,
         img: '/img/table/rainhot.png',
         title: 'Rainbow Six. Brasileirao',
         team1: { name: 'Hamilton Tiger Cats', img: '/img/table/barsa.png' },
         team2: { name: 'Saskatchewan', img: '/img/table/nip.png' }
      },

      ]
   },
   {
      "Prematch 16.10.2023": [{
         id: 4,
         img: '/img/table/rainhot.png',
         title: 'Rainbow Six. Brasileirao',
         team1: { name: 'Memphis Tigers', img: '/img/table/ecu.png' },
         team2: { name: 'Houston Cougars', img: '/img/table/tulance.png' }
      },
      {
         id: 5,
         img: '/img/table/rainhot.png',
         title: 'Rainbow Six. Brasileirao',
         team1: { name: 'Nevada Wolf Pack', img: '/img/table/internaz.png' },
         team2: { name: 'Colorado St. Rams', img: '/img/table/rangers.png' }
      },
      {
         id: 6,
         img: '/img/table/rainhot.png',
         title: 'Rainbow Six. Brasileirao',
         team1: { name: 'San Jose St. Spartans', img: '/img/table/man-city.png' },
         team2: { name: 'UNLV Rebels', img: '/img/table/compenhagen.png' }
      },
      {
         id: 7,
         img: '/img/table/rainhot.png',
         title: 'Rainbow Six. Brasileirao',
         team1: { name: 'Indiana Hossiars', img: '/img/table/j-man.png' },
         team2: { name: 'Michigan Wolverines', img: '/img/table/armenta.png' }
      }
      ]
   },
   {
      "Prematch 18.10.2023": [
         ,
         {
            id: 8,
            img: '/img/table/rainhot.png',
            title: 'Rainbow Six. Brasileirao',
            team1: { name: 'Florida Gators', img: '/img/table/j-man.png' },
            team2: { name: 'Missouri Tigers', img: '/img/table/sevilla.png' }
         },
         {
            id: 9,
            img: '/img/table/rainhot.png',
            title: 'Rainbow Six. Brasileirao',
            team1: { name: 'Oklahoma Sooners', img: '/img/table/dortmund.png' },
            team2: { name: 'Texas Longhorns', img: '/img/table/barsa.png' }
         },

      ]
   },
   {
      "Prematch 20.10.2023": [
         {
            id: 10,
            img: '/img/table/rainhot.png',
            title: 'Rainbow Six. Brasileirao',
            team1: { name: 'Kansas Jayhawks', img: '/img/table/man-city.png' },
            team2: { name: 'TCU Horned Frogs', img: '/img/table/juventus.png' }
         },
         {
            id: 11,
            img: '/img/table/rainhot.png',
            title: 'Rainbow Six. Brasileirao',
            team1: { name: 'Pittsburgh Panthers', img: '/img/table/chelsea.png' },
            team2: { name: 'Verginia Tech Hockies', img: '/img/table/juventus.png' }
         },
         {
            id: 12,
            img: '/img/table/rainhot.png',
            title: 'Rainbow Six. Brasileirao',
            team1: { name: 'UAB blazers', img: '/img/table/cesarus.png' },
            team2: { name: 'Virginia Tech Hokies', img: '/img/table/haifa.png' }
         },
         {
            id: 13,
            img: '/img/table/rainhot.png',
            title: 'Rainbow Six. Brasileirao',
            team1: { name: 'Tulane Green Wave', img: '/img/table/murray.png' },
            team2: { name: 'East Carolina Pirates', img: '/img/table/chelsea.png' }
         },
      ]
   },

]

const rainbow = () => {
   return (
      <>
         <BreadCrumb title='Rainbow' />
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
         {/* <!--Main-body-tabing--> */}

         {/* <!--Sponsor Section--> */}
         <Sponsor />
      </>
   );
};

export default rainbow;