import Sponsor from '@/components/Sponsor';
import Banner from '@/components/home/Banner';
import Hometab from '@/components/home/Hometab';
import Link from 'next/link';
import React, { SVGProps } from 'react'

export default function Home() {

  return (
    <>
      <Banner />
      <div className="banner-feature">
        <div className="container">
          <div className="banner-feature-wrapper">
            <Link href="live" className="banner-feature-items">
              <span className="banner-feauter-thumb">
                <img src="/img/banner-freature/live.svg" alt="feature" />
              </span>
              <span className="banner-feature-contentt">
                Live
              </span>
            </Link>
            <Link href="#0" className="banner-feature-items">
              <span className="banner-feauter-thumb">
                <img src="/img/banner-freature/parcents.svg" alt="feature" />
              </span>
              <span className="banner-feature-contentt">
                0% Margin
              </span>
            </Link>
            <Link href="football" className="banner-feature-items">
              <span className="banner-feauter-thumb">
                <img src="/img/banner-freature/football.svg" alt="feature" />
              </span>
              <span className="banner-feature-contentt">
                Football
              </span>
            </Link>
            <Link href="tennis" className="banner-feature-items">
              <span className="banner-feauter-thumb">
                <img src="/img/banner-freature/tennis.svg" alt="feature" />
              </span>
              <span className="banner-feature-contentt">
                Tennis
              </span>
            </Link>
            <Link href="table-tennis" className="banner-feature-items">
              <span className="banner-feauter-thumb">
                <img src="/img/banner-freature/table.svg" alt="feature" />
              </span>
              <span className="banner-feature-contentt">
                Table Tennis
              </span>
            </Link>
            <Link href="basketball" className="banner-feature-items">
              <span className="banner-feauter-thumb">
                <img src="/img/banner-freature/basketball.svg" alt="feature" />
              </span>
              <span className="banner-feature-contentt">
                Basketball
              </span>
            </Link>
            <Link href="rugby" className="banner-feature-items">
              <span className="banner-feauter-thumb">
                <img src="/img/banner-freature/esport.svg" alt="feature" />
              </span>
              <span className="banner-feature-contentt">
                eSports
              </span>
            </Link>
            <Link href="profile" className="banner-feature-items">
              <span className="banner-feauter-thumb">
                <img src="/img/banner-freature/promotion.svg" alt="feature" />
              </span>
              <span className="banner-feature-contentt">
                Promotions
              </span>
            </Link>
            <Link href="cricket" className="banner-feature-items">
              <span className="banner-feauter-thumb">
                <img src="/img/banner-freature/cricket.svg" alt="feature" />
              </span>
              <span className="banner-feature-contentt">
                Cricket
              </span>
            </Link>
          </div>
        </div>
      </div>
      <Hometab />
      {/* Sponsor Secion */}
      <Sponsor />
    </>
  )
}

declare module 'react' {
  interface SVGProps<T> extends AriaAttributes, DOMAttributes<T> {
    // add any additional SVG-specific attributes you need
  }
}