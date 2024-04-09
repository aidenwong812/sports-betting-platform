import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import Sponsor from '@/components/Sponsor';

const sc2 = () => {
   return (
      <>
         <BreadCrumb title="SC 2" />

         <div className="main-body-tabbing">
            <div className="container">
               <div className="main-tabbing">
                  <div className="tab-content" id="tabContentmain">
                     {/* <!--all tab start--> */}
                     <div className="tab-pane fade show active" id="betsall" role="tabpanel">
                        <div className="match-table">

                           {/* <!--table premiar--> */}
                           <div className="match-table-head">
                              <h3>
                                 Today
                              </h3>
                           </div>
                           <div className="table-wrap mb-5">
                              <div className="table-inner">
                                 <div className="table-head">
                                    <Link href="details" className="left-compo">
                                       <span>
                                          <img src="/img/table/master2.png" alt="img" />
                                       </span>
                                       <span>
                                          StarCraft 2. DreamHack Masters Europe
                                       </span>
                                    </Link>
                                    <ul className="right-compo">
                                       <li>
                                          21:00
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
                                             <span>Harstem</span>
                                             <span className="icon">
                                                <img src="/img/table/harestem.png" alt="img" />
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
                                                <img src="/img/table/pax.png" alt="img" />
                                             </span>
                                             <span>MaxPax</span>
                                          </Link>
                                       </li>
                                    </ul>
                                    <div className="table-body-right">
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">1</span>
                                          <span>1.02</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">2</span>
                                          <span>5.19</span>
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
                                          <span className="last-digit">+174</span>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           {/* <!--table premiar--> */}
                           <div className="match-table-head">
                              <h3>
                                 Tomorrow
                              </h3>
                           </div>
                           <div className="table-wrap">
                              <div className="table-inner">
                                 <div className="table-head">
                                    <Link href="details" className="left-compo">
                                       <span>
                                          <img src="/img/table/master2.png" alt="img" />
                                       </span>
                                       <span>
                                          StarCraft 2. Brood War. AfreecaTV Starleague
                                       </span>
                                    </Link>
                                    <ul className="right-compo">
                                       <li>
                                          Oct 9 - 14:00
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
                                             <span>Royal </span>
                                             <span className="icon">
                                                <i className="icon-sc2"></i>
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
                                                <i className="icon-sc2"></i>
                                             </span>
                                             <span>Rush</span>
                                          </Link>
                                       </li>
                                    </ul>
                                    <div className="table-body-right">
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">1</span>
                                          <span>1.02</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">2</span>
                                          <span>5.19</span>
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
                                          <span className="last-digit">+174</span>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
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

export default sc2;