import { useTheme } from 'next-themes';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode, useState } from 'react';

import { useAuth } from '@/provider/AuthProvider';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { WalletConnectButton } from './ConnectButton';

type Props = {
  children: ReactNode;
  // Other props
}
export default function Layout({ children }: Props) {
  const { theme, setTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth()
  const [openMenu, setOpenMenu] = useState(false)
  const [openMenu2, setOpenMenu2] = useState(false)

  const inactiveTheme = theme === "light" ? "dark" : "light";
  const { pathname } = useRouter()

  return (
    <>
      <Head>
        <title>Online Bets -  Sports Betting Website</title>
        <meta name="description" content="This is sports betting website based on base chain" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header className="header-section header-hidden">
          <div className="header-wrapper">
            <div className="menu-logo-adjust d-flex align-items-center">
              <div className="logo-menu">
                <Link href="/" className="logo">
                  <img src="/img/logo/logo.png" alt="logo" />
                </Link>
                <Link href="/" className="dark-logo">
                  <img src="/img/logo/logo.png" alt="logo" />
                </Link>
              </div>
              <div className="logo-menu2 d-flex align-items-center">
                <img src="/img/logo/logo2.png" alt="logo" />
              </div>
              <div className={`header-bar ${openMenu && 'active act'}`} onClick={() => setOpenMenu(!openMenu)}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <ul className={`main-menu ${openMenu && 'active act'}`}>
                <li className="menu--btn">
                  <Link href="#0" className="btn--two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    <span>Log In</span>
                  </Link>
                </li>
                <li className="menu--btn">
                  <Link href="#0" className="cmn--btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                    <span>Sign Up</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="right-menu-reature">
              <div className="mode--toggle" onClick={() => setTheme(inactiveTheme)}>
                <img src={`/img/${theme === 'dark' ? 'moon' : 'sun'}.png`} alt="" />
              </div>
              <div className="signup-area">
                {
                  isAuthenticated ? (
                    <>
                      <button className="btn--two" onClick={logout}>
                        <span>
                          Log out
                        </span>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link href="#0" className="btn--two" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <span>
                          Log In
                        </span>
                      </Link>
                      <Link href="#0" className="cmn--btn" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                        <span>
                          Sign Up
                        </span>
                      </Link>
                    </>
                  )
                }

                {isAuthenticated && <WalletConnectButton />}

              </div>
            </div>
          </div>
        </header>
        {/* <!--==== Header top End  ====== --> */}

        {/* <!--Main Body Section Here--> */}
        {/* <!--Main Body Section Here--> */}
        <div className="main-body">
          {/* <!--Left Box Menu--> */}
          <div className="left-site-menu">
            <div className="left-box">
              <header className="header">
                <nav className={`menu ${openMenu2 && 'active act'}`}>
                  <ul className="main-list-menu">
                    <li>
                      <ul className="menu-promot menu-promot-first">
                        <li>
                          <form>
                            <input type="text" placeholder="Search........." />
                            <span className="icon">
                              <i className="fas fa-magnifying-glass"></i>
                            </span>
                          </form>
                        </li>
                        <li>
                          <Link href="/" className={`${pathname == '/' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-home"></i>
                            </div>
                            <span>
                              Home
                            </span>
                          </Link>
                          <Link href="/" className={`main-list-menu-live ${pathname == '/live' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-live"></i>
                            </div>
                            <span>
                              Live
                            </span>
                            <span className="live-watch">
                              10
                            </span>
                          </Link>
                          <Link href="/" className={`${pathname == '/favorites' && 'active'}`}>
                            <div className="icon">
                              <i className="fas fa-star"></i>
                            </div>
                            <span>
                              Favorites
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <ul className="menu-promot menu-promot-bottom">
                        <li className="pro">
                          Games
                        </li>


                        <li>
                          <Link href="/" className={`${pathname == '/football' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-football"></i>
                            </div>
                            <span>
                              Football
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${pathname == '/basketball' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-basketball"></i>
                            </div>
                            <span>
                              Basketball
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="ebasketball" className={`${pathname == '/ebasketball' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-basketball"></i>
                            </div>
                            <span>
                              eBasketball
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="tennis" className={`${pathname == '/tennis' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-tennis"></i>
                            </div>
                            <span>
                              Tennis
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="etennis" className={`${pathname == '/etennis' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-etennis"></i>
                            </div>
                            <span>
                              eTennis
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="dota2" className={`${pathname == '/dota2' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-dota"></i>
                            </div>
                            <span>
                              Dota 2
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="lol" className={`${pathname == '/lol' && 'active'}`}>
                            <div className="icon">
                              <i className="fas fa-star"></i>
                            </div>
                            <span>
                              LOL
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="icehocky" className={`${pathname == '/icehocky' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-hockyball"></i>
                            </div>
                            <span>
                              Ice Hockey
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${pathname == '/tabletennis' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-tabletennis"></i>
                            </div>
                            <span>
                              Table Tennis
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${pathname == '/volleyball' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-volleyball"></i>
                            </div>
                            <span>
                              Volleyball
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${pathname == '/basevall' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-baseball"></i>
                            </div>
                            <span>
                              Baseball
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${pathname == '/rugby' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-rugby"></i>
                            </div>
                            <span>
                              Rugby
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${pathname == '/mma' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-mma"></i>
                            </div>
                            <span>
                              MMA
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${pathname == '/americanball' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-americanball"></i>
                            </div>
                            <span>
                              American Football
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${pathname == '/boxing' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-boxing"></i>
                            </div>
                            <span>
                              Boxing
                            </span>
                          </Link>
                        </li>
                        <li>
                          <Link href="/" className={`${pathname == '/cricket' && 'active'}`}>
                            <div className="icon">
                              <i className="icon-cricket"></i>
                            </div>
                            <span>
                              Cricket
                            </span>
                          </Link>
                        </li>


                      </ul>
                    </li>
                  </ul>
                  <div className={`hamburger ${openMenu2 && 'active act'}`} onClick={() => setOpenMenu2(!openMenu2)}>
                    <span></span>
                  </div>
                  <div className={`hamb ${openMenu2 && 'active act'}`} onClick={() => setOpenMenu2(!openMenu2)}>
                    <span></span>
                  </div>
                  <div className={`dimmer ${openMenu2 && 'active act'}`}></div>
                </nav>
              </header>
            </div>
          </div>
          {/* <!--Left Box Menu--> */}

          {/* <!--Middle Body--> */}
          <div className="body-middle">


            {children}
            {/* // <!--Footer Section--> */}
            <footer className="footer-section">
              <div className="container">
                <div className="footer-wrapper">
                  <p>
                    Copyright {new Date().getFullYear().toString()} <Link href="/" className="text-base">Sports Pepe</Link> All Rights Reserved.
                  </p>
                  <ul className="footer-link">
                    <li>
                      <Link href="/">
                        Affiliate program
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Terms & conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        Bonus terms & conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
            {/* // <!--Footer Section--> */}
            <Link href="#0" className="click-btn" data-bs-toggle="modal" data-bs-target="#exampleModal3">
              <i className="icon-basketball"></i>
            </Link>
          </div>
          {/* // <!--Middle Body--> */}

          {/* // <!--Right Box Chat--> */}
          <div className="right-site-menu">
            <div className="right-box">
              <div className="right-wrapper-area">
                <div className="blance-items">
                  <div className="left-blance">
                    <span><img src="/img/header/right-icon/wallet.svg" alt="icon" /></span>
                    <span className="text-blabce">Balance</span>
                  </div>
                  <span className="blance">
                    $300
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
                <div className="combo-box">
                  <ul className="nav">
                    <li className="nav-item">
                      <Link className="nav-link link-secondary" id="combo-tab" data-bs-toggle="tab" data-bs-target="#coombo" href="#"><span>Single bets</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link link-secondary active" id="bets-tab" data-bs-toggle="tab" data-bs-target="#bbets" href="#"><span>Combo</span></Link>
                    </li>
                  </ul>
                  <div className="tab-content" id="tabContentboxes">
                    <div className="tab-pane fade" id="coombo" role="tabpanel" >
                      <div className="combo-wrapper">
                        <div className="combo-wrapper">
                          <div className="close-box">
                            <div className="close-items">
                              <div className="close-head">
                                <span>Latvia vs Moldova</span>
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
                                      <span>Moldova</span>
                                      <span className="winner">Match Winner</span>
                                    </div>
                                  </div>
                                  <div className="match-items-right">
                                    <div className="icon">
                                      <img src="/img/header/right-icon/uptodwon.svg" alt="icon" />
                                    </div>
                                    <span>5.20</span>
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
                              <input type="number" placeholder="Bet Amount" />
                              <button type="submit">
                                Max
                              </button>
                            </form>
                          </div>
                          <div className="possible-win">
                            <span>Possible win</span>
                            <span className="amount">$300</span>
                          </div>
                          <div className="combo-footer">
                            <Link href="#0" className="cmn--btn">
                              <span> Place Bet $300</span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tab-pane fade show active" id="bbets" role="tabpanel">
                      <div className="combo-wrapper">
                        <div className="close-box">
                          <div className="close-items">
                            <div className="close-head">
                              <span>Scotland vs Ukraine</span>
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
                            <input type="number" placeholder="Bet Amount" />
                            <button type="submit">
                              Max
                            </button>
                          </form>
                        </div>
                        <div className="possible-win">
                          <span>Possible win</span>
                          <span className="amount">$300</span>
                        </div>
                        <div className="combo-footer">
                          <Link href="#0" className="cmn--btn">
                            <span> Place Bet $300</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* // <!--Right Box Chat--> */}
        </div>
        {/* // <!--Main Body Section End--> */}
        {/* // <!--Main Body Section End--> */}

        {/* // <!-- Popup Section Start --> */}
        <SignIn />
        <SignUp />
        {/* // <!--menu modal--> */}
        <div className="modal right-menu-modal fade" id="exampleModal3" tabIndex={-1} aria-hidden="true">
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              <button type="button" className="btn-close cross-btn" data-bs-dismiss="modal" aria-label="Close"></button>
              <div className="modal-body">
                <div className="right-site-menu">
                  <div className="right-box">
                    <div className="right-wrapper-area">
                      <div className="blance-items">
                        <div className="left-blance">
                          <span><img src="/img/header/right-icon/wallet.svg" alt="icon" /></span>
                          <span className="text-blabce">Balance</span>
                        </div>
                        <span className="blance">
                          $300
                        </span>
                      </div>
                      <div className="betslip-wrapper">
                        <Link href="#0" className="left-betslip">
                          <span><img src="/img/header/right-icon/bed.svg" alt="icon" /></span>
                          <span className="text-bets">Bet Slip</span>
                        </Link>
                        <Link href="#0" className="left-betslip">
                          <span><img src="/img/header/right-icon/bets.svg" alt="icon" /></span>
                          <span className="text-bets">My Bets</span>
                        </Link>
                      </div>
                      <div className="combo-box">
                        <ul className="nav">
                          <li className="nav-item">
                            <Link className="nav-link link-secondary" data-bs-toggle="tab" data-bs-target="#coombomobile" href="#"><span>Single bets</span></Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link link-secondary active" data-bs-toggle="tab" data-bs-target="#bbetsmobile" href="#"><span>Combo</span></Link>
                          </li>
                        </ul>
                        <div className="tab-content" id="tabContentboxesmobile">
                          <div className="tab-pane fade" id="coombomobile" role="tabpanel" >
                            <div className="combo-wrapper">
                              <div className="combo-wrapper">
                                <div className="close-box">
                                  <div className="close-items">
                                    <div className="close-head">
                                      <span>Latvia vs Moldova</span>
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
                                            <span>Moldova</span>
                                            <span className="winner">Match Winner</span>
                                          </div>
                                        </div>
                                        <div className="match-items-right">
                                          <div className="icon">
                                            <img src="/img/header/right-icon/uptodwon.svg" alt="icon" />
                                          </div>
                                          <span>5.20</span>
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
                                    <input type="number" placeholder="Bet Amount" />
                                    <button type="submit">
                                      Max
                                    </button>
                                  </form>
                                </div>
                                <div className="possible-win">
                                  <span>Possible win</span>
                                  <span className="amount">$300</span>
                                </div>
                                <div className="combo-footer">
                                  <Link href="#0" className="cmn--btn">
                                    <span> Place Bet $300</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade show active" id="bbetsmobile" role="tabpanel">
                            <div className="combo-wrapper">
                              <div className="close-box">
                                <div className="close-items">
                                  <div className="close-head">
                                    <span>Scotland vs Ukraine</span>
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
                                  <input type="number" placeholder="Bet Amount" />
                                  <button type="submit">
                                    Max
                                  </button>
                                </form>
                              </div>
                              <div className="possible-win">
                                <span>Possible win</span>
                                <span className="amount">$300</span>
                              </div>
                              <div className="combo-footer">
                                <Link href="#0" className="cmn--btn">
                                  <span> Place Bet $300</span>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
