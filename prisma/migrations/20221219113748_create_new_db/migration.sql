-- CreateTable
CREATE TABLE "anime" (
    "malId" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "titleEnglish" TEXT,
    "titleJapanese" TEXT,
    "year" INTEGER,
    "score" REAL,
    "type" TEXT NOT NULL,
    "source" TEXT,
    "imageUrl" TEXT NOT NULL,
    "synopsis" TEXT,
    "status" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "aired" TEXT,
    "rating" TEXT NOT NULL,
    "episodes" INTEGER
);

-- CreateTable
CREATE TABLE "quote" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "quote" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "character" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "authUser" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "anime_malId_key" ON "anime"("malId");

-- CreateIndex
CREATE UNIQUE INDEX "user_authUser_key" ON "user"("authUser");
