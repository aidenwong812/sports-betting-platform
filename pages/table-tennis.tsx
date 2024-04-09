import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import Sponsor from '@/components/Sponsor';
const liveEvents = [
   {
      id: 1,
      title: 'League Nations UEFA🔥',
      img: '/img/table/l-flag.png',
      team1: { name: 'Scotland', img: "/img/table/scotland.png" },
      team2: { name: 'Ukraine', img: "/img/table/ukraine.png" },
   },
   {
      id: 2,
      title: 'League Nations UEFA🔥',
      img: '/img/table/l-flag.png',
      team1: { name: 'Belguim', img: "/img/table/belgium.png" },
      team2: { name: 'Walse', img: "/img/table/wales.png" },
   },
   {
      id: 3,
      title: 'League Nations UEFA🔥',
      img: '/img/table/atp2.png',
      team1: { name: 'Croatia', img: "/img/table/croatia.png" },
      team2: { name: 'Denmark', img: "/img/table/denmark.png" },
   },
   {
      id: 4,
      title: 'ATP Lisbon',
      img: '/img/table/l-flag.png',
      team1: { name: 'Van Assche Luca', img: "/img/table/luca.png" },
      team2: { name: 'Cecchinato', img: "/img/table/marco.png" },
   },
   {
      id: 5,
      title: 'USA. Pro Series. Women',
      img: '/img/table/l-flag.png',
      team1: { name: 'Odorizzi Caterina', img: "/img/table/croatia.png" },
      team2: { name: 'Kostova Elitsa', img: "/img/table/ilitsa.png" },
   },
   {
      id: 6,
      title: 'USA. Pro Series. Women',
      img: '/img/table/l-flag.png',
      team1: { name: 'Estonia', img: "/img/table/estonia.png" },
      team2: { name: 'Sevila', img: "/img/table/sevilla.png" },
   },
   {
      id: 7,
      title: 'League Nations UEFA🔥',
      img: '/img/table/l-flag.png',
      team1: { name: 'Scotland', img: "/img/table/scotland.png" },
      team2: { name: 'Ukraine', img: "/img/table/ukraine.png" },
   },
   {
      id: 8,
      title: 'League Nations UEFA🔥',
      img: '/img/table/l-flag.png',
      team1: { name: 'Scotland', img: "/img/table/scotland.png" },
      team2: { name: 'Ukraine', img: "/img/table/ukraine.png" },
   },
   {
      id: 9,
      title: 'ATP Lisbon',
      img: '/img/table/l-flag.png',
      team1: { name: 'Van Assche Luca', img: "/img/table/luca.png" },
      team2: { name: 'Cecchinato', img: "/img/table/marco.png" },
   },
   {
      id: 10,
      title: 'USA. Pro Series. Women',
      img: '/img/table/l-flag.png',
      team1: { name: 'Odorizzi Caterina', img: "/img/table/croatia.png" },
      team2: { name: 'Kostova Elitsa', img: "/img/table/ilitsa.png" },
   },
   {
      id: 11,
      title: 'USA. Pro Series. Women',
      img: '/img/table/l-flag.png',
      team1: { name: 'Estonia', img: "/img/table/estonia.png" },
      team2: { name: 'Sevila', img: "/img/table/sevilla.png" },
   },
   {
      id: 12,
      title: 'League Nations UEFA🔥',
      img: '/img/table/l-flag.png',
      team1: { name: 'Scotland', img: "/img/table/scotland.png" },
      team2: { name: 'Ukraine', img: "/img/table/ukraine.png" },
   },
   {
      id: 13,
      title: 'League Nations UEFA🔥',
      img: '/img/table/l-flag.png',
      team1: { name: 'Scotland', img: "/img/table/scotland.png" },
      team2: { name: 'Ukraine', img: "/img/table/ukraine.png" },
   },
]

const tabletennis = () => {
   return (
      <>
         <BreadCrumb title="Table Tennis" />
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
                                 liveEvents.map(({ id, team1, team2, title, img }) => (
                                    <div key={id} className="table-inner">
                                       <div className="table-head">
                                          <Link href="details" className="left-compo">
                                             <span>
                                                <img src={img} alt="icon" />
                                             </span>
                                             <span>{title}</span>
                                          </Link>
                                          <ul className="right-compo">
                                             <li>
                                                Oct 21 00:45
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
                                                      <img src={team1.img} alt="flag" />
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
                                                      <img src={team2.img} alt="flag" />
                                                   </span>
                                                   <span>{team2.name}</span>
                                                </Link>
                                             </li>
                                          </ul>
                                          <div className="table-body-right">
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">1</span>
                                                <span>2.08</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">X</span>
                                                <span>2.08</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">2</span>
                                                <span>2.08</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">O 2.5</span>
                                                <span>2.08</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">U 2.5</span>
                                                <span>2.08</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="last-digit">+327</span>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 ))
                              }
                           </div>

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

export default tabletennis;