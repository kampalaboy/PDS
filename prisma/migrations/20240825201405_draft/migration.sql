/*
  Warnings:

  - You are about to drop the column `technique` on the `playerAttributes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[profileId]` on the table `playerAttributes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[profileId]` on the table `players` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "playerAttributes" DROP COLUMN "technique",
ALTER COLUMN "overallRating" DROP NOT NULL,
ALTER COLUMN "firstTouch" DROP NOT NULL,
ALTER COLUMN "dribbling" DROP NOT NULL,
ALTER COLUMN "finishing" DROP NOT NULL,
ALTER COLUMN "cornerTaking" DROP NOT NULL,
ALTER COLUMN "crossing" DROP NOT NULL,
ALTER COLUMN "heading" DROP NOT NULL,
ALTER COLUMN "longShots" DROP NOT NULL,
ALTER COLUMN "marking" DROP NOT NULL,
ALTER COLUMN "passing" DROP NOT NULL,
ALTER COLUMN "penaltyTaking" DROP NOT NULL,
ALTER COLUMN "tackling" DROP NOT NULL,
ALTER COLUMN "aggression" DROP NOT NULL,
ALTER COLUMN "anticipation" DROP NOT NULL,
ALTER COLUMN "composure" DROP NOT NULL,
ALTER COLUMN "concentration" DROP NOT NULL,
ALTER COLUMN "decisionMaking" DROP NOT NULL,
ALTER COLUMN "determination" DROP NOT NULL,
ALTER COLUMN "flair" DROP NOT NULL,
ALTER COLUMN "leadership" DROP NOT NULL,
ALTER COLUMN "offTheBall" DROP NOT NULL,
ALTER COLUMN "positioning" DROP NOT NULL,
ALTER COLUMN "teamwork" DROP NOT NULL,
ALTER COLUMN "vision" DROP NOT NULL,
ALTER COLUMN "workRate" DROP NOT NULL,
ALTER COLUMN "acceleration" DROP NOT NULL,
ALTER COLUMN "agility" DROP NOT NULL,
ALTER COLUMN "balance" DROP NOT NULL,
ALTER COLUMN "jumpingReach" DROP NOT NULL,
ALTER COLUMN "naturalFitness" DROP NOT NULL,
ALTER COLUMN "pace" DROP NOT NULL,
ALTER COLUMN "stamina" DROP NOT NULL,
ALTER COLUMN "strength" DROP NOT NULL,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL,
ALTER COLUMN "injuryProne" DROP NOT NULL;

-- AlterTable
ALTER TABLE "playerProfile" ALTER COLUMN "name" DROP NOT NULL,
ALTER COLUMN "YOB" DROP NOT NULL,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "club" DROP NOT NULL,
ALTER COLUMN "contractExpiry" DROP NOT NULL,
ALTER COLUMN "nationality" DROP NOT NULL,
ALTER COLUMN "internationalCaps" DROP NOT NULL,
ALTER COLUMN "internationalGoals" DROP NOT NULL,
ALTER COLUMN "internationalAssists" DROP NOT NULL,
ALTER COLUMN "clubApps" DROP NOT NULL,
ALTER COLUMN "clubGoals" DROP NOT NULL,
ALTER COLUMN "clubAssists" DROP NOT NULL,
ALTER COLUMN "prefFoot" DROP NOT NULL,
ALTER COLUMN "totalGoals" DROP NOT NULL,
ALTER COLUMN "totalAssists" DROP NOT NULL;

-- AlterTable
ALTER TABLE "players" ALTER COLUMN "seasonGoals" DROP NOT NULL,
ALTER COLUMN "seasonAssists" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "playerAttributes_profileId_key" ON "playerAttributes"("profileId");

-- CreateIndex
CREATE UNIQUE INDEX "players_profileId_key" ON "players"("profileId");
