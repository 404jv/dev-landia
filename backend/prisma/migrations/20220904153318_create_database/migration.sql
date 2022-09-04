-- CreateTable
CREATE TABLE "activities" (
    "id" UUID NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "type" VARCHAR NOT NULL,
    "is_needed_code" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order" INTEGER,
    "phase_id" UUID,

    CONSTRAINT "PK_7f4004429f731ffb9c88eb486a8" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_answer" (
    "id" UUID NOT NULL,
    "activity_id" UUID NOT NULL,
    "option_id" UUID NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "PK_9a2c313b3d87a4eca50a94dfff1" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "activity_default_code" (
    "id" UUID NOT NULL,
    "activity_id" UUID NOT NULL,
    "option_id" UUID NOT NULL,
    "order" INTEGER NOT NULL,

    CONSTRAINT "PK_3ce95f625a77f38ff590706d9d2" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "maps" (
    "id" UUID NOT NULL,
    "title" VARCHAR NOT NULL,
    "description" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order" INTEGER,

    CONSTRAINT "PK_dddaabaf432b881f9f6e13bf9bd" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "options" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "activity_id" UUID NOT NULL,
    "type" VARCHAR NOT NULL,
    "hexadecimal_color" VARCHAR NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "abstracted_name" VARCHAR,

    CONSTRAINT "PK_d232045bdb5c14d932fba18d957" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "phases" (
    "id" UUID NOT NULL,
    "map_id" UUID NOT NULL,
    "title" VARCHAR NOT NULL,
    "type" VARCHAR NOT NULL,
    "markdown_text" TEXT,
    "max_level" INTEGER NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "order" INTEGER,
    "description" VARCHAR NOT NULL,
    "hexadecimal_color" VARCHAR,

    CONSTRAINT "PK_e93bb53460b28d4daf72735d5d3" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tips" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "activity_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_b63a628fdfd7517d8e58fe39199" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_map" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "map_id" UUID NOT NULL,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "is_done" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "PK_183d5ebc24aeb5fdb468003e7af" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "name" VARCHAR NOT NULL,
    "username" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT false,
    "password" VARCHAR NOT NULL,
    "avatar_name" VARCHAR,
    "biography" VARCHAR,
    "total_xp" INTEGER NOT NULL DEFAULT 0,
    "total_coins" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users_phases" (
    "id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "phase_id" UUID NOT NULL,
    "current_level" INTEGER NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PK_fbfd783f84950db0d1aa614ac64" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UQ_fe0bb3f6520ee0469504521e710" ON "users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "UQ_97672ac88f789774dd47f7c8be3" ON "users"("email");

-- AddForeignKey
ALTER TABLE "activities" ADD CONSTRAINT "FKPhaseActivity" FOREIGN KEY ("phase_id") REFERENCES "phases"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_answer" ADD CONSTRAINT "FKActivityOption" FOREIGN KEY ("activity_id") REFERENCES "activities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_answer" ADD CONSTRAINT "FKOptionActivity" FOREIGN KEY ("option_id") REFERENCES "options"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_default_code" ADD CONSTRAINT "FKActivityOption" FOREIGN KEY ("activity_id") REFERENCES "activities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "activity_default_code" ADD CONSTRAINT "FKOptionActivity" FOREIGN KEY ("option_id") REFERENCES "options"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "FKActivityOption" FOREIGN KEY ("activity_id") REFERENCES "activities"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "phases" ADD CONSTRAINT "FKMapPhase" FOREIGN KEY ("map_id") REFERENCES "maps"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "tips" ADD CONSTRAINT "FKActivityTip" FOREIGN KEY ("activity_id") REFERENCES "activities"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_map" ADD CONSTRAINT "FKMapUser" FOREIGN KEY ("map_id") REFERENCES "maps"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_map" ADD CONSTRAINT "FKUserMap" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users_phases" ADD CONSTRAINT "FKPhaseUser" FOREIGN KEY ("phase_id") REFERENCES "phases"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "users_phases" ADD CONSTRAINT "FKUserPhase" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;
