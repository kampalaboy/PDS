"use client"
import React, { useState } from 'react';
import styles from './matches.module.css';
import MatchTile from '../../../../components/matchTile';
import Image from 'next/image';

export default function Matches () {
    
    interface Match {

        id: number,
        date: string,
        venue: string, 
        homeTeamIcon: string, 
        awayTeamIcon: string, 
        homeTeam: string, 
        awayTeam:  string, 
        homeScore: number,
        homeScorers: string[],
        awayScore: number,
        awayScorers: string[],
        homePossession: number,
        awayPossession: number,
        homePasses: number,
        awayPasses: number,
        homeTotalShots: number,
        awayTotalShots: number,
        homeShotsOnTarget: number,
        awayShotsOnTarget: number,
        homeBlockedShots: number,
        awayBlockedShots: number,
        homeCorners: number,
        awayCorners: number,
        homeOff: number,
        awayOff: number,
        homeThrow: number,
        awayThrow: number,
        homeFoul: number,
        awayFoul: number,
        homeYellow: number,
        awayYellow: number,
        homeRed: number,
        awayRed: number,
        homeGK: number,
        awayGK: number,
    }

    const matches = [{
        id: 1,
        date: "2024-08-15",
        venue: "Stadium Name",
        homeTeamIcon: "",
        awayTeamIcon: "",
        homeTeam: "Home Team",
        awayTeam: "Away Team",
        homeScore: 2,
        homeScorers: ["Player1", "Player2"],
        awayScore: 1,
        awayScorers: ["Player3"],
        homePossession: 55,
        awayPossession: 45,
        homePasses: 500,
        awayPasses: 400,
        homeTotalShots: 15,
        awayTotalShots: 10,
        homeShotsOnTarget: 8,
        awayShotsOnTarget: 4,
        homeBlockedShots: 2,
        awayBlockedShots: 3,
        homeCorners: 6,
        awayCorners: 4,
        homeOff: 2,
        awayOff: 1,
        homeThrow: 20,
        awayThrow: 18,
        homeFoul: 12,
        awayFoul: 10,
        homeYellow: 1,
        awayYellow: 2,
        homeRed: 0,
        awayRed: 0,
        homeGK: 4,
        awayGK: 6,
    },
    {
        id: 2,
        date: "2024-08-15",
        venue: "Stadium Name",
        homeTeamIcon: "",
        awayTeamIcon: "",
        homeTeam: "Home Team",
        awayTeam: "Away Team",
        homeScore: 2,
        homeScorers: ["Player1", "Player2"],
        awayScore: 1,
        awayScorers: ["Player3"],
        homePossession: 55,
        awayPossession: 45,
        homePasses: 500,
        awayPasses: 400,
        homeTotalShots: 15,
        awayTotalShots: 10,
        homeShotsOnTarget: 8,
        awayShotsOnTarget: 4,
        homeBlockedShots: 2,
        awayBlockedShots: 3,
        homeCorners: 6,
        awayCorners: 4,
        homeOff: 2,
        awayOff: 1,
        homeThrow: 20,
        awayThrow: 18,
        homeFoul: 12,
        awayFoul: 10,
        homeYellow: 1,
        awayYellow: 2,
        homeRed: 0,
        awayRed: 0,
        homeGK: 4,
        awayGK: 6,
    },
    {
        id: 3,
        date: "2024-08-15",
        venue: "Stadium Name",
        homeTeamIcon: "",
        awayTeamIcon: "",
        homeTeam: "Home Team",
        awayTeam: "Away Team",
        homeScore: 2,
        homeScorers: ["Player1", "Player2"],
        awayScore: 1,
        awayScorers: ["Player3"],
        homePossession: 55,
        awayPossession: 45,
        homePasses: 500,
        awayPasses: 400,
        homeTotalShots: 15,
        awayTotalShots: 10,
        homeShotsOnTarget: 8,
        awayShotsOnTarget: 4,
        homeBlockedShots: 2,
        awayBlockedShots: 3,
        homeCorners: 6,
        awayCorners: 4,
        homeOff: 2,
        awayOff: 1,
        homeThrow: 20,
        awayThrow: 18,
        homeFoul: 12,
        awayFoul: 10,
        homeYellow: 1,
        awayYellow: 2,
        homeRed: 0,
        awayRed: 0,
        homeGK: 4,
        awayGK: 6,
    }
];

    
    // const [matches, setMatches] = useState<Match[]>([]);
    const [selectedMatch, setSelectedMatch] = useState<null|typeof matches[0]>(null);
    const [isViewMatchModalOpen, setIsViewMatchModalOpen] = useState(false);

    const itemsPerPage = 12;
    const [currentPage, setCurrentPage] = useState(1);

    // const matchesData = [

    //     {
    //         id: newMatch.id, // You can use a library like 'uuid' to generate unique IDs
    //         date: newMatch.date,
    //         homeTeamIcon: newMatch.homeTeamIcon,
    //         awayTeamIcon: newMatch.awayTeamIcon,
    //         homeTeam: newMatch.homeTeam,
    //         awayTeam: newMatch.awayTeam,
    //         homeScore: newMatch.homeScore,
    //         awayScore: newMatch.awayScore,
    //     }
    
        
    //    // Your match data goes here
    //     // Each match should have properties: date, homeTeam, awayTeam, homeScore, awayScore
    // ];

    // const CurrentMatch {
    //     matchesData.match
    // }

    const handleViewMatch = (match:any) => {
        setSelectedMatch(match);
        setIsViewMatchModalOpen(true);
      };

    // Calculate the start and end indices for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Get the matches for the current page
    const currentMatches = matches.slice(startIndex, endIndex);

    const totalPages = Math.ceil(matches.length / itemsPerPage);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    const matchStyle ={
      display: 'gird',
      FlexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      color: 'grey'
    };

    const matchSheetStyle={
      paddingTop: 20,
      marginTop: 20,
      width: 250,
      height: 50,
      paddingRight: 20,
    }

    return (
        <main className='min-h-screen'>
            
            <div className={styles["matches-page"]}>

                {matches.map  && currentMatches.map((match, index) => (

                    <div key={match.id}>
                    <button onClick={() => handleViewMatch(match)} >  
                        <MatchTile  key={index} {...match}/>
                    </button>
                    </div>
                   
                ))}

            </div>
      
{isViewMatchModalOpen && (

  <div className="fixed inset-0 z-50 flex items-center justify-center">
    <div className="modal modal-open">
      <div className="modal-box">
        <p className="text-xl font-semibold mb-4">Match Details</p>
       
        <div className="form-control">
        
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.date}</p>
        
        
          <label className="label">
            <span className="label-text">Venue</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.venue}</p>

          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{color: 'gold', display: 'gird',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: 20,
                      }} >
          <label className="label">
            <span className="label-text">Home</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homeTeam}</p>
       

        
          <p className="text-lg">{selectedMatch?.homeScore}</p>
        

       
          <label className="label">
            <span className="label-text">Goal Scorers</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homeScorers}</p>
        

        
        
          <label className="label">
            <span className="label-text">Possession</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homePossession}%</p>
       
          <label className="label">
            <span className="label-text">Passes</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homePasses}</p>       
          <label className="label">
            <span className="label-text">On Target/Total Shots</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homeShotsOnTarget}/{selectedMatch?.homeTotalShots}</p>
          <label className="label">
            <span className="label-text">Blocked Shots</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homeBlockedShots}</p>       
          <label className="label">
            <span className="label-text">Corner Kicks</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homeCorners}</p>
          <label className="label">
            <span className="label-text">OffSides</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homeOff}</p>
          <label className="label">
            <span className="label-text">Throw Ins</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homeThrow}</p>
          <label className="label">
            <span className="label-text">Fouls</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homeFoul}</p>
          <label className="label">
            <span className="label-text">Yellows</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homeYellow}</p>
          <label className="label">
            <span className="label-text">Reds</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homeRed}</p>
          <label className="label">
            <span className="label-text">GoalKeeper Saves</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.homeGK}</p>
          </div>
            <div style={matchSheetStyle}>
              <Image alt ="vs" width={30} height={30} src='/images/matches/vs.png'/>
            </div>
          <div style={matchStyle}>
          <label className="label">
            <span className="label-text">Away</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayTeam}</p>
  
          <p className="text-lg">{selectedMatch?.awayScore}</p>
             
          <label className="label">
            <span className="label-text">Goal Scorers</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayScorers}</p>
             
          <label className="label">
            <span className="label-text">Possession</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayPossession}%</p>
              
          <label className="label">
            <span className="label-text">Passes</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayPasses}</p>
       
          <label className="label">
            <span className="label-text">On Target/Total Shots</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayShotsOnTarget}/{selectedMatch?.homeTotalShots}</p>
             
          <label className="label">
            <span className="label-text">Blocked Shots</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayBlockedShots}</p>
       
          <label className="label">
            <span className="label-text">Corner Kicks</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayCorners}</p>
       
          <label className="label">
            <span className="label-text">OffSides</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayOff}</p>
        
          <label className="label">
            <span className="label-text">Throw Ins</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayThrow}</p>
        
          <label className="label">
            <span className="label-text">Fouls</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayFoul}</p>
       
          <label className="label">
            <span className="label-text">Yellows</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayYellow}</p>
             
          <label className="label">
            <span className="label-text">Reds</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayRed}</p>
              
          <label className="label">
            <span className="label-text">GoalKeeper Saves</span>
          </label>
          <p className="text-lg font-semibold">{selectedMatch?.awayGK}</p>
        </div>
        </div>   
        </div>  

        <div className="modal-action">
          <button className="btn btn-primary" onClick={() => setIsViewMatchModalOpen(false)}>
            Close
          </button>
        
                </div>
            </div>
            </div>
        </div>
        )}

            <div className="pagination">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Previous
            </button>
            <span>
                Page {currentPage} of {totalPages}
            </span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Next
            </button>
            </div> 
           
        </main>
        
    );
};

