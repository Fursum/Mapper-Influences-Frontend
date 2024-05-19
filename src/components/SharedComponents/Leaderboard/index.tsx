import type { FC } from 'react';

import BaseProfileCard from '@components/SharedComponents/BaseProfileCard';
import { useGetLeaderboards } from '@services/leaderboard';

import styles from './style.module.scss';

const Leaderboard: FC<{ className?: string }> = ({ className }) => {
  const { data: leaderboards } = useGetLeaderboards();

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <h2>Top Influencers</h2>
      <div className={styles.list}>
        {leaderboards?.map((user) => (
          <div key={user.id} className={styles.row}>
            <BaseProfileCard userId={user.id} offlineData={user} />
            <div className={styles.number}>
              <span>{user.mention_count}</span>
              <span>{`Mention${user.mention_count !== 1 ? 's' : ''}`}</span>
            </div>
          </div>
        ))}
        {leaderboards?.length === 0 && <MockList />}
      </div>
    </div>
  );
};

export default Leaderboard;

const MockList = () => {
  return Array.from({ length: 5 }).map((_, index) => (
    <div key={index} className={styles.row}>
      <BaseProfileCard />
      <div className={styles.number}>
        <span>..</span>
        <span>...</span>
      </div>
    </div>
  ));
};
