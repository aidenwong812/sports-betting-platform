import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import Sponsor from '@/components/Sponsor';

const matchData = [
   {
      id: 1,
      title: 'World Championship. Women',
      img: '',
      team1: { name: 'Colombia', img: '' },
      team2: { name: 'Peru', img: '' },
   },
   {
      id: 2,
      title: 'South American Championship',
      img: '',
      team1: { name: 'Colombia', img: '' },
      team2: { name: 'Peru', img: '' },
   },
   {
      id: 3,
      title: 'Championship of the Czech Republic, Extr...',
      img: '',
      team1: { name: 'Pribram', img: '/img/table/pebro.png' },
      team2: { name: 'Kladno', img: '/img/table/kladno.png' },
   },
   {
      id: 4,
      title: 'Championship of France. League A',
      img: '',
      team1: { name: 'Narbonne', img: '' },
      team2: { name: 'Tourcoing lille', img: '' },
   },
   {
      id: 5,
      title: 'Championship of France. League A',
      img: '',
      team1: { name: 'Set', img: '' },
      team2: { name: 'Nantes', img: '' },
   },
   {
      id: 6,
      title: 'Championship of Finland. Korisliiga',
      img: '',
      team1: { name: 'Caloocan Excellence', img: '' },
      team2: { name: 'Muntinlupa Cagers', img: '' },
   },
   {
      id: 7,
      title: 'World Championship. Women',
      img: '/img/table/korislinga.png',
      team1: { name: 'Kataja', img: '/img/table/kataja.png' },
      team2: { name: 'Puerto Rico', img: '/img/table/ktp.png' },
   },
   {
      id: 8,
      title: 'Swedish Championship',
      img: '',
      team1: { name: 'Uppsala Basket', img: '/img/table/uppsala.png' },
      team2: { name: 'BC lulea', img: '/img/table/lulea.png' },
   },
]
type LiveEventProps = {
   title: string;
   team1: string;
   team2: string;
 }
 
const LiveEvent = ({title, team1, team2}:LiveEventProps) => {
   return (
      <div className="table-inner">
         <div className="table-head">
            <Link href="details" className="left-compo">
               <span>
                  <i className="icon-volleyball"></i>
               </span>
               <span>{title}</span>
            </Link>
            <ul className="right-compo">
               <li className="dotsred">
                  Set 4
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
                           <i className="icon-volleyball"></i>
                        </span>
                        <span>{team1}</span>
                     </Link>
                  </div>
                  <div className="items">
                     <Link href="#0">
                        <span className="icon">
                           <i className="icon-volleyball"></i>
                        </span>
                        <span>{team2}</span>
                     </Link>
                  </div>
               </div>
               <div className="ebasket-right-content">
                  <Link href="#0"><span className="blods">2</span>  S1 S2 S3 S4</Link>
                  <Link href="#0">25 25 23 10</Link>
                  <Link href="#0"><span className="blods">1</span> 20 15 25 6</Link>
               </div>
            </div>
            <div className="table-body-right">
               <Link href="#0" className="table-pointing-box">
                  <span className="list">2</span>
                  <span>05.05</span>
               </Link>
               <Link href="#0" className="table-pointing-box">
                  <span className="list">O 1.50</span>
                  <span>8.02</span>
               </Link>
               <Link href="#0" className="table-pointing-box">
                  <span className="list">U 71.5</span>
                  <span>1.27</span>
               </Link>
               <Link href="#0" className="table-pointing-box">
                  <span className="last-digit">+95</span>
               </Link>
            </div>
         </div>
      </div>
   )
}
const volleyball = () => {
   return (
      <>
         <BreadCrumb title='Volleyball' />
         <div className="main-body-tabbing">
            <div className="container">
               <div className="main-tabbing">
                  <div className="tab-content" id="tabContentmain">
                     {/* <!--all tab start--> */}
                     <div className="tab-pane fade show active" id="betsall" role="tabpanel">
                        <div className="match-table">
                           {/* <!--table five--> */}
                           <div className="match-table-head mt-span-7 mb-4">
                              <h3>
                                 Live events
                              </h3>
                           </div>
                           <div className="table-wrap mb-2">
                              <LiveEvent title="Vietnam Youth Cup" team1='Trang An Ninh Binh-2' team2='Ho Chi Minh-2' />
                              <LiveEvent title="Vietnam Youth Cup" team1='Trang An Ninh Binh-2' team2='Ho Chi Minh-2' />
                           </div>

                           <div className="match-table-head pt-20">
                              <h3 className="tody-space">
                                 Today
                              </h3>
                           </div>
                           <div className="table-wrap mb-5">
                              {
                                 matchData.map(({ id, title, img, team1, team2 }) => (
                                    <div key={id} className="table-inner">
                                       <div className="table-head">
                                          <Link href="details" className="left-compo">
                                             <span>
                                                {img ? <img src={img} alt='img' /> : <i className="icon-volleyball"></i>}
                                             </span>
                                             <span>{title} </span>
                                          </Link>
                                          <ul className="right-compo">
                                             <li>
                                                18:00
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
                                                   <span>{team1.name}</span>
                                                   <span className="icon">
                                                      {img ? <img src={team1.img} alt='img' /> : <i className="icon-volleyball"></i>}
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
                                                      {img ? <img src={team2.img} alt='img' /> : <i className="icon-volleyball"></i>}
                                                   </span>
                                                   <span>{team2.name}</span>
                                                </Link>
                                             </li>
                                          </ul>
                                          <div className="table-body-right">
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">1</span>
                                                <span>1.70</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">X</span>
                                                <span>3.5</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">2</span>
                                                <span>2.98</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">O 2.5</span>
                                                <span>1.84</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="list">U 2.5</span>
                                                <span>5.7</span>
                                             </Link>
                                             <Link href="#0" className="table-pointing-box">
                                                <span className="last-digit">+17</span>
                                             </Link>
                                          </div>
                                       </div>
                                    </div>
                                 ))
                              }
                           </div>
                           {/* <!--Prematch--> */}
                           <div className="match-table-head mt-span-7 mb-4">
                              <h3>
                                 Tomorrow
                              </h3>
                           </div>
                           <div className="table-wrap mb-2">
                            <LiveEvent title='World Championship. Women' team1='Colombia' team2='Peru' />
                            <LiveEvent title='Championship of the Czech Republic, Extr...' team1='Pribram' team2='Kladno' />
                           </div>
                           {/* <!--tommorw--> */}

                        </div>
                     </div>
                     {/* <!--all tab End--> */}
                  </div>
               </div>
            </div>
         </div>
         {/* Sponsor Section */}
         <Sponsor />
      </>
   );
};

export default volleyball;