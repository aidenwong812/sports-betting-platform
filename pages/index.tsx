import BreadCrumb from "@/components/BreadCrumb";
import Sponsor from "@/components/Sponsor";
import Link from "next/link";
const footballMatchData = [
  {
    id: 1,
    tournament: "UEFA Champions League",
    img: "/img/table/luage.png",
    date: "09/04/23",
    team1: { name: "Bayern Munich", img: "/img/table/bayern.png" },
    team2: { name: "Victoria Plazen", img: "/img/table/plazen.png" },
  },
  {
    id: 2,
    tournament: "UEFA Champions League",
    img: "/img/table/luage.png",
    date: "09/04/23",
    team1: { name: "Olympique Marseille", img: "/img/table/marseille.png" },
    team2: { name: "Sporting CP", img: "/img/table/sporting-cp.png" },
  },
  {
    id: 3,
    tournament: "UEFA Champions League",
    img: "/img/table/luage.png",
    date: "10/04/23",
    team1: { name: "Internazionale", img: "/img/table/internaz.png" },
    team2: { name: "Barcelona", img: "/img/table/internaz.png" },
  },
  {
    id: 4,
    tournament: "UEFA Champions League",
    img: "/img/table/luage.png",
    date: "10/04/23",
    team1: { name: "Liverpool", img: "/img/table/liverp0ol.png" },
    team2: { name: "Rangers Glasgow", img: "/img/table/rangers.png" },
  },
  {
    id: 5,
    tournament: "UEFA Champions League",
    img: "/img/table/luage.png",
    date: "10/04/23",
    team1: { name: "Porto", img: "/img/table/porto.png" },
    team2: { name: "Bayer 04 Leverkusen", img: "/img/table/bayer.png" },
  },
  {
    id: 6,
    tournament: "UEFA Champions League",
    img: "/img/table/luage.png",
    date: "10/04/23",
    team1: { name: "Club Brugge", img: "/img/table/brugge.png" },
    team2: { name: "Athletico Madrid", img: "/img/table/atletico-madrid.png" },
  },
  {
    id: 7,
    tournament: "UEFA Champions League",
    img: "/img/table/luage.png",
    date: "11/04/23",
    team1: { name: "Manchester City", img: "/img/table/man-city.png" },
    team2: { name: "Copenhegen", img: "/img/table/compenhagen.png" },
  },
  {
    id: 8,
    tournament: "UEFA Champions League",
    img: "/img/table/luage.png",
    date: "11/04/23",
    team1: { name: "Chelsea", img: "/img/table/chelsea.png" },
    team2: { name: "AC Milan", img: "/img/table/milan.png" },
  },
  {
    id: 9,
    tournament: "UEFA Champions League",
    img: "/img/table/luage.png",
    date: "11/04/23",
    team1: { name: "Sevila", img: "/img/table/sevilla.png" },
    team2: { name: "Borussia Dortmund", img: "/img/table/dortmund.png" },
  },
  {
    id: 10,
    tournament: "UEFA Champions League",
    img: "/img/table/luage.png",
    date: "11/04/23",
    team1: { name: "Juventus", img: "/img/table/juventus.png" },
    team2: { name: "Maccabi Haifa", img: "/img/table/haifa.png" },
  },
  {
    id: 11,
    tournament: "UEFA Champions League",
    img: "/img/table/luage.png",
    date: "11/04/23",
    team1: { name: "Benfica", img: "/img/table/benfica.png" },
    team2: { name: "PSG", img: "/img/table/psg.png" },
  },
];
const football = () => {
  return (
    <>
      <BreadCrumb title="Football" />
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
                  <div className="match-table-head pt-20 pb-20">
                    <h2>Prematch 09.04.2023</h2>
                  </div>
                  <div className="table-wrap mb-5">
                    {footballMatchData
                      .filter((item) => item.date === "09/04/23")
                      .map(({ id, tournament, img, team1, team2 }) => (
                        <div className="table-inner" key={id}>
                          <div className="table-head">
                            <Link href="details" className="left-compo">
                              <span>
                                <img src={img} alt="icon" />
                              </span>
                              <span>{tournament} </span>
                            </Link>
                            <ul className="right-compo">
                              <li>Oct 21 00:45</li>
                              <li>Match Winner</li>
                              <li>Total</li>
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
                                <span>7.58</span>
                              </Link>
                              <Link href="#0" className="table-pointing-box">
                                <span className="list">X</span>
                                <span>8.08</span>
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
                                <span className="last-digit">+37</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  {/* <!--Prematch--> */}
                  {/* <!--table five--> */}
                  <div className="match-table-head pb-20">
                    <h2>Prematch 10.04.2023</h2>
                  </div>
                  <div className="table-wrap mb-5">
                    {footballMatchData
                      .filter((item) => item.date === "10/04/23")
                      .map(({ id, tournament, img, team1, team2 }) => (
                        <div className="table-inner" key={id}>
                          <div className="table-head">
                            <Link href="details" className="left-compo">
                              <span>
                                <img src={img} alt="icon" />
                              </span>
                              <span>{tournament} </span>
                            </Link>
                            <ul className="right-compo">
                              <li>Oct 21 00:45</li>
                              <li>Match Winner</li>
                              <li>Total</li>
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
                                <span>7.58</span>
                              </Link>
                              <Link href="#0" className="table-pointing-box">
                                <span className="list">X</span>
                                <span>8.08</span>
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
                                <span className="last-digit">+37</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  {/* <!--table premiar--> */}
                  <div className="match-table-head pb-20">
                    <h2>Prematch 11.04.2023</h2>
                  </div>
                  <div className="table-wrap">
                    {footballMatchData
                      .filter((item) => item.date === "11/04/23")
                      .map(({ id, tournament, img, team1, team2 }) => (
                        <div className="table-inner" key={id}>
                          <div className="table-head">
                            <Link href="details" className="left-compo">
                              <span>
                                <img src={img} alt="icon" />
                              </span>
                              <span>{tournament} </span>
                            </Link>
                            <ul className="right-compo">
                              <li>Oct 21 00:45</li>
                              <li>Match Winner</li>
                              <li>Total</li>
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
                                <span>7.58</span>
                              </Link>
                              <Link href="#0" className="table-pointing-box">
                                <span className="list">X</span>
                                <span>8.08</span>
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
                                <span className="last-digit">+37</span>
                              </Link>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
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

export default football;
