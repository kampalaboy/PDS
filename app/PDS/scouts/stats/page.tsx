"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getPositionSymbol } from "@/admin/utils";

async function fetchPlayers() {
  const response = await fetch("/api/playerAttributes");
  if (!response.ok) {
    throw new Error("Failed to fetch player stats");
  }
  return response.json();
}

export default function Stats() {
  interface PlayerStats {
    id: number;
    name: string;
    position: number;
    age: number;
    club: string;
    clubApps: string;
    nationality: string;
    internationalCaps: string;

    playerAttributes: {
      profileId: number;
      overallRating: number;
      firstTouch: number;
      dribbling: number;
      finishing: number;
      cornerTaking: number;
      crossing: number;
      heading: number;
      longShots: number;
      marking: number;
      passing: number;
      penaltyTaking: number;
      tackling: number;
      technique: number;
      aggression: number;
      anticipation: number;
      composure: number;
      concentration: number;
      decisionMaking: number;
      determination: number;
      flair: number;
      leadership: number;
      offTheBall: number;
      positioning: number;
      teamwork: number;
      vision: number;
      workRate: number;
      acceleration: number;
      agility: number;
      balance: number;
      jumpingReach: number;
      naturalFitness: number;
      pace: number;
      stamina: number;
      strength: number;
      height: number;
      weight: number;
      injuryProne: Boolean;
    };
  }

  const [players, setPlayers] = useState<PlayerStats[]>([]);
  const [selectedPlayer, setSelectedPlayer] = useState<
    null | (typeof players)[0]
  >(null);
  const [isViewTotalPlayerModalOpen, setIsViewTotalPlayerModalOpen] =
    useState(false);

  const handleViewPlayer = (player: any) => {
    setIsViewTotalPlayerModalOpen(true);
    setSelectedPlayer(player);
  };

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

  const downloadPDF = () => {
    // Get the modal element by its class name
    // const modalElement = document.querySelector('.form-control');
    // // Use html2canvas to capture the modal content as an image
    // html2canvas(modalElement).then((canvas) => {
    //     const imgData = canvas.toDataURL('image/png');
    //     const pdfWidth = 260; // Width of the PDF in millimeters (A4 width in landscape)
    //     const pdfHeight = 260;
    //     // Create a new jsPDF instance
    //     const pdf = new jsPDF({
    //     orientation: 'landscape',
    //     unit: 'mm', // Use millimeters as the unit
    //     format: [pdfWidth, pdfHeight], // Set the width and height
    //     });
    //     // Add the captured image to the PDF
    //     pdf.addImage(imgData, 'PNG', 0, 0);
    //     // Save the PDF with a specific filename (e.g., 'player_stats.pdf')
    //     pdf.save('PlayerOverall.pdf');
    // });
  };

  const dashboardStyle = {
    display: "flex",
    padding: "16px",
    TextAlign: "center",
  };

  const cardStyle = {
    border: "0.5px",
    margin: "5px",
  };

  return (
    <main className="min-h-screen text-gray-700">
      <div className="container py-2 flex flex-col items-start mx-auto">
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
                Appearances
              </th>
              <th className="px-4 py-3 text-left font-semibold text-gray-700">
                Nationality
              </th>
              {/* <th className="px-4 py-2">International Caps</th>
                <th className="px-4 py-2">Goals</th>
                <th className="px-4 py-2">Assists</th>
                <th className="px-4 py-2">Season's Goals</th>
                <th className="px-4 py-2">Season's Assists</th>
                <th className="px-4 py-2">Total Goals</th>
                <th className="px-4 py-2">Total Assists</th> */}
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {players.map((player) => (
              <tr key={player.id}>
                <td className="px-4 py-2">{player?.name}</td>
                <td className="px-4 py-2">
                  {getPositionSymbol(player.position)}
                </td>
                <td className="px-4 py-2">{player?.age}</td>
                <td className="px-4 py-2">{player?.club}</td>
                <td className="px-4 py-2">{player?.clubApps}</td>
                <td className="px-4 py-2">{player?.nationality}</td>
                <td className="px-4 py-2">
                  <div className="flex">
                    <button
                      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
                      onClick={() => handleViewPlayer(player)}
                    >
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {isViewTotalPlayerModalOpen && selectedPlayer && (
          <div className="fixed inset-0 z-50 flex items-center justify-center text-gray-700">
            <div className="modal modal-open">
              <div className="modal-box w-11/12 max-w-5xl h-700">
                <div className="form-control">
                  <div className="card card-side bg-base-100 my-10">
                    <div className="card-body">
                      <h2 className="card-title text-center w-full">Profile</h2>
                      <div className="text-white grid grid-cols-2">
                        <div className="grid grid-cols-2 gap-x-4 gap-y-3 w-1/2">
                          <label>Name :</label>
                          <p>{selectedPlayer.name}</p>
                          <label>Position :</label>
                          <p>{getPositionSymbol(selectedPlayer.position)}</p>
                          <label>Age :</label>
                          <p>{selectedPlayer.age}</p>
                          <label>Club :</label>
                          <p>{selectedPlayer.club}</p>
                          <label>Appearances :</label>
                          <p>{selectedPlayer.clubApps}</p>
                          <label>Nationality :</label>
                          <p>{selectedPlayer.nationality}</p>
                          <label>International Caps :</label>
                          <p>{selectedPlayer.internationalCaps}</p>
                        </div>
                        <div style={{ maxHeight: 50 }}>
                          <Image
                            src="/images/pdscategories/players.png"
                            alt="Player"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="card-actions justify-end"></div>
                  </div>

                  <p className="text-xl font-semibold mb-4">
                    Player Attributes
                  </p>

                  <div style={dashboardStyle}>
                    <div className="card w-96 bg-blue-300" style={cardStyle}>
                      <div className="card-body">
                        <h1 className="card-title text-xl font-semibold mb-4">
                          TECHNICAL
                        </h1>
                        <div className="grid grid-cols-2 gap-x-4">
                          <label>First Touch:</label>
                          <p>{selectedPlayer.playerAttributes?.firstTouch}</p>
                          <label>Dribbling:</label>
                          <p>{selectedPlayer.playerAttributes?.dribbling}</p>
                          <label>Finishing:</label>
                          <p>{selectedPlayer.playerAttributes?.finishing}</p>
                          <label>Corner Taking:</label>
                          <p>{selectedPlayer.playerAttributes?.cornerTaking}</p>
                          <label>Crossing:</label>
                          <p>{selectedPlayer.playerAttributes?.crossing}</p>
                          <label>Heading:</label>
                          <p>{selectedPlayer.playerAttributes?.heading}</p>
                          <label>Long Shots:</label>
                          <p>{selectedPlayer.playerAttributes?.longShots}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4">
                          <label>Marking:</label>
                          <p>{selectedPlayer.playerAttributes?.marking}</p>
                          <label>Passing:</label>
                          <p>{selectedPlayer.playerAttributes?.passing}</p>
                          <label>Penalty Taking:</label>
                          <p>
                            {selectedPlayer.playerAttributes?.penaltyTaking}
                          </p>
                          <label>Tackling:</label>
                          <p>{selectedPlayer.playerAttributes?.tackling}</p>
                          <label>Technique:</label>
                          <p>{selectedPlayer.playerAttributes?.technique}</p>
                        </div>
                      </div>
                    </div>

                    <div className="card w-96 bg-red-300" style={cardStyle}>
                      <div className="card-body">
                        <h1 className="card-title text-xl font-semibold mb-4">
                          MENTAL
                        </h1>
                        <div className="grid grid-cols-2 gap-x-4">
                          <label>Aggression:</label>
                          <p>{selectedPlayer.playerAttributes?.aggression}</p>

                          <label>Anticipation:</label>
                          <p>{selectedPlayer.playerAttributes?.anticipation}</p>

                          <label>Composure:</label>
                          <p>{selectedPlayer.playerAttributes?.composure}</p>

                          <label>Concentration:</label>
                          <p>
                            {selectedPlayer.playerAttributes?.concentration}
                          </p>

                          <label>Decision Making:</label>
                          <p>
                            {selectedPlayer.playerAttributes?.decisionMaking}
                          </p>

                          <label>Determination:</label>
                          <p>
                            {selectedPlayer.playerAttributes?.determination}
                          </p>

                          <label>Flair:</label>
                          <p>{selectedPlayer.playerAttributes?.flair}</p>

                          <label>Leadership:</label>
                          <p>{selectedPlayer.playerAttributes?.leadership}</p>

                          <label>Off The Ball:</label>
                          <p>{selectedPlayer.playerAttributes?.offTheBall}</p>

                          <label>Positioning:</label>
                          <p>{selectedPlayer.playerAttributes?.positioning}</p>

                          <label>Team Work:</label>
                          <p>{selectedPlayer.playerAttributes?.teamwork}</p>

                          <label>Vision:</label>
                          <p>{selectedPlayer.playerAttributes?.vision}</p>

                          <label>Work Rate:</label>
                          <p>{selectedPlayer.playerAttributes?.workRate}</p>
                        </div>
                      </div>
                    </div>

                    <div className="card w-96 bg-green-300" style={cardStyle}>
                      <div className="card-body">
                        <h1 className="card-title text-xl font-semibold mb-4">
                          PHYSICAL
                        </h1>
                        <div>
                          <div className="flex">
                            <label className="w-1/2 font-semibold">
                              Acceleration:
                            </label>
                            <p className="w-1/2">
                              {selectedPlayer.playerAttributes?.acceleration}
                            </p>
                          </div>
                          <div className="flex">
                            <label className="w-1/2 font-semibold">
                              Agility:
                            </label>
                            <p className="w-1/2">
                              {selectedPlayer.playerAttributes?.agility}
                            </p>
                          </div>
                          <div className="flex">
                            <label className="w-1/2 font-semibold">
                              Balance:
                            </label>
                            <p className="w-1/2">
                              {selectedPlayer.playerAttributes?.balance}
                            </p>
                          </div>
                          <div className="flex">
                            <label className="w-1/2 font-semibold">
                              Jumping Reach:
                            </label>
                            <p className="w-1/2">
                              {selectedPlayer.playerAttributes?.jumpingReach}
                            </p>
                          </div>
                          <div className="flex">
                            <label className="w-1/2 font-semibold">
                              Natural Fitness:
                            </label>
                            <p className="w-1/2">
                              {selectedPlayer.playerAttributes?.naturalFitness}
                            </p>
                          </div>
                          <div className="flex">
                            <label className="w-1/2 font-semibold">Pace:</label>
                            <p className="w-1/2">
                              {selectedPlayer.playerAttributes?.pace}
                            </p>
                          </div>
                          <div className="flex">
                            <label className="w-1/2 font-semibold">
                              Stamina:
                            </label>
                            <p className="w-1/2">
                              {selectedPlayer.playerAttributes?.stamina}
                            </p>
                          </div>
                          <div className="flex">
                            <label className="w-1/2 font-semibold">
                              Strength:
                            </label>
                            <p className="w-1/2">
                              {selectedPlayer.playerAttributes?.strength}
                            </p>
                          </div>
                          <div className="flex">
                            <label className="w-1/2 font-semibold">
                              Height:
                            </label>
                            <p className="w-1/2">
                              {selectedPlayer.playerAttributes?.height}
                            </p>
                          </div>
                          <div className="flex">
                            <label className="w-1/2 font-semibold">
                              Weight:
                            </label>
                            <p className="w-1/2">
                              {selectedPlayer.playerAttributes?.weight}
                            </p>
                          </div>
                          <div className="flex">
                            <label className="w-1/2 font-semibold">
                              Injury Prone:
                            </label>
                            <p className="w-1/2">
                              {selectedPlayer.playerAttributes?.injuryProne
                                ? "Yes"
                                : "No"}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="modal-action">
                    <button
                      className="btn btn-primary bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-2"
                      onClick={downloadPDF}
                    >
                      Download as PDF
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => setIsViewTotalPlayerModalOpen(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
