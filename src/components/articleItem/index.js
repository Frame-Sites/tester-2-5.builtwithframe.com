import createImageUrl from '../../utils/createImageUrl';
import styles from '../articles/styles.module.scss';

const ArticleItem = props => {
  const { title, caption, imageUrl, url } = props;
  const imageurl = createImageUrl(imageUrl);
  return (
    <a
      href={url}
      rel="noreferrer"
      target="_blank"
      style={{ textDecoration: 'none', color: 'black' }}
      className={styles.articleItem}
    >
      <div className={styles.articleContentWrapper} style={{ cursor: 'pointer' }}>
        <img src={imageurl} height="340" width="340" alt="article" />
        <div className={styles.articleContent}>
          <p>
            <strong>{title}</strong>
            <br />
            {caption}
          </p>
          <p style={{ marginTop: '8px' }}>
            <strong>Read More</strong>
          </p>
        </div>
      </div>
    </a>
  );
};

export default ArticleItem;
