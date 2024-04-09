import Link from "next/link";
import React from "react";
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
        img: "/img/table/csgo2.png",
        title: "South Korean Championship. KBL",
        team1: { name: "NightRaid", img: "/img/table/nightraid.png" },
        team2: { name: "Snake", img: "/img/table/snake.png" },
      },
      {
        id: 2,
        img: "/img/table/csgo2.png",
        title: "Championship of the Philippines. NCAA",
        team2: { name: "NightRaid", img: "/img/table/nightraid.png" },
        team1: { name: "Snake", img: "/img/table/snake.png" },
      },
      {
        id: 3,
        img: "/img/table/uropen.png",
        title: "Championship of the Philippines. NCAA",
        team1: { name: "ALTERNATE aTTaX", img: "/img/table/snake.png" },
        team2: { name: "SnakBeyond Possible", img: "/img/table/snake.png" },
      },
      {
        id: 4,
        img: "/img/table/csgo3.png",
        title: "Championship of the Philippines. NCAA",
        team1: { name: "Lodis by Illuminar", img: "/img/table/lodis.png" },
        team2: { name: "9INE", img: "/img/table/nin.png" },
      },
      {
        id: 5,
        img: "/img/table/csgo3.png",
        title: "Championship of Finland. Korisliiga",
        team1: { name: "NightRaid", img: "/img/table/nightraid.png" },
        team2: { name: "Snake", img: "/img/table/snake.png" },
      },
      {
        id: 6,
        img: "/img/table/csgo2.png",
        title: "Championship of the Philippines. NCAA",
        team1: { name: "Rhyno", img: "/img/table/rhyno.png" },
        team2: { name: "Panthers eSports", img: "/img/table/partherss.png" },
      },
      {
        id: 7,
        img: "/img/table/ecl.png",
        title: "Championship of the Philippines. NCAA",
        team1: { name: "Lodis by Illuminar", img: "/img/table/lodis.png" },
        team2: { name: "9INE", img: "/img/table/nin.png" },
      },
      {
        id: 8,
        img: "/img/table/international.png",
        title: "Championship of the Philippines. NCAA",
        team1: { name: "ONYX", img: "/img/table/dnyx.png" },
        team2: { name: "OOProspects", img: "/img/table/oopro.png" },
      },
      {
        id: 9,
        img: "/img/table/ecl.png",
        title: "Championship of the Philippines. NCAA",
        team1: { name: "AGO", img: "/img/table/sgo.png" },
        team2: { name: "9INE", img: "/img/table/nin.png" },
      },
      {
        id: 10,
        img: "/img/table/csgo2.png",
        title: "Championship of the Philippines. NCAA",
        team1: { name: "Bad News Eagles", img: "/img/table/nightraid.png" },
        team2: { name: "Eternal Fire", img: "/img/table/snake.png" },
      },
    ],
  },
  {
    Tomorrow: [
      {
        id: 11,
        img: "/img/table/csgo2.png",
        title: "Championship of the Philippines. NCAA",
        team1: { name: "Internazionale", img: "/img/table/internaz.png" },
        team2: { name: "Barcelona", img: "/img/table/barsa.png" },
      },
      {
        id: 12,
        img: "/img/table/csgo2.png",
        title: "UEFA Champions League",
        team1: { name: "Liverpool", img: "/img/table/liverp0ol.png" },
        team2: { name: "Rangers Glasgow", img: "/img/table/rangers.png" },
      },
      {
        id: 13,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Chelsea", img: "/img/table/chelsea.png" },
        team2: { name: "AC Milan", img: "/img/table/milan.png" },
      },
      {
        id: 14,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Sevilla", img: "/img/table/sevilla.png" },
        team2: { name: "Borussia Dortmund", img: "/img/table/dortmund.png" },
      },
      {
        id: 15,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Juventus", img: "/img/table/juventus.png" },
        team2: { name: "Maccabi Haifa", img: "/img/table/haifa.png" },
      },
    ],
  },
  {
    "Prematch 09.4.2023": [
      {
        id: 16,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Benfica", img: "/img/table/benfica.png" },
        team2: { name: "PSG", img: "/img/table/psg.png" },
      },
      {
        id: 17,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Liverpool", img: "/img/table/benfica.png" },
        team2: { name: "Rangers Glasgwo", img: "/img/table/psg.png" },
      },
    ],
  },
  {
    "Prematch 10.4.2023": [
      {
        id: 18,
        img: "/img/table/csgo2.png",
        title: "UEFA Champions League",
        team1: { name: "Liverpool", img: "/img/table/liverp0ol.png" },
        team2: { name: "Rangers Glasgow", img: "/img/table/rangers.png" },
      },
      {
        id: 19,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Chelsea", img: "/img/table/chelsea.png" },
        team2: { name: "AC Milan", img: "/img/table/milan.png" },
      },
      {
        id: 20,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Sevilla", img: "/img/table/sevilla.png" },
        team2: { name: "Borussia Dortmund", img: "/img/table/dortmund.png" },
      },
      {
        id: 21,
        img: "/img/table/luage.png",
        title: "UEFA Champions League",
        team1: { name: "Juventus", img: "/img/table/juventus.png" },
        team2: { name: "Maccabi Haifa", img: "/img/table/haifa.png" },
      },
    ],
  },
];

const basketball = () => {
  return (
    <>
      <BreadCrumb title="Basketball" />
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
                  {/* <!--table five--> */}
                  <div className="match-table-head mt-span-7 mb-4">
                    <h3>Live events</h3>
                  </div>
                  <div className="table-wrap mb-4">
                    <div className="table-inner">
                      <div className="table-head">
                        <Link href="details" className="left-compo">
                          <span>
                            <img src="/img/table/nba.png" alt="img" />
                          </span>
                          <span>USA. NBA</span>
                        </Link>
                        <ul className="right-compo">
                          <li className="dotsred">Live</li>
                          <li>Winner. Main time</li>
                          <li>Total Quarter 3</li>
                        </ul>
                      </div>
                      <div className="table-body">
                        <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                          <div className="ebasket-left">
                            <div className="items">
                              <Link href="#0">
                                <span className="icon">
                                  <img src="/img/table/los.png" alt="img" />
                                </span>
                                <span>Los Angeles Clippers</span>
                              </Link>
                            </div>
                            <div className="items">
                              <Link href="#0">
                                <span className="icon">
                                  <img src="/img/table/trail.png" alt="img" />
                                </span>
                                <span>Portland Trail Blazers</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="table-body-right">
                          <Link href="#0" className="table-pointing-box">
                            <span className="list">1</span>
                            <span>05.05</span>
                          </Link>
                          <Link href="#0" className="table-pointing-box">
                            <span className="list">X</span>
                            <span>7.010</span>
                          </Link>
                          <Link href="#0" className="table-pointing-box">
                            <span className="list">5.4</span>
                            <span>5.10</span>
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
                    <div className="table-inner">
                      <div className="table-head">
                        <Link href="details" className="left-compo">
                          <span>
                            <img src="/img/table/nba.png" alt="img" />
                          </span>
                          <span>USA. NBA</span>
                        </Link>
                        <ul className="right-compo">
                          <li className="dotsred">Live</li>
                          <li>Winner. Main time</li>
                          <li>Total Quarter 3</li>
                        </ul>
                      </div>
                      <div className="table-body">
                        <div className="table-body-left ebasket-customize d-flex align-items-center justify-content-between">
                          <div className="ebasket-left">
                            <div className="items">
                              <Link href="#0">
                                <span className="icon">
                                  <img src="/img/table/lakers.png" alt="img" />
                                </span>
                                <span>Los Angeles Lakers</span>
                              </Link>
                            </div>
                            <div className="items">
                              <Link href="#0">
                                <span className="icon">
                                  <img
                                    src="/img/table/sacremento.png"
                                    alt="img"
                                  />
                                </span>
                                <span>Sacramento Kings</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="table-body-right">
                          <Link href="#0" className="table-pointing-box">
                            <span className="list">1</span>
                            <span>05.05</span>
                          </Link>
                          <Link href="#0" className="table-pointing-box">
                            <span className="list">X</span>
                            <span>7.010</span>
                          </Link>
                          <Link href="#0" className="table-pointing-box">
                            <span className="list">5.4</span>
                            <span>5.10</span>
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
                  </div>
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
                                    <span>{singleItem.title}</span>
                                  </Link>
                                  <ul className="right-compo">
                                    <li>Live in: 6m</li>
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
                                            alt="flag"
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
                                            alt="flag"
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
                                      <span>5.58</span>
                                    </Link>
                                    <Link
                                      href="#0"
                                      className="table-pointing-box">
                                      <span className="list">2</span>
                                      <span>2.98</span>
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
                                      <span className="last-digit">+25</span>
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

export default basketball;
