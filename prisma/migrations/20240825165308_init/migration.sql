-- CreateTable
CREATE TABLE "positions" (
    "id" SERIAL NOT NULL,
    "position" TEXT NOT NULL,
    "symbol" TEXT NOT NULL,

    CONSTRAINT "positions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playerProfile" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "YOB" TIMESTAMP(3) NOT NULL,
    "age" INTEGER NOT NULL,
    "position" INTEGER NOT NULL,
    "club" TEXT NOT NULL,
    "contractExpiry" TIMESTAMP(3) NOT NULL,
    "nationality" TEXT NOT NULL,
    "internationalCaps" INTEGER NOT NULL,
    "internationalGoals" INTEGER NOT NULL,
    "internationalAssists" INTEGER NOT NULL,
    "clubApps" INTEGER NOT NULL,
    "clubGoals" INTEGER NOT NULL,
    "clubAssists" INTEGER NOT NULL,
    "prefFoot" TEXT NOT NULL,
    "totalGoals" INTEGER NOT NULL,
    "totalAssists" INTEGER NOT NULL,

    CONSTRAINT "playerProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "players" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "seasonGoals" INTEGER NOT NULL,
    "seasonAssists" INTEGER NOT NULL,

    CONSTRAINT "players_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "playerAttributes" (
    "id" SERIAL NOT NULL,
    "profileId" INTEGER NOT NULL,
    "overallRating" DOUBLE PRECISION NOT NULL,
    "firstTouch" DOUBLE PRECISION NOT NULL,
    "dribbling" DOUBLE PRECISION NOT NULL,
    "finishing" DOUBLE PRECISION NOT NULL,
    "cornerTaking" DOUBLE PRECISION NOT NULL,
    "crossing" DOUBLE PRECISION NOT NULL,
    "heading" DOUBLE PRECISION NOT NULL,
    "longShots" DOUBLE PRECISION NOT NULL,
    "marking" DOUBLE PRECISION NOT NULL,
    "passing" DOUBLE PRECISION NOT NULL,
    "penaltyTaking" DOUBLE PRECISION NOT NULL,
    "tackling" DOUBLE PRECISION NOT NULL,
    "technique" DOUBLE PRECISION NOT NULL,
    "aggression" DOUBLE PRECISION NOT NULL,
    "anticipation" DOUBLE PRECISION NOT NULL,
    "composure" DOUBLE PRECISION NOT NULL,
    "concentration" DOUBLE PRECISION NOT NULL,
    "decisionMaking" DOUBLE PRECISION NOT NULL,
    "determination" DOUBLE PRECISION NOT NULL,
    "flair" DOUBLE PRECISION NOT NULL,
    "leadership" DOUBLE PRECISION NOT NULL,
    "offTheBall" DOUBLE PRECISION NOT NULL,
    "positioning" DOUBLE PRECISION NOT NULL,
    "teamwork" DOUBLE PRECISION NOT NULL,
    "vision" DOUBLE PRECISION NOT NULL,
    "workRate" DOUBLE PRECISION NOT NULL,
    "acceleration" DOUBLE PRECISION NOT NULL,
    "agility" DOUBLE PRECISION NOT NULL,
    "balance" DOUBLE PRECISION NOT NULL,
    "jumpingReach" DOUBLE PRECISION NOT NULL,
    "naturalFitness" DOUBLE PRECISION NOT NULL,
    "pace" DOUBLE PRECISION NOT NULL,
    "stamina" DOUBLE PRECISION NOT NULL,
    "strength" DOUBLE PRECISION NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "weight" DOUBLE PRECISION NOT NULL,
    "injuryProne" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "playerAttributes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "playerProfile" ADD CONSTRAINT "playerProfile_position_fkey" FOREIGN KEY ("position") REFERENCES "positions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "players" ADD CONSTRAINT "players_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "playerProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "playerAttributes" ADD CONSTRAINT "playerAttributes_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "playerProfile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
