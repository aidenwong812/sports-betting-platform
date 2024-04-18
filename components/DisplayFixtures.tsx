import Link from "next/link"
import formatDate from "@/lib/formatDate"
import { Fixture } from "@/lib/types/fixture"

const DisplayFixtures = ({ fixtures }: { fixtures: Fixture[] }) => {
  return (
    <>
      {
        fixtures.map(({ fixture, league, teams }) => (
          <div className="table-inner" key={fixture.id}>
            <div className="table-head">
              <Link href="details" className="left-compo">
                <span>
                  <img src={league.logo} alt="icon" height={30} />
                </span>
                <span>{league.name}</span>
              </Link>
              <ul className="right-compo">
                <li>{formatDate(fixture.date)}</li>
                <li>Match Winner</li>
                <li>Total</li>
              </ul>
            </div>
            <div className="table-body">
              <ul className="table-body-left">
                <li>
                  <Link href="#0">
                    <span>{teams.home.name}</span>
                    <span className="icon">
                      <img src={teams.home.logo} alt="flag" height={40} />
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
                      <img src={teams.away.logo} alt="flag" height={40} />
                    </span>
                    <span>{teams.away.name}</span>
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
        ))
      }
    </>
  )
}

export default DisplayFixtures