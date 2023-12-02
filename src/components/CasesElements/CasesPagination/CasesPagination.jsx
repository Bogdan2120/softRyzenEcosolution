import styles from './casesPagination.module.scss';

const CasesPagination = ({ count, all }) => {
  const newCount = String(count).padStart(2, '0');
  const newAll = String(all).padStart(2, '0');
  return (
    <div className={styles.paginationBody}>
      <span className={styles.paginationBody__active}>{newCount}</span>
      <span className={styles.paginationBody__static}>/{newAll}</span>
    </div>
  );
};

export default CasesPagination;
