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
         img: '',
         title: 'World Championship. Qualification',
         team1: { name: 'Kazakhstan', img: '' },
         team2: { name: 'Slovenia', img: '' }
      },
      {
         id: 2,
         img: '/img/table/prod2.png',
         title: 'World Championship. Qualification',
         team2: { name: 'Moldova', img: '' },
         team1: { name: 'Cyprus', img: '' }
      },
      {
         id: 3,
         img: '',
         title: 'World Championship. Qualification',
         team1: { name: 'Belgium', img: '' },
         team2: { name: 'Moldova', img: '' }
      },
      {
         id: 4,
         img: '',
         title: 'World Championship. Qualification',
         team1: { name: 'Georgia', img: '' },
         team2: { name: 'Slovenia', img: '' }
      },

         ,]
   },
   {
      "Tomorrow": [{
         id: 5,
         img: '',
         title: 'World Championship. Qualification',
         team1: { name: 'Georgia', img: '' },
         team2: { name: 'Slovenia', img: '' }
      },
      {
         id: 6,
         img: '',
         title: 'World Championship. Qualification',
         team1: { name: 'Belgium', img: '' },
         team2: { name: 'Moldova', img: '' }
      }
      ]
   },

]
const futsal = () => {
   return (
      <>
         <BreadCrumb title='Futsal' />
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
                                                         <i className="icon-football"></i>
                                                      </span>
                                                      <span>
                                                        {singleItem.title}
                                                      </span>
                                                   </Link>
                                                   <ul className="right-compo">
                                                      <li>
                                                         18:00
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
                                                               <i className="icon-football"></i>
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
                                                               <i className="icon-football"></i>
                                                            </span>
                                                            <span>{singleItem.team2.name}</span>
                                                         </Link>
                                                      </li>
                                                   </ul>
                                                   <div className="table-body-right">
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">1</span>
                                                         <span>1.02</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">X</span>
                                                         <span>2.25</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">2</span>
                                                         <span>5.19</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">O 53.5</span>
                                                         <span>3.04</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="list">U 53.5</span>
                                                         <span>5.39</span>
                                                      </Link>
                                                      <Link href="#0" className="table-pointing-box">
                                                         <span className="last-digit">+2</span>
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

export default futsal;