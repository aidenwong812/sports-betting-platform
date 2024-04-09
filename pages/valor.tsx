import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import Sponsor from '@/components/Sponsor';

const valor = () => {
   return (
      <>
         <BreadCrumb title='Arena Of Valor' />
         {/* <!--Breadcumnd--> */}

         {/* <!--Main-body-tabing--> */}
         <div className="main-body-tabbing mb-5 pb-250">
            <div className="container">
               <div className="main-tabbing">
                  <div className="tab-content" id="tabContentmain">
                     {/* <!--all tab start--> */}
                     <div className="tab-pane fade show active" id="betsall" role="tabpanel">
                        <div className="match-table">

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
                                          <img src="/img/table/drogan-game.png" alt="img" />
                                       </span>
                                       <span>
                                          Arena of Valor. Arena of Glory
                                       </span>
                                    </Link>
                                    <ul className="right-compo">
                                       <li>
                                          Oct 9 - 12:00
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
                                             <span>V Gaming </span>
                                             <span className="icon">
                                                <img src="/img/table/vgame.png" alt="img" />
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
                                                <img src="/img/table/sparks.png" alt="img" />
                                             </span>
                                             <span>Box</span>
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
                                          <span className="list">O 5.5</span>
                                          <span>8.25</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="list">U 5.5</span>
                                          <span>4.65</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="last-digit">+1</span>
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

export default valor;