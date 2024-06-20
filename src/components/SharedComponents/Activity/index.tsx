import type { FC } from 'react';

import { type Activity, useActivities } from '@services/activity';
import Link from 'next/link';

import ProfilePhoto from '../ProfilePhoto';
import RelativeTime from './RelativeTime';

const ActivityList: FC = () => {
  const { activities } = useActivities();

  return (
    <div className="bg-background-content p-2">
      <h2 className="my-3 text-center">Recent Activity</h2>
      <div
        className="flex h-[35rem] max-h-[35rem] flex-col gap-4 overflow-y-auto px-2"
        style={{ scrollbarGutter: 'stable' }} // Firefox scrollbar fix
      >
        {activities.map((activity) => (
          <ActivityRow
            key={`${activity.datetime}-${activity.user.username}`}
            activity={activity}
          />
        ))}
      </div>
    </div>
  );
};

export default ActivityList;

const ActivityRow: FC<{
  activity: Activity;
}> = ({ activity }) => {
  const DetailsRow = () => {
    if (activity.type === 'ADD_INFLUENCE' && activity.details.influenced_to) {
      return (
        <>
          <span className="mr-1 shrink-0">influenced from</span>
          <SmallUser user={activity.details.influenced_to} />
        </>
      );
    }

    if (activity.type === 'ADD_BEATMAP') return <>edited their beatmaps</>;
    if (activity.type === 'LOGIN') return <>logged in</>;
    if (activity.type === 'EDIT_BIO') return <>edited their bio</>;
  };

  return (
    <div className="w-[25rem]">
      <div className="flex w-full justify-between">
        <SmallUser user={activity.user} />

        <span className="ml-auto shrink-0 pl-2 text-sm text-text-faded">
          <RelativeTime date={activity.datetime} />
        </span>
      </div>

      <div className="flex w-full">
        <DetailsRow />
      </div>
    </div>
  );
};

const SmallUser: FC<{
  user: {
    username: string;
    avatar_url: string;
    id: number;
  };
}> = ({ user }) => {
  return (
    <span className="truncate">
      <ProfilePhoto
        photoUrl={user.avatar_url}
        size="sm"
        circle
        className="-mb-[0.1rem] mr-1 inline-block"
      />
      <Link href={`/profile/${user.id}`} className="text-text">
        <span className="w-fit font-bold">{user.username}</span>
      </Link>
    </span>
  );
};