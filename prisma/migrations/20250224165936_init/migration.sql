-- CreateTable
CREATE TABLE "Instrumento" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "precio" DOUBLE PRECISION NOT NULL,
    "descripcion" TEXT NOT NULL,

    CONSTRAINT "Instrumento_pkey" PRIMARY KEY ("id")
);
