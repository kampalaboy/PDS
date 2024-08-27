import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { Ranking } from "@/admin/math";

const prisma = new PrismaClient();

export async function GET(req: any, res: any) {
  try {
    const players = await prisma.playerProfile.findMany({
      select: {
        id: true,
        name: true,
        player: {
          select: {
            seasonGoals: true,
            seasonAssists: true,
          },
        },
      },
    });
    const playersData = players.map((player) => ({
      id: player.id,
      name: player.name,
      seasonGoals: player.player?.seasonGoals,
      seasonAssists: player.player?.seasonAssists,
    }));
    const playersOnFire = await Ranking(playersData);
    return NextResponse.json({ playersOnFire }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
