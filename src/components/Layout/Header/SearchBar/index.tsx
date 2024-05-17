import { type FC, useCallback, useRef, useState } from 'react';

import { Magnify } from '@components/SvgComponents';
import { MaxNameLength } from '@libs/consts';
import { getSearchResults } from '@services/search';
import AwesomeDebouncePromise from 'awesome-debounce-promise';
import type { UserCompact } from 'osu-web.js';
import { useOnClickOutside } from 'usehooks-ts';

import Results from './Results';

import styles from './styles.module.scss';

type Props = {
  className?: string;
};

const SearchBar: FC<Props> = ({ className }) => {
  const containerRef = useRef(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [results, setResults] = useState<UserCompact[] | undefined>();
  const [showResults, setShowResults] = useState(false);

  useOnClickOutside(containerRef, () => setShowResults(false));

  const searchUser = useCallback((query: string) => {
    getSearchResults(query).then((res) => {
      // Show max 5 results
      setResults(res.slice(0, 5));
    });
  }, []);

  const debouncedSearch = AwesomeDebouncePromise(searchUser, 500);

  const handleChange = (query: string) => {
    // Hide results element if query is empty
    setShowResults(!!query);
    // TODO: Display loading indicator

    debouncedSearch(query);
  };

  const wrapperClass = `${styles.searchBorder} ${className}`;

  return (
    <div className={wrapperClass} ref={containerRef}>
      <div className={styles.searchBar}>
        <input
          onChange={(e) => handleChange(e.target.value)}
          placeholder={'Search User'}
          maxLength={MaxNameLength}
          ref={inputRef}
        />
        <button className={styles.magnifyButton}>
          <Magnify className={styles.magnifySvg} />
        </button>
      </div>
      {showResults && <Results results={results || []} />}
    </div>
  );
};

export default SearchBar;
