import axios from "axios";
import { Fixture } from "../types/fixture";
import { toast } from "react-toastify";

const saveFixture = async (fixture: Fixture) => {
  const res = await axios.post(
    "/api/fixture/save",
    {
      fixtureId: fixture.fixture.id,
      fixtureDate: fixture.fixture.date,
      league: fixture.league.name,
      homeTeam: fixture.teams.home.id,
      awayTeam: fixture.teams.away.id,
      homeTeamName: fixture.teams.home.name,
      awayTeamName: fixture.teams.away.name,
    }
  );
  if (res.status === 200 && res.data.res === "success") {
    toast.success("success!!!")
  } else {
    if (res.data?.error) {
      if (res.data.error === "Fixture already exist") {
        toast.success("success!!!")
      } else {
        console.log(res.data.error)
        toast.error("Fail!!!")
      }
    }
  }
}

export default saveFixture