import Image from 'next/image';
import styles from './matchtile.module.css';

export default function MatchTile ({ date, homeTeamIcon, awayTeamIcon, homeTeam, awayTeam, homeScore, awayScore}:
                                   {date:string, homeTeamIcon:string, awayTeamIcon:string, homeTeam:string, awayTeam:string, homeScore:number, awayScore:number })  {

    // console.log('Received props:', { date, homeTeamIcon, awayTeamIcon, homeTeam, awayTeam, homeScore, awayScore });

    return (
        <div className={styles["match-tiles-container"]}>
            <div className={styles["match-tile"]}>
                <div className={styles["match-date"]}>{date}</div>
                <div className={styles["team-icons"]}>
                    <Image src={homeTeamIcon} alt={homeTeam} width={10} height={10} />
                    <span>vs</span>
                    <Image src={awayTeamIcon} alt={awayTeam} width={10} height={10}  />
                </div>
                <div className={styles["match-score"]}>
                    {homeScore} - {awayScore}
                </div>
            </div>
        </div>



       
    );
};


