import { useEffect, useState } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Sponsor from "@/components/Sponsor";
import { Fixture } from "@/lib/types/fixture";
import getFixtures from "@/lib/getFixtures";
import DisplayFixtures from "@/components/DisplayFixtures";
import { DayAfterTomorrow, Today, Tomorrow } from "@/lib/const/date";
import Spinner from "@/components/Spinner";

const football = () => {
  const [fixtures1, setFixtures1] = useState<Fixture[]>([])
  const [fixtures2, setFixtures2] = useState<Fixture[]>([])
  const [fixtures3, setFixtures3] = useState<Fixture[]>([])
  const [filteredFixtures1, setFilteredFixtures1] = useState<Fixture[]>([])
  const [filteredFixtures2, setFilteredFixtures2] = useState<Fixture[]>([])
  const [filteredFixtures3, setFilteredFixtures3] = useState<Fixture[]>([])
  const [loading, setLoading] = useState(false)
  const [searchWord, setSearchWord] = useState("")

  useEffect(() => {
    async function init() {
      setLoading(true)

      const res = await Promise.all([
        await getFixtures(Today.toLocaleDateString('en-CA')),
        await getFixtures(Tomorrow.toLocaleDateString('en-CA')),
        await getFixtures(DayAfterTomorrow.toLocaleDateString('en-CA'))
      ])
      setFixtures1(res[0])
      setFixtures2(res[1])
      setFixtures3(res[2])
      setFilteredFixtures1(res[0])
      setFilteredFixtures2(res[1])
      setFilteredFixtures3(res[2])

      setLoading(false)
    }

    init()
  }, [])

  useEffect(() => {
    if (searchWord) {
      setFilteredFixtures1(
        fixtures1.filter(
          (fixture) => fixture.teams.home.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
            || fixture.teams.away.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
        )
      )
      setFilteredFixtures2(
        fixtures2.filter(
          (fixture) => fixture.teams.home.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
            || fixture.teams.away.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
        )
      )
      setFilteredFixtures3(
        fixtures3.filter(
          (fixture) => fixture.teams.home.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
            || fixture.teams.away.name.toLocaleLowerCase().includes(searchWord.toLocaleLowerCase())
        )
      )
    }
  }, [searchWord])

  return (
    <>
      {
        loading ? <Spinner /> : (
          <>
            <BreadCrumb title="Football" searchWord={searchWord} setSearchWord={setSearchWord} />
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
                          <h2>Prematch {Today.toLocaleDateString('en-CA')}</h2>
                        </div>
                        <div className="table-wrap mb-5">
                          <DisplayFixtures fixtures={filteredFixtures1} />
                        </div>
                        {/* <!--Prematch--> */}
                        {/* <!--table five--> */}
                        <div className="match-table-head pb-20">
                          <h2>Prematch {Tomorrow.toLocaleDateString('en-CA')}</h2>
                        </div>
                        <div className="table-wrap mb-5">
                          <DisplayFixtures fixtures={filteredFixtures2} />
                        </div>
                        {/* <!--table premiar--> */}
                        <div className="match-table-head pb-20">
                          <h2>Prematch {DayAfterTomorrow.toLocaleDateString('en-CA')}</h2>
                        </div>
                        <div className="table-wrap">
                          <DisplayFixtures fixtures={filteredFixtures3} />
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
        )
      }
    </>
  );
};

export default football;
