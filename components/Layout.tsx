import { useTheme } from 'next-themes';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode, useId, useState } from 'react';
import Select, { StylesConfig } from 'react-select';

import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import { WalletConnectButton } from './ConnectButton';

interface Option {
  value: string;
  label: string;
}
const options = [
  { value: 'EN', label: 'EN' },
  { value: 'BN', label: 'BN' },
  { value: 'AR', label: 'AR' },
];
const langOptions = [
  { value: 'English', label: 'English' },
  { value: 'Spanish', label: 'Spanish' }
]
const decimalOptions = [
  { value: 'Decimal', label: 'Decimal' },
  { value: 'Odds', label: 'Odds' }
]
type Props = {
  children: ReactNode;
  // Other props
}
export default function Layout({ children }: Props) {
  const { theme, setTheme } = useTheme();
  const [selectedOption, setSelectedOption] = useState<Option | null | unknown>(options[0]);
  const [selectedLangOption, setSelectedLangOption] = useState<Option | null | unknown>(langOptions[0]);
  const [selectedDacimalOption, setSelectedDacimalOption] = useState<Option | null | unknown>(decimalOptions[0]);
  const [openSignIn, setOpenSignIn] = useState(false)
  const [openSignUp, setOpenSignUp] = useState(false)

  const [openWallet, setOpenWallet] = useState(false);
  const inactiveTheme = theme === "light" ? "dark" : "light";
  const { pathname } = useRouter()  

  const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: theme !== "dark" ? "#1F493F" : "#D5DDEC",
      borderColor: '#1F493F',
      border: state.isFocused ? '0' : '0',
    }),
    option: (provided, state) => ({
      ...provided,
      color: state.isSelected ? '#ffffff' : '#000',
      backgroundColor: state.isSelected ? '#1F493F' : '#ffffff'
    }),
    singleValue: base => ({
      ...base,
      color: theme !== "dark" ? "#fff" : "#000",
      border: 'none'
    }),
  };

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
              <div className="logo-menu me-5">
                <Link href="/" className="logo">
                  <img src="/img/logo/logo.png" alt="logo" />
                </Link>
                <Link href="/" className="dark-logo">
                  <img src="/img/logo/logo.png" alt="logo" />
                </Link>
              </div>
              {/* <div className={`header-bar ${openSignIn && 'active act'}`} onClick={() => setOpenSignIn(!openSignIn)}>
                <span></span>
                <span></span>
                <span></span>
              </div> */}
              <ul className={`main-menu ${openSignIn && 'active act'}`}>
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
              {/* <div className="mode--toggle" onClick={() => setTheme(inactiveTheme)}>
                <img src={`/img/${theme === 'dark' ? 'moon' : 'sun'}.png`} alt="" />
              </div> */}
              <div className="signup-area">
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
               
                { openWallet && <WalletConnectButton /> }

              </div>
            </div>
          </div>
        </header>
        {/* <!--==== Header top End  ====== --> */}

        {/* <!--Main Body Section Here--> */}
        {/* <!--Main Body Section Here--> */}
        <div className="main-body">
          {/* <!--Left Box Menu--> */}
          {/* <!--Left Box Menu--> */}

          {/* <!--Middle Body--> */}
          <div className="body-middle">


            {children}
            {/* // <!--Footer Section--> */}
            <footer className="footer-section">
              <div className="container">
                <div className="footer-wrapper">
                  <p>
                    Copyright {new Date().getFullYear().toString()} <Link href="#0" className="text-base">Sports Pepe</Link> All Rights Reserved.
                  </p>
                  <ul className="footer-link">
                    <li>
                      <Link href="#0">
                        Affiliate program
                      </Link>
                    </li>
                    <li>
                      <Link href="#0">
                        Terms & conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="#0">
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
                              <p>
                                Add 2 more outcome(s) with odds greater than 1.4 to get x1.08
                              </p>
                              <div className="match-items match-progress">
                                <div className="match-items-left">
                                  <div className="prabox-wrap">
                                    <div className="terminal-bar">
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                      <span></span>
                                    </div>
                                    <div className="bar-count">
                                      <p>x1.08</p>
                                      <p>x1,15</p>
                                      <p>x1.20</p>
                                      <p>x1.50</p>
                                    </div>
                                  </div>
                                </div>
                                <div className="match-items-right">
                                  <div className="icon">
                                    <img src="/img/header/right-icon/uptodwon.svg" alt="icon" />
                                  </div>
                                  <span>1.00</span>
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
                <div className="accordion-box">
                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <div className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                          <span className="icon"><i className="fa-sharp fa-solid fa-gear"></i></span>
                          <span>Settings</span>
                        </button>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                          <div className="accordion-body">
                            <div className="select-wrap">
                              <div className="select-one">
                                <Select
                                  instanceId={useId()}
                                  defaultValue={selectedLangOption}
                                  onChange={setSelectedLangOption}
                                  options={langOptions}
                                  components={{
                                    IndicatorSeparator: () => null,
                                  }}
                                  styles={customStyles}
                                />

                              </div>
                              <div className="select-two">
                                <Select
                                  instanceId={useId()}
                                  defaultValue={selectedDacimalOption}
                                  onChange={setSelectedDacimalOption}
                                  options={decimalOptions}
                                  components={{
                                    IndicatorSeparator: () => null,
                                  }}
                                  styles={customStyles}
                                />

                              </div>
                            </div>
                            <Link href="#0" className="condition-box">
                              Terms & Conditions
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="popular-bets">
                <div className="head">
                  <h6>
                    Popular bets
                  </h6>
                </div>
                <ul className="popoular-body">
                  <li className="popular-items">
                    <label className="popular-itmes-left">
                      <input className="form-check-input" type="checkbox" id="flexCheckDefault1" />
                      <span className="icon">
                        <i className="icon-football"></i>
                      </span>
                      <span className="cont">
                        <span className="text1">
                          1x2
                        </span>
                        <span className="text2">
                          Prance
                        </span>
                        <span className="text3">
                          France - Austria
                        </span>
                      </span>
                    </label>
                    <div className="popular-itmes-right">
                      <span>
                        2.37
                      </span>
                    </div>
                  </li>
                  <li className="popular-items">
                    <label className="popular-itmes-left">
                      <input className="form-check-input" type="checkbox" id="flexCheckDefault2" />
                      <span className="icon">
                        <i className="icon-football"></i>
                      </span>
                      <span className="cont">
                        <span className="text1">
                          1x2
                        </span>
                        <span className="text2">
                          Turkey
                        </span>
                        <span className="text3">
                          Turkey - Luxembourg
                        </span>
                      </span>
                    </label>
                    <div className="popular-itmes-right">
                      <span>
                        1.37
                      </span>
                    </div>
                  </li>
                  <li className="popular-items">
                    <label className="popular-itmes-left">
                      <input className="form-check-input" type="checkbox" id="flexCheckDefault3" />
                      <span className="icon">
                        <i className="icon-football"></i>
                      </span>
                      <span className="cont">
                        <span className="text1">
                          1x2
                        </span>
                        <span className="text2">
                          Alkmaar
                        </span>
                        <span className="text3">
                          Alkmaar - Apollon
                        </span>
                      </span>
                    </label>
                    <div className="popular-itmes-right">
                      <span>
                        3.47
                      </span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* // <!--Right Box Chat--> */}
        </div>
        {/* // <!--Main Body Section End--> */}
        {/* // <!--Main Body Section End--> */}

        {/* // <!-- Popup Section Start --> */}
        <SignIn setOpenWallet={setOpenWallet}/>
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
                                    <p>
                                      Add 2 more outcome(s) with odds greater than 1.4 to get x1.08
                                    </p>
                                    <div className="match-items match-progress">
                                      <div className="match-items-left">
                                        <div className="prabox-wrap">
                                          <div className="terminal-bar">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                          </div>
                                          <div className="bar-count">
                                            <p>x1.08</p>
                                            <p>x1,15</p>
                                            <p>x1.20</p>
                                            <p>x1.50</p>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="match-items-right">
                                        <div className="icon">
                                          <img src="/img/header/right-icon/uptodwon.svg" alt="icon" />
                                        </div>
                                        <span>1.00</span>
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
                      <div className="accordion-box">
                        <div className="accordion" id="accordionExamplemy">
                          <div className="accordion-item">
                            <div className="accordion-header" id="headingThree03">
                              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <span className="icon"><i className="fa-sharp fa-solid fa-gear"></i></span>
                                <span>Settings</span>
                              </button>
                              <div id="collapseThreethree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                  <Link href="#0" className="condition-box">
                                    Terms & Conditions
                                  </Link>
                                  <div className="select-wrap">
                                    <div className="select-one">
                                      <Select
                                        instanceId={useId()}
                                        defaultValue={selectedLangOption}
                                        onChange={setSelectedLangOption}
                                        options={langOptions}
                                        components={{
                                          IndicatorSeparator: () => null,
                                        }}
                                        styles={customStyles}
                                      />
                                    </div>
                                    <div className="select-two">
                                      <Select
                                        instanceId={useId()}
                                        defaultValue={selectedDacimalOption}
                                        onChange={setSelectedDacimalOption}
                                        options={decimalOptions}
                                        components={{
                                          IndicatorSeparator: () => null,
                                        }}
                                        styles={customStyles}
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="popular-bets">
                      <div className="head">
                        <h6>
                          Popular bets
                        </h6>
                      </div>
                      <ul className="popoular-body">
                        <li className="popular-items">
                          <label className="popular-itmes-left">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault4" />
                            <span className="icon">
                              <i className="icon-football"></i>
                            </span>
                            <span className="cont">
                              <span className="text1">
                                1x2
                              </span>
                              <span className="text2">
                                Prance
                              </span>
                              <span className="text3">
                                France - Austria
                              </span>
                            </span>
                          </label>
                          <div className="popular-itmes-right">
                            <span>
                              2.37
                            </span>
                          </div>
                        </li>
                        <li className="popular-items">
                          <label className="popular-itmes-left">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault5" />
                            <span className="icon">
                              <i className="icon-football"></i>
                            </span>
                            <span className="cont">
                              <span className="text1">
                                1x2
                              </span>
                              <span className="text2">
                                Turkey
                              </span>
                              <span className="text3">
                                Turkey - Luxembourg
                              </span>
                            </span>
                          </label>
                          <div className="popular-itmes-right">
                            <span>
                              1.37
                            </span>
                          </div>
                        </li>
                        <li className="popular-items">
                          <label className="popular-itmes-left">
                            <input className="form-check-input" type="checkbox" id="flexCheckDefault6" />
                            <span className="icon">
                              <i className="icon-football"></i>
                            </span>
                            <span className="cont">
                              <span className="text1">
                                1x2
                              </span>
                              <span className="text2">
                                Alkmaar
                              </span>
                              <span className="text3">
                                Alkmaar - Apollon
                              </span>
                            </span>
                          </label>
                          <div className="popular-itmes-right">
                            <span>
                              3.47
                            </span>
                          </div>
                        </li>
                      </ul>
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
