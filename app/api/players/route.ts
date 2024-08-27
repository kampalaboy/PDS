import { NextResponse } from "next/server";
// import Player from '@/app/models/player';
import { PrismaClient } from "@prisma/client";
import { Total } from "@/admin/math";

// const VALID_PDS_KEY = process.env.PDS_KEY
// export async function GET (){
//     try {
//         // const PDSKey = req.headers.get('PDS-Key')
//         // if (!PDSKey){
//         //     return NextResponse.json({message: "Unauthorized. No Key Provided"}, {status: 401})
//         // }

//         // if (PDSKey!=VALID_PDS_KEY){
//         //     return NextResponse.json({message: "Wrong Key!"}, {status: 403})
//         // }
//         const players = await Player.find({}).exec();

//         return NextResponse.json({ players }, { status: 200 });
//     } catch (error) {
//         console.error(error);
//         return NextResponse.json({ message: 'Error', error }, { status: 500 });
//     }
// }

const prisma = new PrismaClient();

export async function GET(req: any, res: any) {
  try {
    const players = await prisma.playerProfile.findMany({
      select: {
        id: true,
        name: true,
        position: true,
        age: true,
        club: true,
        clubApps: true,
        internationalCaps: true,
        internationalGoals: true,
        internationalAssists: true,
        clubGoals: true,
        clubAssists: true,
        // totalGoals: true,
        // totalAssists: true,

        player: {
          where: {},
          select: {
            seasonAssists: true,
            seasonGoals: true,
          },
        },
      },
    });

    const playersWithTotals = await Promise.all(
      players.map(async (player) => {
        const totalGoals = await Total(
          player.clubGoals ?? 0,
          player.internationalGoals ?? 0,
          player.player?.seasonGoals ?? 0
        );

        const totalAssists = await Total(
          player.clubAssists ?? 0,
          player.internationalAssists ?? 0,
          player.player?.seasonAssists ?? 0
        );

        return {
          ...player,
          totalGoals,
          totalAssists,
        };
      })
    );

    return NextResponse.json({ players: playersWithTotals }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

// export async function POST(req:NextApiRequest, res:NextApiResponse){
//   try{
//     const updatePlayers = prisma.players.updateMany({
//       where:{},
//       data:{
//         seasonGoals:{},
//         seasonAssists:{},
//       }
//     })
//     return NextResponse.json({updatePlayers}, {status:200} )
//   }catch(error){
//     console.error(error);
//         return NextResponse.json({ message: 'Error', error }, { status: 500 });
//   }
// }
