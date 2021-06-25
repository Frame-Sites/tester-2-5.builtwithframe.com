import styles from './styles.module.scss';
import { createImageUrl } from '../../utils';

const Landing = props => {
  const { imageUrl, intro, socials, name } = props;
  // console.log(imageUrl, intro, socials);
  // console.log(props);
  const imgUrl = createImageUrl(imageUrl);
  const facebookUrl = socials.filter(item => item.type === 'Facebook')[0]
    ? socials.filter(item => item.type === 'Facebook')[0].url
    : '';
  const twitterUrl = socials.filter(item => item.type === 'Twitter')[0]
    ? socials.filter(item => item.type === 'Twitter')[0].url
    : '';
  const linkedinUrl = socials.filter(item => item.type === 'LinkedIn')[0]
    ? socials.filter(item => item.type === 'LinkedIn')[0].url
    : '';
  const githubUrl = socials.filter(item => item.type === 'GitHub')[0]
    ? socials.filter(item => item.type === 'GitHub')[0].url
    : '';
  const instagramUrl = socials.filter(item => item.type === 'Instagram')[0]
    ? socials.filter(item => item.type === 'Instagram')[0].url
    : '';
  const mediumUrl = socials.filter(item => item.type === 'Medium')[0]
    ? socials.filter(item => item.type === 'Medium')[0].url
    : '';
  const issuuUrl = socials.filter(item => item.type === 'Issuu')[0]
    ? socials.filter(item => item.type === 'Issuu')[0].url
    : '';
  return (
    <div id="LandingSection" className={styles.landing}>
      <div className={styles.leftSide}>
        <h1>Hello, Im</h1>
        <h1>{name}</h1>
        <p>{intro}</p>
        <div className={styles.socials}>
          {facebookUrl && (
            <a href={facebookUrl} target="_blank" rel="noreferrer">
              <span className={styles.facebookIcon} />
            </a>
          )}
          {twitterUrl && (
            <a href={twitterUrl} target="_blank" rel="noreferrer">
              <span className={styles.twitterIcon} />
            </a>
          )}
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noreferrer">
              <span className={styles.linkedinIcon} />
            </a>
          )}
          {instagramUrl && (
            <a href={instagramUrl} target="_blank" rel="noreferrer">
              <span className={styles.instagramIcon} />
            </a>
          )}
          {githubUrl && (
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <span className={styles.githubIcon} />
            </a>
          )}
          {mediumUrl && (
            <a href={mediumUrl} target="_blank" rel="noreferrer">
              <span className={styles.mediumIcon} />
            </a>
          )}
          {issuuUrl && (
            <a href={issuuUrl} target="_blank" rel="noreferrer">
              <span className={styles.issuuIcon} />
            </a>
          )}
        </div>
      </div>
      <div className={styles.rightSide}>
        <div className={styles.image}>
          <img src={imgUrl} alt="userImage" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
