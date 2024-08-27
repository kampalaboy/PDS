import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

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
        nationality: true,
        playerAttributes: {
          select: {
            id: true,
            profileId: true,
            overallRating: true,
            firstTouch: true,
            dribbling: true,
            finishing: true,
            cornerTaking: true,
            crossing: true,
            heading: true,
            longShots: true,
            marking: true,
            passing: true,
            penaltyTaking: true,
            tackling: true,
            technique: true,
            aggression: true,
            anticipation: true,
            composure: true,
            concentration: true,
            decisionMaking: true,
            determination: true,
            flair: true,
            leadership: true,
            offTheBall: true,
            positioning: true,
            teamwork: true,
            vision: true,
            workRate: true,
            acceleration: true,
            agility: true,
            balance: true,
            jumpingReach: true,
            naturalFitness: true,
            pace: true,
            stamina: true,
            strength: true,
            height: true,
            weight: true,
            injuryProne: true,
            playerProfile: true,
          },
        },
      },
    });
    return NextResponse.json({ players }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
