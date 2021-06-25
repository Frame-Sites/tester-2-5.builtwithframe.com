import { useState } from 'react';
import styles from './styles.module.scss';

const About = ({ experience, leadership, education }) => {
  let defaultOption = 'Experience';
  if (experience.length) {
    defaultOption = 'Experience';
  } else if (leadership.length) {
    defaultOption = 'Leadership';
  } else if (education.length) {
    defaultOption = 'Education';
  }
  const [optionSelected, setOption] = useState(defaultOption);
  const changeOption = option => {
    setOption(option);
  };
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  /*eslint-disable*/
  const displayDate = date =>
    date.includes('Present') || date.includes('Invalid date')
      ? date
      : `${months[date.split('-')[1] - 1]}. ${date.split('-')[0]}`;
  /* eslint-enable */
  return (
    <div id="AboutSection" className={styles.mainContainer}>
      <div className={styles.header}>
        <h2>About</h2>
      </div>
      <div className={styles.subHeader}>
        {!!experience.length && (
          <button
            className={optionSelected === 'Experience' ? styles.activeIcon : ''}
            type="button"
            onClick={() => changeOption('Experience')}
          >
            Experience
          </button>
        )}
        {!!leadership.length && (
          <button
            className={optionSelected === 'Leadership' ? styles.activeIcon : ''}
            type="button"
            onClick={() => changeOption('Leadership')}
          >
            Leardership
          </button>
        )}
        {!!education.length && (
          <button
            className={optionSelected === 'Education' ? styles.activeIcon : ''}
            type="button"
            onClick={() => changeOption('Education')}
          >
            Education
          </button>
        )}
      </div>
      <div className={styles.content}>
        {optionSelected === 'Experience' &&
          experience.map(item => (
            <div className={styles.infoCard} key={item.id}>
              <p className={styles.position}>{item.position}</p>
              <p className={styles.company}>{item.company}</p>
              <p className={styles.date}>
                {displayDate(item.start_date)} - {displayDate(item.end_date)}
              </p>
              <p className={styles.link}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  {item.link}
                </a>
              </p>
            </div>
          ))}
        {optionSelected === 'Leadership' &&
          leadership.map(item => (
            <div className={styles.infoCard} key={item.id}>
              <p className={styles.position}>{item.position}</p>
              <p className={styles.company}>{item.organization}</p>
              <p className={styles.date}>
                {displayDate(item.start_date)} - {displayDate(item.end_date)}
              </p>
              <p className={styles.link}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  {item.link}
                </a>
              </p>
            </div>
          ))}
        {optionSelected === 'Education' &&
          education.map(item => (
            <div className={styles.infoCard} key={item.id}>
              <p className={styles.position}>{item.university}</p>
              <p className={styles.company}>{item.degreeType}</p>
              <p>
                {`${item?.degreeSubtype} in ${item.majorOne ? item.majorOne : ''} ${
                  item.majorTwo ? 'and' : ''
                } ${item.majorTwo ? item.majorTwo : ''}`}
              </p>
              {/* <p className={styles.company}>{item.majorOne}</p> */}
              {/* <p className={styles.link}>{item.university}</p> */}
            </div>
          ))}
      </div>
    </div>
  );
};
export default About;
