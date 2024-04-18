import { useEffect, useState } from "react";
import BreadCrumb from "@/components/BreadCrumb";
import Sponsor from "@/components/Sponsor";
import { Fixture } from "@/lib/types/fixture";
import getFixtures from "@/lib/getFixtures";
import DisplayFixtures from "@/components/DisplayFixtures";
import { DayAfterTomorrow, Today, Tomorrow } from "@/lib/const/date";
import Spinner from "@/components/spinner";

const football = () => {
  const [fixtures1, setFixtures1] = useState<Fixture[]>([])
  const [fixtures2, setFixtures2] = useState<Fixture[]>([])
  const [fixtures3, setFixtures3] = useState<Fixture[]>([])
  const [loading, setLoading] = useState(false)

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
      setLoading(false)
    }

    init()
  }, [])

  return (
    <>
      {
        loading ? <Spinner /> : (
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
                          <h2>Prematch {Today.toLocaleDateString('en-CA')}</h2>
                        </div>
                        <div className="table-wrap mb-5">
                          <DisplayFixtures fixtures={fixtures1} />
                        </div>
                        {/* <!--Prematch--> */}
                        {/* <!--table five--> */}
                        <div className="match-table-head pb-20">
                          <h2>Prematch {Tomorrow.toLocaleDateString('en-CA')}</h2>
                        </div>
                        <div className="table-wrap mb-5">
                          <DisplayFixtures fixtures={fixtures2} />
                        </div>
                        {/* <!--table premiar--> */}
                        <div className="match-table-head pb-20">
                          <h2>Prematch {DayAfterTomorrow.toLocaleDateString('en-CA')}</h2>
                        </div>
                        <div className="table-wrap">
                          <DisplayFixtures fixtures={fixtures3} />
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
