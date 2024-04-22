import Link from "next/link"
import formatDate from "@/lib/formatDate"
import { Fixture } from "@/lib/types/fixture"
import DisplayOdds from "./DisplayOdds"

const DisplayFixtures = ({ fixtures }: { fixtures: Fixture[] }) => {
  return (
    <>
      {
        fixtures.map(({ fixture, league, teams }) => (
          <div className="table-inner" key={fixture.id}>
            <div className="table-head">
              <Link href={`/details/${fixture.id}`} className="left-compo">
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
                  <div>
                    <span>{teams.home.name}</span>
                    <span className="icon">
                      <img src={teams.home.logo} alt="flag" height={40} />
                    </span>
                  </div>
                </li>
                <li>
                  <div className="vs">
                    VS
                  </div>
                </li>
                <li>
                  <div>
                    <span className="icon">
                      <img src={teams.away.logo} alt="flag" height={40} />
                    </span>
                    <span>{teams.away.name}</span>
                  </div>
                </li>
              </ul>
              {/* <DisplayOdds fixtureId={fixture.id} /> */}
            </div>
          </div>
        ))
      }
    </>
  )
}

export default DisplayFixtures