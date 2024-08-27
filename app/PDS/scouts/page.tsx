"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect, useState } from "react";

async function fetchPlayersOnFire() {
  const response = await fetch("/api/ranking");
  if (!response.ok) {
    throw new Error("Failed to fetch players");
  }
  return response.json();
}

export default function Scouts() {
  interface PlayerRanking {
    id: number;
    name: string;
    seasonGoals: number;
    seasonAssists: number;
    score: number;
    rank: number;
  }
  const { user } = useUser();
  const [playersOnFire, setPlayersOnFire] = useState<PlayerRanking[]>([]);

  useEffect(() => {
    const getPlayersOnFire = async () => {
      try {
        const data = await fetchPlayersOnFire();
        setPlayersOnFire(data.playersOnFire);
      } catch (error) {
        console.error(error);
      }
    };
    getPlayersOnFire();
  }, []);

  // return(
  //         <div>
  //         {user?(
  //                 <div>
  //                     <header className="header text-center">
  //                     <nav className="navbar text-center mt-4">
  //                         <ul className="flex justify-center space-x-4">
  //                             <li><a href="/scouts">Explore</a></li>
  //                             <li><a href="/scouts/stats">Datahub</a></li>
  //                             <li><a href="/scouts/help">Help</a></li>
  //                         </ul>
  //                     </nav>
  //                       <div className="searchbar py-2 mt-4 flex justify-center">
  //                           <input
  //                               type="text"
  //                               placeholder="Search"
  //                               className="p-2 border rounded-l focus:outline-none"
  //                           />
  //                       <button className="bg-blue-500 text-white p-2 ml-2 w-15 px-10 rounded-r">Search</button>
  //                       </div>
  //                   </header>
  //                     <div className="container py-2 flex flex-col items-start mx-auto">
  //                     <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
  //                         <thead className="bg-gray-50">
  //                         <tr>
  //                             <th className="px-4 py-3 text-left font-semibold text-gray-700">Name</th>
  //                             <th className="px-4 py-3 text-left font-semibold text-gray-700">Position</th>
  //                             <th className="px-4 py-3 text-left font-semibold text-gray-700">Age</th>
  //                             <th className="px-4 py-3 text-left font-semibold text-gray-700">Club</th>
  //                             <th className="px-4 py-3 text-left font-semibold text-gray-700">Appearances</th>
  //                             <th className="px-4 py-3 text-left font-semibold text-gray-700">Nationality</th>
  //                             {/* <th className="px-4 py-2">International Caps</th>
  //                             <th className="px-4 py-2">Goals</th>
  //                             <th className="px-4 py-2">Assists</th>
  //                             <th className="px-4 py-2">Season's Goals</th>
  //                             <th className="px-4 py-2">Season's Assists</th>
  //                             <th className="px-4 py-2">Total Goals</th>
  //                             <th className="px-4 py-2">Total Assists</th> */}
  //                             <th className="px-4 py-2">Actions</th>
  //                         </tr>
  //                         </thead>
  //                         <tbody>
  //                         {players.map((player:any)=> (
  //                         <tr key={player.id}>
  //                             <td className="px-4 py-2">{player?.name}</td>
  //                             <td className="px-4 py-2">{player?.form}</td>
  //                             <td className="px-4 py-2">{player?.goals}</td>
  //                             <td className="px-4 py-2">{player?.assits}</td>
  //                             {/* <td className="px-4 py-2">
  //                             <div className="flex">
  //                                 <button
  //                                 className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
  //                                 onClick={handleViewPlayer}
  //                                 >
  //                                 View
  //                                 </button>
  //                             </div>
  //                             </td> */}
  //                         </tr>
  //                         )) }
  //                         </tbody>
  //                     </table>
  //                   </div>
  //                 </div>
  //                 ):(
  //                 <div className="flex items-center justify-center py-3">
  //                     <div className="text-center text-2xl">
  //                       <h1>Welcome To The EIKA Scouts Section</h1>
  //                       <h2>Below are the current plans for our services.</h2>
  //                     </div>
  //                   </div>
  //                 )}

  //         </div>
  // )

  return (
    <main className=" min-h-screen">
      <div>
        <header className="header text-center">
          <nav className="navbar text-center mt-4">
            <ul className="flex justify-center space-x-4">
              <li>
                <a href="/PDS/scouts">Explore</a>
              </li>
              <li>
                <a href="/PDS/scouts/stats">Datahub</a>
              </li>
              <li>
                <a href="/PDS/scouts/help">Help</a>
              </li>
            </ul>
          </nav>
          <div className="searchbar py-2 mt-4 flex justify-center">
            <input
              type="text"
              placeholder="Search"
              className="p-2 border rounded-l focus:outline-none"
            />
            <button className="bg-blue-500 text-white p-2 ml-2 w-15 px-10 rounded-r">
              Search
            </button>
          </div>
        </header>
        <div className="container py-2 flex flex-col items-start mx-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Name
                </th>
                {/* <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Form
              </th> */}
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Goals in Last 5
                </th>
                <th className="px-4 py-3 text-left font-semibold text-gray-700">
                  Assists in Last 5
                </th>

                {/* <th className="px-4 py-2">International Caps</th>
                <th className="px-4 py-2">Goals</th>
                <th className="px-4 py-2">Assists</th>
                <th className="px-4 py-2">Season's Goals</th>
                <th className="px-4 py-2">Season's Assists</th>
                <th className="px-4 py-2">Total Goals</th>
                <th className="px-4 py-2">Total Assists</th> */}
              </tr>
            </thead>
            <tbody>
              {playersOnFire.map((player) => (
                <tr key={player.id} className="text-gray-600">
                  <td className="px-4 py-2">{player?.name}</td>
                  {/* <td className="px-4 py-2">{player?.form}</td> */}
                  <td className="px-4 py-2">{player?.seasonGoals}</td>
                  <td className="px-4 py-2">{player?.seasonAssists}</td>
                  {/* <td className="px-4 py-2">
                <div className="flex">
                    <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
                    onClick={handleViewPlayer}
                    >
                    View
                    </button>
                </div>
                </td> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
