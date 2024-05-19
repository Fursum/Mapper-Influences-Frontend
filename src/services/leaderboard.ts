import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export type LeaderboardResponse = {
  id: number;
  username: string;
  avatar_url: string;
  bio: string;
  mention_count: number;
  country: string;
}[];

function getLeaderboards() {
  return axios
    .get<LeaderboardResponse>(`${process.env.NEXT_PUBLIC_API_URL}/leaderboard`)
    .then((res) => res.data);
}

export const useGetLeaderboards = () =>
  useQuery({
    queryKey: ['leaderboards'],
    queryFn: getLeaderboards,
    staleTime: 60 * 1000,
  });
