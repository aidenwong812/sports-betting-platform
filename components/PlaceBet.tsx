import Link from "next/link"
import { formatUnits, parseUnits } from "viem"
import { useBet } from "@/provider/BetProvider"
import { useWeb3 } from "@/provider/Web3Provider"
import { useEffect } from "react"

const PlaceBet = () => {
  const {
    betAmount,
    setBetAmount,
    betType,
    setBetType,
    selectedFixture,
    selectedOdd,
  } = useBet()
  const {
    approvePaymentToken,
    decimalData,
    walletBalance,
    placeBet,
    receipt,
  } = useWeb3()

  const handlePlaceBet = () => {
    approvePaymentToken("0xfFf9976782d46CC05630D1f6eBAb18b2324d6B14", parseUnits((betAmount || 0).toString(), decimalData || 18))
  }

  useEffect(() => {
    if (receipt?.status) {
      placeBet()
    }
  }, [receipt?.status])

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
              {`$${formatUnits(walletBalance || BigInt(0), decimalData || 18) || 0.00}`}
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
            selectedFixture && selectedOdd.length > 0 && (
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
                              <span>{selectedFixture.teams?.home?.name} vs {selectedFixture.teams?.away?.name}</span>
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
                                        selectedOdd[0].value === "Home"
                                          ? selectedFixture.teams.home.name
                                          : selectedOdd[0].value === "Away" ? selectedFixture.teams.away.name : "Draw"
                                      }
                                    </span>
                                    <span className="winner">Match Winner</span>
                                  </div>
                                </div>
                                <div className="match-items-right">
                                  <div className="icon">
                                    <img src="/img/header/right-icon/uptodwon.svg" alt="icon" />
                                  </div>
                                  <span>{selectedOdd[0].odd}</span>
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
                              onChange={e => setBetAmount(parseFloat(e.target.value))}
                            />
                            <button type="submit">
                              Max
                            </button>
                          </form>
                        </div>
                        <div className="possible-win">
                          <span>Possible win</span>
                          <span className="amount">
                            ${(betAmount * selectedOdd[0].odd || 0).toFixed(2)}
                          </span>
                        </div>
                        <div className="combo-footer">
                          <Link href="#0" className="cmn--btn" onClick={handlePlaceBet}>
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
                                  <span>
                                    {
                                      selectedOdd[0].value === "Home"
                                        ? selectedFixture.teams.home.name
                                        : selectedOdd[0].value === "Away" ? selectedFixture.teams.away.name : "Draw"
                                    }
                                  </span>
                                  <span className="winner">Match Winner</span>
                                </div>
                              </div>
                              <div className="match-items-right">
                                <div className="icon">
                                  <img src="/img/header/right-icon/uptodwon.svg" alt="icon" />
                                </div>
                                <span>{selectedOdd[0].odd}</span>
                              </div>
                            </div>
                            {
                              selectedOdd[1] && (
                                <div className="match-items">
                                  <div className="match-items-left">
                                    <div className="icon">
                                      <img src="/img/header/right-icon/footaball.svg" alt="icon" />
                                    </div>
                                    <div className="cont">
                                      <span>
                                        {
                                          selectedOdd[1].value === "Home"
                                            ? selectedFixture.teams.home.name
                                            : selectedOdd[1].value === "Away" ? selectedFixture.teams.away.name : "Draw"
                                        }
                                      </span>
                                      <span className="winner">Match Winner</span>
                                    </div>
                                  </div>
                                  <div className="match-items-right">
                                    <div className="icon">
                                      <img src="/img/header/right-icon/uptodwon.svg" alt="icon" />
                                    </div>
                                    <span>{selectedOdd[1].odd}</span>
                                  </div>
                                </div>
                              )
                            }
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
                                <span>
                                  {
                                    selectedOdd.length > 1
                                      ? (parseFloat(selectedOdd[0].odd) + parseFloat(selectedOdd[1].odd)).toFixed(2)
                                      : selectedOdd[0].odd
                                  }
                                </span>
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
                            onChange={e => setBetAmount(parseFloat(e.target.value))}
                          />
                          <button type="submit">
                            Max
                          </button>
                        </form>
                      </div>
                      <div className="possible-win">
                        <span>Possible win</span>
                        <span className="amount">
                          ${(betAmount * selectedOdd[0].odd || 0).toFixed(2)}
                        </span>
                      </div>
                      <div className="combo-footer">
                        <Link href="#0" className="cmn--btn" onClick={handlePlaceBet}>
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