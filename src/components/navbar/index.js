import { Link as Scrolllink } from 'react-scroll';
import { useState } from 'react';
import styles from './styles.module.scss';
import { downloadResume, createImageUrl } from '../../utils';

const Navbar = ({ resumeUrl, articles, renderAbout, rederSkillsCoursework }) => {
  const resume = createImageUrl(resumeUrl);
  const [navState, setNavState] = useState('close');
  const changeNavState = () => {
    const state = navState === 'close' ? 'open' : 'close';
    setNavState(state);
  };
  const [navItemSeclected, setNavItemSelected] = useState('home');
  const changeNavItemState = data => {
    setNavItemSelected(data);
  };
  // console.log(resumeUrl);
  return (
    /*eslint-disable*/
    <nav className={styles.nav}>
      <div className={styles.navLeft}>
        {/* <img src="/images/frame-logo.svg" alt="Logo" /> */}
        <div className={styles.tempImage} />
      </div>
      <div className={styles.navMiddle}>
        <ul className={styles.navItems}>
          <Scrolllink
            activeClass="active"
            to="LandingSection"
            smooth
            spy
            offset={-160}
            duration={600}
            className={styles.navLink}
          >
            <li
              className={`${navItemSeclected === 'home' ? 'activeLink' : ''}`}
              onClick={() => changeNavItemState('home')}
            >
              Home
            </li>
          </Scrolllink>
          {renderAbout && (
            <Scrolllink
              activeClass="active"
              to="AboutSection"
              smooth
              spy
              offset={-150}
              duration={600}
              className={styles.navLink}
            >
              <li
                className={`${navItemSeclected === 'about' ? 'activeLink' : ''}`}
                onClick={() => changeNavItemState('about')}
              >
                About
              </li>
            </Scrolllink>
          )}
          {!!articles.length && (
            <Scrolllink
              activeClass="active"
              to="ArticleSection"
              smooth
              spy
              offset={-100}
              duration={600}
              className={styles.navLink}
            >
              <li
                className={`${navItemSeclected === 'articles' ? 'activeLink' : ''}`}
                onClick={() => changeNavItemState('articles')}
              >
                Articles
              </li>
            </Scrolllink>
          )}
          {rederSkillsCoursework && (
            <Scrolllink
              activeClass="active"
              to="SkillsSection"
              smooth
              spy
              offset={-100}
              duration={600}
              className={styles.navLink}
            >
              <li
                className={`${navItemSeclected === 'skills' ? 'activeLink' : ''}`}
                onClick={() => changeNavItemState('skills')}
              >
                Skills
              </li>
            </Scrolllink>
          )}
        </ul>
      </div>
      <div className={styles.navRight}>
        <button onClick={() => downloadResume(resume)} type="button" className={styles.navButtom}>
          Resume
        </button>
      </div>
      <div
        className={`${styles.navRightMobile} ${navState}`}
        onClick={() => changeNavState()}
        onKeyDown={() => changeNavState()}
        role="button"
        tabIndex={-1}
      >
        <div className={`bar1 ${navState}`} />
        <div className={`bar2 ${navState}`} />
        <div className={`bar3 ${navState}`} />
      </div>
      <div className={`${styles.navMobile} ${navState === 'close' ? styles.close : styles.open}`}>
        <ul className={styles.navItemsMobile}>
          <Scrolllink
            activeClass="active"
            to="LandingSection"
            smooth
            spy
            offset={-160}
            duration={600}
            className={styles.navLinkMobile}
          >
            <li className={styles.navItemMobile} onClick={() => changeNavState()}>
              Home
            </li>
          </Scrolllink>
          {renderAbout && (
            <Scrolllink
              activeClass="active"
              to="AboutSection"
              smooth
              spy
              offset={-150}
              duration={600}
              className={styles.navLinkMobile}
            >
              <li className={styles.navItemMobile} onClick={() => changeNavState()}>
                About
              </li>
            </Scrolllink>
          )}
          {!!articles.length && (
            <Scrolllink
              activeClass="active"
              to="ArticleSection"
              smooth
              spy
              offset={-100}
              duration={600}
              className={styles.navLinkMobile}
            >
              <li className={styles.navItemMobile} onClick={() => changeNavState()}>
                Articles
              </li>
            </Scrolllink>
          )}
          {rederSkillsCoursework && (
            <Scrolllink
              activeClass="active"
              to="SkillsSection"
              smooth
              spy
              offset={-100}
              duration={600}
              className={styles.navLink}
            >
              <li className={styles.navItemMobile} onClick={() => changeNavState()}>
                Skills
              </li>
            </Scrolllink>
          )}
          {/* <li> */}
          <button
            onClick={() => downloadResume(resume)}
            type="button"
            className={styles.navMobileButtom}
          >
            Resume
          </button>
          {/* </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
