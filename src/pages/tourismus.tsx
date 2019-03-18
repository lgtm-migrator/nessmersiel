import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerTourismus from '../components/BannerTourismus'
import BackButton from '../components/BackButton'

import baltrum from '../assets/images/baltrum.jpg'
import wattenmeer from '../assets/images/wattenmeer.jpg'

const Tourismus = (): JSX.Element => (
  <Layout>
    <Helmet>
      <title>Ferienwohnung Nessmersiel - Tourismus</title>
      <meta name="description" content="Ferienwohnung Nessmersiel - Tourismus rund um Nessmersiel und an der Nordsee." />
    </Helmet>

    <BannerTourismus />

    <div id="main">
      <section id="one">
        <div className="inner">
          <BackButton to="/" />
          <header className="major">
            <h2>Tourismus</h2>
          </header>
        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/baltrum" className="image">
            <img src={baltrum} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Baltrum</h3>
              </header>
              <p />
              <ul className="actions">
                <li>
                  <Link to="/baltrum" className="button">
                    Entdecken
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <Link to="/wattenmeer" className="image">
            <img src={wattenmeer} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Das Wattenmeer</h3>
              </header>
              <p>
                Das Weltnaturerbe Wattenmeer lockt jedes Jahr zahlreiche Leute an. Eine Wattwanderung sollte man sich nicht entgehen lassen.
              </p>
              <ul className="actions">
                <li>
                  <Link to="/wattenmeer" className="button">
                    Entdecken
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Tourismus
