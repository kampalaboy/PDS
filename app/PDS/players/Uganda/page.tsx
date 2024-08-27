"use client";

import { Total } from "@/admin/math";
import { useState, useEffect } from "react";
import { getPositionSymbol } from "@/admin/utils";

// import { players } from "./Players";

interface Player {
  id: number;
  name: string;
  position: number;
  age: number;
  club: string;
  clubApps: number;
  clubGoals: number;
  clubAssists: number;
  internationalCaps: number;
  internationalGoals: number;
  internationalAssists: number;
  player: {
    seasonGoals: number;
    seasonAssists: number;
  };
  totalGoals: number;
  totalAssists: number;
}

async function fetchPlayers() {
  const response = await fetch("/api/players");
  if (!response.ok) {
    throw new Error("Failed to fetch players");
  }
  return response.json();
}

export default function Players() {
  const [players, setPlayers] = useState<Player[]>([]);
  // const [totalGoals, setTotalGoals] = useState(0);
  // const [totalAssists, setTotalAssists] = useState(0);
  const [selectedPlayer, setSelectedPlayer] = useState<
    null | (typeof players)[0]
  >(null);
  const [isViewPlayerModalOpen, setIsViewPlayerModalOpen] = useState(false);

  const handleViewPlayer = (player: any) => {
    setIsViewPlayerModalOpen(true);
    setSelectedPlayer(player);
  };

  // useEffect(() => {
  //   const calculateSum = async () => {
  //     const sum = await Total(
  //       players[0]?.clubGoals,
  //       players[0]?.internationalGoals,
  //       players[0]?.player.seasonGoals
  //     );
  //     setTotalGoals(sum);
  //   };
  //   calculateSum();
  // }, [players]);

  // useEffect(() => {
  //   const calculateSum = async () => {
  //     const sum = await Total(
  //       players[0]?.clubAssists,
  //       players[0]?.internationalAssists,
  //       players[0]?.player.seasonAssists
  //     );
  //     setTotalAssists(sum);
  //   };
  //   calculateSum();
  // }, [players]);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const data = await fetchPlayers();
        setPlayers(data.players);
      } catch (error) {
        console.error(error);
      }
    };
    getPlayers();
  }, []);

  return (
    <main className="min-h-screen">
      <div className="container py-2 flex flex-col items-start mx-auto">
        <h1 className="text-2xl font-semibold mb-4 ">Football Players</h1>
        <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Name
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Position
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Age
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Club
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => (
              <tr
                key={player.id}
                className="border-b border-gray-200 hover:bg-gray-100 transition duration-150"
              >
                <td className="px-4 py-3 text-gray-800">{player.name}</td>
                <td className="px-4 py-3 text-gray-800">
                  {getPositionSymbol(player.position)}
                </td>
                <td className="px-4 py-3 text-gray-800">{player.age}</td>
                <td className="px-4 py-3 text-gray-800">{player.club}</td>
                <td className="px-4 py-3">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-150"
                    onClick={() => handleViewPlayer(player)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isViewPlayerModalOpen && selectedPlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="modal modal-open">
              <div className="modal-box">
                <p className="text-xl font-semibold mb-4">Player Details</p>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <p className="text-lg font-semibold">
                    {selectedPlayer?.name}
                  </p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Position</span>
                  </label>
                  <p className="text-lg font-semibold">
                    {getPositionSymbol(selectedPlayer?.position)}
                  </p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Age</span>
                  </label>
                  <p className="text-lg font-semibold">{selectedPlayer?.age}</p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Club</span>
                  </label>
                  <p className="text-lg font-semibold">
                    {selectedPlayer?.club}
                  </p>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Appearances</span>
                  </label>
                  <p className="text-lg">{selectedPlayer?.clubApps}</p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">International Caps</span>
                  </label>
                  <p className="text-lg font-semibold">
                    {selectedPlayer?.internationalCaps}
                  </p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">International Goals</span>
                  </label>
                  <p className="text-lg font-semibold">
                    {selectedPlayer?.internationalGoals}
                  </p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">International Assists</span>
                  </label>
                  <p className="text-lg font-semibold">
                    {selectedPlayer?.internationalAssists}
                  </p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Season Goals</span>
                  </label>
                  <p className="text-lg font-semibold">
                    {selectedPlayer.player?.seasonGoals ?? 0}
                  </p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Season Assists</span>
                  </label>
                  <p className="text-lg font-semibold">
                    {selectedPlayer.player?.seasonAssists ?? 0}
                  </p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Total Goals</span>
                  </label>
                  <p className="text-lg font-semibold">
                    {selectedPlayer.totalGoals}
                  </p>
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Total Assists</span>
                  </label>
                  <p className="text-lg font-semibold">
                    {selectedPlayer.totalAssists}
                  </p>
                </div>

                <div className="modal-action">
                  <button
                    className="btn btn-primary"
                    onClick={() => setIsViewPlayerModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
