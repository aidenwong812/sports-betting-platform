import Link from 'next/link';
import BreadCrumb from '@/components/BreadCrumb';
import Sponsor from '@/components/Sponsor';

const favorites = () => {
   return (
      <>
         <div className="filter-banner">
            <div className="container">
               <div className="filter-banner-wrap">
                  <div className="accordion" id="bannerfilter-accordion">
                     <div className="accordion-item">
                        <div className="accordion-header">
                           <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#bannerfilter" aria-expanded="false" aria-controls="bannerfilter">
                              <span className="icon"><i className="fas fa-bars"></i></span>
                              <span>Selected disciplines: 3/14</span>
                           </button>
                           <div id="bannerfilter" className="accordion-collapse collapse show">
                              <div className="accordion-body">
                                 <ul className="banner-filter-components">
                                    <li>
                                       <span><i className="icon-basketball"></i></span>
                                       <Link href="#0">
                                          Basketball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-basketball"></i></span>
                                       <Link href="#0">
                                          eBasketball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-scgo"></i></span>
                                       <Link href="#0">
                                          CS:GO
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-basketball"></i></span>
                                       <Link href="#0">
                                          Basketball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-basketball"></i></span>
                                       <Link href="#0">
                                          eBasketball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-tennis"></i></span>
                                       <Link href="#0">
                                          Tennis
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-etennis"></i></span>
                                       <Link href="#0">
                                          eTennis
                                       </Link>
                                    </li><li>
                                       <span><i className="icon-hockyball"></i></span>
                                       <Link href="#0">
                                          Ice hockey
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-hockyman"></i></span>
                                       <Link href="#0">
                                          eHockey
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-volleyball"></i></span>
                                       <Link href="#0">
                                          Volleyball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-baseball"></i></span>
                                       <Link href="#0">
                                          Baseball
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-futsal"></i></span>
                                       <Link href="#0">
                                          Futsal
                                       </Link>
                                    </li>
                                    <li>
                                       <span><i className="icon-cricket"></i></span>
                                       <Link href="#0">
                                          Cricket
                                       </Link>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="main-body-tabbing">
            <div className="container">
               <div className="main-tabbing">
                  <div className="tab-content" id="tabContentmain">
                     {/* <!--all tab start--> */}
                     <div className="tab-pane fade show active" id="betsall" role="tabpanel">
                        <div className="match-table">
                           {/* <!--table five--> */}
                           <div className="table-wrap mb-2">
                              <div className="favorites-table-item mb-2">
                                 <div className="icon">
                                    <img src="/img/table/atp.png" alt="img" />
                                 </div>
                                 <div className="content">
                                    <div className="top">
                                       <span>Tennis</span>
                                       <span><i className="icon-tennis"></i></span>
                                    </div>
                                    <div className="bottom">
                                       <h6>
                                          ATP Lisbon
                                       </h6>
                                       <span><i className="fas fa-star"></i></span>
                                    </div>
                                 </div>
                              </div>

                              <div className="table-inner">
                                 <div className="table-head">
                                    <Link href="details" className="left-compo">
                                       <span>
                                          <img src="/img/table/atp2.png" alt="icon" />
                                       </span>
                                       <span>
                                          ATP Lisbon
                                       </span>
                                    </Link>
                                    <ul className="right-compo">
                                       <li>
                                          ATP Lisbon
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
                                             <span>Van Assche Luca</span>
                                             <span className="icon">
                                                <img src="/img/table/luca.png" alt="flag" />
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
                                                <img src="/img/table/marco.png" alt="flag" />
                                             </span>
                                             <span>Cecchinato Marco</span>
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
                                          <span className="list">U 2.5</span>
                                          <span>2.08</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="last-digit">+327</span>
                                       </Link>
                                    </div>
                                 </div>
                              </div>

                              <div className="favorites-table-item mt-4 mb-2">
                                 <div className="icon">
                                    <img src="/img/table/l-radi.png" alt="img" />
                                 </div>
                                 <div className="content">
                                    <div className="top">
                                       <span>Tennis</span>
                                       <span><i className="icon-tennis"></i></span>
                                    </div>
                                    <div className="bottom">
                                       <h6>
                                          League Nations UEFA
                                       </h6>
                                       <span><i className="fas fa-star"></i></span>
                                    </div>
                                 </div>
                              </div>

                              <div className="table-inner">
                                 <div className="table-head">
                                    <Link href="details" className="left-compo">
                                       <span>
                                          <img src="/img/table/l-flag.png" alt="icon" />
                                       </span>
                                       <span>
                                          League Nations UEFA
                                       </span>
                                       <span><img src="/img/table/hot.png" alt="img" /></span >
                                    </Link>
                                    <ul className="right-compo">
                                       <li>
                                          Oct 22 00:69
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
                                             <span>Belgium</span>
                                             <span className="icon">
                                                <img src="/img/table/belgi.png" alt="flag" />
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
                                                <img src="/img/table/wales.png" alt="flag" />
                                             </span>
                                             <span>Wales</span>
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
                                          <span className="list">U 2.5</span>
                                          <span>2.08</span>
                                       </Link>
                                       <Link href="#0" className="table-pointing-box">
                                          <span className="last-digit">+327</span>
                                       </Link>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {/* <!--Ehocky--> */}
                        </div>
                     </div>
                     {/* <!--all tab End--> */}
                  </div>
               </div>
            </div>
         </div>
         {/* sponsor Section */}
         <Sponsor />
      </>
   );
};

export default favorites;