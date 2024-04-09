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
    Tomorrow: [
      {
        id: 1,
        img: "",
        title: "Rugby Union. Championship of Wales. Pre...",
        team1: { name: "Slovan Bratislava-2", img: "" },
        team2: { name: "Wave Esports", img: "" },
      },
      {
        id: 2,
        img: "/img/table/prod2.png",
        title: "Rugby Union. Championship of Wales. Pre...",
        team2: { name: "MOUZ", img: "" },
        team1: { name: "WeSports", img: "" },
      },
      {
        id: 3,
        img: "",
        title: "Rugby Union. Championship of Wales. Pre...",
        team1: { name: "Zlin", img: "" },
        team2: { name: "Litomerice", img: "" },
      },
      {
        id: 4,
        img: "",
        title: "Championship of Finland. Mestis",
        team1: { name: "Sprought", img: "" },
        team2: { name: "BIG", img: "" },
      },
      {
        id: 5,
        img: "",
        title: "League of Legends. Prime League",
        team1: { name: "All for one", img: "" },
        team2: { name: "Topolcany", img: "" },
      },
      {
        id: 6,
        img: "",
        title: "League of Legends. Prime League",
        team1: { name: "Lodis by Illuminar", img: "" },
        team2: { name: "9INE", img: "" },
      },
      ,
    ],
  },
  {
    "Prematch 08.10.2023": [
      {
        id: 7,
        img: "/img/table/rbr.png",
        title: "League of Legends. Prime League",
        team1: { name: "Sprought", img: "" },
        team2: { name: "BIG", img: "" },
      },
      {
        id: 8,
        img: "/img/table/rbr.png",
        title: "League of Legends. Prime League",
        team1: { name: "Sprought", img: "" },
        team2: { name: "Sevila", img: "" },
      },
      {
        id: 9,
        img: "",
        title: "League of Legends. Prime League",
        team1: { name: "Sprought", img: "" },
        team2: { name: "Maccabi Haifa", img: "" },
      },
      {
        id: 10,
        img: "/img/table/prod2.png",
        title: "League of Legends. Prime League",
        team1: { name: "Sprought", img: "" },
        team2: { name: "Benifa", img: "" },
      },
      {
        id: 11,
        img: "/img/table/rbleauge.png",
        title: "League of Legends. Prime League",
        team1: { name: "Sprought", img: "" },
        team2: { name: "BIG", img: "/img/table/france.png" },
      },
      {
        id: 12,
        img: "/img/table/rbleauge.png",
        title: "League of Legends. Prime League",
        team1: { name: "Sprought", img: "" },
        team2: { name: "PSG", img: "" },
      },
    ],
  },
  {
    "Prematch 09.10.2023": [
      {
        id: 13,
        img: "/img/table/slovaka.png",
        title: "League of Legends. Prime League",
        team1: { name: "Sprought", img: "/img/table/fc.png" },
        team2: { name: "Juventas", img: "/img/table/big.png" },
      },
    ],
  },
  {
    "Prematch 10.4.2023": [
      {
        id: 14,
        img: "/img/table/rbleauge.png",
        title: "Championship of Belarus. Extraliga",
        team1: { name: "Sprought", img: "/img/table/england.png" },
        team2: { name: "Liverpool", img: "/img/table/samoa.png" },
      },
    ],
  },
  {
    "Prematch 12.4.2023": [
      {
        id: 14,
        img: "/img/table/rbleauge.png",
        title: "Championship of Belarus. Extraliga",
        team1: { name: "Sprought", img: "" },
        team2: { name: "Liverpool", img: "" },
      },
      {
        id: 15,
        img: "/img/table/rbleauge.png",
        title: "Championship of Belarus. Extraliga",
        team1: { name: "Sprought", img: "" },
        team2: { name: "Chelsea", img: "" },
      },
    ],
  },
];
const rugby = () => {
  return (
    <>
      <BreadCrumb title="Rugby" />
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
                                      {singleItem.img ? (
                                        <img src={singleItem.img} alt="image" />
                                      ) : (
                                        <i className="icon-rugby"></i>
                                      )}
                                    </span>
                                    <span>{singleItem.title} </span>
                                  </Link>
                                  <ul className="right-compo">
                                    <li>Oct 7-00:30</li>
                                    <li>Match Winner</li>
                                    <li>Total</li>
                                  </ul>
                                </div>
                                <div className="table-body">
                                  <ul className="table-body-left">
                                    <li>
                                      <Link href="#0">
                                        <span>{singleItem.team1.name}</span>
                                        <span className="icon">
                                          {singleItem.team1.img ? (
                                            <img
                                              src={singleItem.team1.img}
                                              alt="image"
                                            />
                                          ) : (
                                            <i className="icon-rugby"></i>
                                          )}
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
                                          {singleItem.team2.img ? (
                                            <img
                                              src={singleItem.team2.img}
                                              alt="image"
                                            />
                                          ) : (
                                            <i className="icon-rugby"></i>
                                          )}
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
                                      <span>1.05</span>
                                    </Link>
                                    <Link
                                      href="#0"
                                      className="table-pointing-box">
                                      <span className="list">2</span>
                                      <span>40.00</span>
                                    </Link>
                                    <Link
                                      href="#0"
                                      className="table-pointing-box">
                                      <span className="list">O 2.5</span>
                                      <span>02.3</span>
                                    </Link>
                                    <Link
                                      href="#0"
                                      className="table-pointing-box">
                                      <span className="list">U 2.5</span>
                                      <span>1.61</span>
                                    </Link>
                                    <Link
                                      href="#0"
                                      className="table-pointing-box">
                                      <span className="last-digit">+32</span>
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

export default rugby;
