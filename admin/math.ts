"use server";

interface PlayerData {
  id: number;
  name: string | null;
  seasonGoals?: number | null | undefined;
  seasonAssists?: number | null | undefined;
}

interface Trending extends PlayerData {
  id: number;
  name: string | null;
  score: number;
  rank: number;
  // form: string[];
}

export async function Ranking(
  players: PlayerData[],
  limit: number = 5
): Promise<Trending[]> {
  const playersWithScore = players.map((player) => ({
    ...player, // Spread all player properties
    seasonGoals: player.seasonGoals ?? 0,
    seasonAssists: player.seasonAssists ?? 0,
    score: (player.seasonGoals ?? 0) + (player.seasonAssists ?? 0),
  }));

  const sortedPlayers = playersWithScore.sort((a, b) => b.score - a.score);

  return sortedPlayers.slice(0, limit).map((player, index) => ({
    ...player,
    rank: index + 1,
    // form: player.score,
    id: player.id,
    name: player.name,
  }));
}

export async function Total(...args: number[]): Promise<number> {
  return args.reduce((acc, curr) => acc + curr, 0);
}
