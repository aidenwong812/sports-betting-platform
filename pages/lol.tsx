import Link from "next/link";
import BreadCrumb from "@/components/BreadCrumb";
import Sponsor from "@/components/Sponsor";
interface matchInterface {
  id: number;
  img: string;
  title: string;
  team1: {
    name: string;
    img: string;
  };
  team2: {
    name: string;
    img: string;
  };
}
const matchData = [
  {
    Today: [
      {
        id: 1,
        img: "/img/table/wave.png",
        title: "League of Legends. Prime League",
        team1: { name: "FC Schalke 04", img: "/img/table/fc.png" },
        team2: { name: "Wave Esports", img: "/img/table/wave.png" },
      },
      {
        id: 2,
        img: "/img/table/wave.png",
        title: "League of Legends. Prime League",
        team2: { name: "MOUZ", img: "/img/table/mouz.png" },
        team1: { name: "WeSports", img: "/img/table/wesport.png" },
      },
      {
        id: 3,
        img: "/img/table/uropen.png",
        title: "League of Legends. Prime League",
        team1: { name: "Sprought", img: "/img/table/sprout.png" },
        team2: { name: "BIG", img: "/img/table/big.png" },
      },
      {
        id: 4,
        img: "/img/table/csgo3.png",
        title: "League of Legends. Prime League",
        team1: { name: "Sprought", img: "/img/table/sprout.png" },
        team2: { name: "BIG", img: "/img/table/big.png" },
      },
    ],
  },
  {
    Tomorrow: [
      {
        id: 5,
        img: "/img/table/wave.png",
        title: "League of Legends. Prime League",
        team1: { name: "All for one", img: "/img/table/l-balu.png" },
        team2: { name: "Panthers eSports", img: "/img/table/fc.png" },
      },
      {
        id: 6,
        img: "/img/table/ecl.png",
        title: "League of Legends. Prime League",
        team1: { name: "Lodis by Illuminar", img: "/img/table/l-balu.png" },
        team2: { name: "9INE", img: "/img/table/l-balu.png" },
      },
      {
        id: 7,
        img: "/img/table/international.png",
        title: "League of Legends. Prime League",
        team1: { name: "Sprought", img: "/img/table/fc.png" },
        team2: { name: "BIG", img: "/img/table/big.png" },
      },
    ],
  },
  {
    "Prematch 09.4.2023": [
      {
        id: 8,
        img: "/img/table/wave.png",
        title: "League of Legends. Prime League",
        team1: { name: "Internazionale", img: "/img/table/internaz.png" },
        team2: { name: "Barcelona", img: "/img/table/barsa.png" },
      },
      {
        id: 9,
        img: "/img/table/wave.png",
        title: "UEFA Champions League",
        team1: { name: "Liverpool", img: "/img/table/liverp0ol.png" },
        team2: { name: "Rangers Glasgow", img: "/img/table/rangers.png" },
      },
    ],
  },
  {
    "Prematch 10.4.2023": [
      {
        id: 10,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Chelsea", img: "/img/table/chelsea.png" },
        team2: { name: "AC Milan", img: "/img/table/milan.png" },
      },
      {
        id: 11,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Sevilla", img: "/img/table/sevilla.png" },
        team2: { name: "Borussia Dortmund", img: "/img/table/dortmund.png" },
      },
      {
        id: 12,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Juventus", img: "/img/table/juventus.png" },
        team2: { name: "Maccabi Haifa", img: "/img/table/haifa.png" },
      },
      {
        id: 13,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Benfica", img: "/img/table/benfica.png" },
        team2: { name: "PSG", img: "/img/table/psg.png" },
      },
    ],
  },
];
const lol = () => {
  return (
    <>
      <BreadCrumb title="LOL" />
      {/* <!--Breadcumnd--> */}

      {/* <!--Main-body-tabing--> */}
      <div className="main-body-tabbing">
        <div className="container">
          <div className="main-tabbing">
            <div className="tab-content" id="tabContentmain">
              {/* <!--all tab start--> */}
              <div
                className="tab-pane fade show active"
                id="betsall"
                role="tabpanel">
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
                                    <li>Live in: 29m</li>
                                    <li>Match Winner</li>
                                    <li>Total maps</li>
                                  </ul>
                                </div>
                                <div className="table-body">
                                  <ul className="table-body-left">
                                    <li>
                                      <Link href="#0">
                                        <span>{singleItem.team1.name}</span>
                                        <span className="icon">
                                          <img
                                            src={singleItem.team1.img}
                                            alt=""
                                          />
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
                                          <img
                                            src={singleItem.team2.img}
                                            alt=""
                                          />
                                        </span>
                                        <span>{singleItem.team2.name}</span>
                                      </Link>
                                    </li>
                                  </ul>
                                  <div className="table-body-right">
                                    <Link
                                      href="#0"
                                      className="table-pointing-box">
                                      <span className="list">1</span>
                                      <span>1.29</span>
                                    </Link>
                                    <Link
                                      href="#0"
                                      className="table-pointing-box">
                                      <span className="list">2</span>
                                      <span>2.9</span>
                                    </Link>
                                    <Link
                                      href="#0"
                                      className="table-pointing-box">
                                      <span className="list">O 2.5</span>
                                      <span>1.84</span>
                                    </Link>
                                    <Link
                                      href="#0"
                                      className="table-pointing-box">
                                      <span className="list">U 2.5</span>
                                      <span>5.7</span>
                                    </Link>
                                    <Link
                                      href="#0"
                                      className="table-pointing-box">
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

export default lol;
