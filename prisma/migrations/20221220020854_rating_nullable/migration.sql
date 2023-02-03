-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_anime" (
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
    "rating" TEXT,
    "episodes" INTEGER
);
INSERT INTO "new_anime" ("aired", "duration", "episodes", "imageUrl", "malId", "rating", "score", "slug", "source", "status", "synopsis", "title", "titleEnglish", "titleJapanese", "type", "year") SELECT "aired", "duration", "episodes", "imageUrl", "malId", "rating", "score", "slug", "source", "status", "synopsis", "title", "titleEnglish", "titleJapanese", "type", "year" FROM "anime";
DROP TABLE "anime";
ALTER TABLE "new_anime" RENAME TO "anime";
CREATE UNIQUE INDEX "anime_malId_key" ON "anime"("malId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
