-- CreateTable
CREATE TABLE "Collections" (
    "id" SERIAL NOT NULL,
    "mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "title" TEXT NOT NULL,

    CONSTRAINT "Collections_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "mal_id" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "anime_title" TEXT NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collections_user_email_mal_id_key" ON "Collections"("user_email", "mal_id");
