import type { FC } from 'react';

import BaseProfileCard from '@components/SharedComponents/BaseProfileCard';
import type { UserCompact } from 'osu-web.js';

import styles from './style.module.scss';

const Results: FC<{ results: UserCompact[]; length?: number }> = ({
  results,
  length = 3,
}) => {
  return (
    <div className={styles.allResults}>
      {!!results.length && <h4>Matching users:</h4>}
      {!results.length && <h4>No users found.</h4>}
      {results.slice(0, length).map((user) => (
        <BaseProfileCard
          userId={user.id}
          key={user.id}
          offlineData={{
            avatar_url: user.avatar_url,
            country: user.country_code,
            bio: '',
            id: user.id,
            username: user.username,
            mention_count: 0,
          }}
        />
      ))}
    </div>
  );
};
export default Results;
