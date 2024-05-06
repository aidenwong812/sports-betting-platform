import { useState } from "react"
import { useBet } from "@/provider/BetProvider"
import Link from "next/link"

const PlaceBet = () => {
  const { betType, setBetType, selectedFixture, selectedOdd } = useBet()
  const [betAmount, setBetAmount] = useState(0)
  console.log(selectedFixture)
  console.log(selectedOdd)

  return (
    <div className="right-site-menu">
      <div className="right-box">
        <div className="right-wrapper-area">
          <div className="blance-items">
            <div className="left-blance">
              <span><img src="/img/header/right-icon/wallet.svg" alt="icon" /></span>
              <span className="text-blabce">Balance</span>
            </div>
            <span className="blance">
              $0
            </span>
          </div>
          <div className="betslip-wrapper">
            <Link href="#0" className="left-betslip">
              <span className="bed2"><img src="/img/header/right-icon/bed2.png" alt="icon" /></span>
              <span className="bed1"><img src="/img/header/right-icon/bed.svg" alt="icon" /></span>
              <span className="text-bets">Bet Slip</span>
            </Link>
            <Link href="#0" className="left-betslip">
              <span><img src="/img/header/right-icon/bets.svg" alt="icon" /></span>
              <span className="text-bets">My Bets</span>
            </Link>
          </div>
          {
            selectedFixture && selectedOdd && (
              <div className="combo-box">
                <ul className="nav">
                  <li className="nav-item">
                    <Link
                      className={`nav-link link-secondary ${betType === "single" ? "active" : ""}`}
                      id="combo-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#coombo"
                      href="#"
                      onClick={() => setBetType("single")}
                    >
                      <span>Single bets</span>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link link-secondary ${betType === "combo" ? "active" : ""}`}
                      id="bets-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#bbets"
                      href="#"
                      onClick={() => setBetType("combo")}
                    >
                      <span>Combo</span>
                    </Link>
                  </li>
                </ul>
                <div className="tab-content" id="tabContentboxes">
                  <div
                    className={`tab-pane fade show ${betType === "single" ? "active" : ""}`}
                    id="coombo"
                    role="tabpanel"
                  >
                    <div className="combo-wrapper">
                      <div className="combo-wrapper">
                        <div className="close-box">
                          <div className="close-items">
                            <div className="close-head">
                              <span>{selectedFixture.teams.home.name} vs {selectedFixture.teams.away.name}</span>
                              <span className="close">
                                <i className="fas fa-xmark"></i>
                              </span>
                            </div>
                            <div className="match-fixing">
                              <div className="match-items">
                                <div className="match-items-left">
                                  <div className="icon">
                                    <img src="/img/header/right-icon/footaball.svg" alt="icon" />
                                  </div>
                                  <div className="cont">
                                    <span>
                                      {
                                        selectedOdd.value === "Home"
                                          ? selectedFixture.teams.home.name
                                          : selectedOdd.value === "Away" ? selectedFixture.teams.away.name : "Draw"
                                      }
                                    </span>
                                    <span className="winner">Match Winner</span>
                                  </div>
                                </div>
                                <div className="match-items-right">
                                  <div className="icon">
                                    <img src="/img/header/right-icon/uptodwon.svg" alt="icon" />
                                  </div>
                                  <span>{selectedOdd.odd}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="combo-switch">
                          <span>
                            Accept all odds changes
                          </span>
                          <label className="switch-com">
                            <input type="checkbox" className="checkbox" hidden />
                            <span className="checkbox-label">
                              <span className="ball"></span>
                            </span>
                          </label>
                        </div>
                        <div className="ammount-items">
                          <form action="#">
                            <input
                              type="number"
                              placeholder="Bet Amount"
                              value={betAmount}
                              onChange={e => setBetAmount(parseInt(e.target.value))}
                            />
                            <button type="submit">
                              Max
                            </button>
                          </form>
                        </div>
                        <div className="possible-win">
                          <span>Possible win</span>
                          <span className="amount">
                            ${(betAmount * selectedOdd.odd || 0).toFixed(2)}
                          </span>
                        </div>
                        <div className="combo-footer">
                          <Link href="#0" className="cmn--btn">
                            <span> Place Bet ${betAmount || 0}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade show ${betType === "combo" ? "active" : ""}`}
                    id="bbets"
                    role="tabpanel"
                  >
                    <div className="combo-wrapper">
                      <div className="close-box">
                        <div className="close-items">
                          <div className="close-head">
                            <span>{selectedFixture.teams.home.name} vs {selectedFixture.teams.away.name}</span>
                            <span className="close">
                              <i className="fas fa-xmark"></i>
                            </span>
                          </div>
                          <div className="match-fixing">
                            <div className="match-items">
                              <div className="match-items-left">
                                <div className="icon">
                                  <img src="/img/header/right-icon/footaball.svg" alt="icon" />
                                </div>
                                <div className="cont">
                                  <span>Scotland</span>
                                  <span className="winner">Match Winner</span>
                                </div>
                              </div>
                              <div className="match-items-right">
                                <div className="icon">
                                  <img src="/img/header/right-icon/uptodwon.svg" alt="icon" />
                                </div>
                                <span>3.20</span>
                              </div>
                            </div>
                            <div className="match-items">
                              <div className="match-items-left">
                                <div className="icon">
                                  <img src="/img/header/right-icon/footaball.svg" alt="icon" />
                                </div>
                                <div className="cont">
                                  <span>Draw</span>
                                  <span className="winner">Match Winner</span>
                                </div>
                              </div>
                              <div className="match-items-right">
                                <div className="icon">
                                  <img src="/img/header/right-icon/uptodwon.svg" alt="icon" />
                                </div>
                                <span>4.60</span>
                              </div>
                            </div>
                            <div className="match-items match-odds">
                              <div className="match-items-left">
                                <div className="cont">
                                  <span>Total odds</span>
                                </div>
                              </div>
                              <div className="match-items-right">
                                <div className="icon">
                                  <img src="/img/header/right-icon/uptodwon.svg" alt="icon" />
                                </div>
                                <span>12.19</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="combo-switch">
                        <span>
                          Accept all odds changes
                        </span>
                        <label className="switch-com">
                          <input type="checkbox" className="checkbox" hidden />
                          <span className="checkbox-label">
                            <span className="ball"></span>
                          </span>
                        </label>
                      </div>
                      <div className="ammount-items">
                        <form action="#">
                          <input
                            type="number"
                            placeholder="Bet Amount"
                            value={betAmount}
                            onChange={e => setBetAmount(parseInt(e.target.value))}
                          />
                          <button type="submit">
                            Max
                          </button>
                        </form>
                      </div>
                      <div className="possible-win">
                        <span>Possible win</span>
                        <span className="amount">
                          ${(betAmount * selectedOdd.odd || 0).toFixed(2)}
                        </span>
                      </div>
                      <div className="combo-footer">
                        <Link href="#0" className="cmn--btn">
                          <span> Place Bet ${betAmount || 0}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default PlaceBet