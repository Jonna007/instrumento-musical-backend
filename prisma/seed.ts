import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const instrumentos = [
    {
      nombre: 'Guitarra Eléctrica',
      tipo: 'Cuerda',
      precio: 599.99,
      descripcion: 'Guitarra eléctrica de 6 cuerdas, ideal para rock y blues.',
    },
    {
      nombre: 'Piano de Cola',
      tipo: 'Teclado',
      precio: 4999.99,
      descripcion: 'Piano de cola clásico con un sonido rico y profundo.',
    },
    {
      nombre: 'Batería Acústica',
      tipo: 'Percusión',
      precio: 799.99,
      descripcion: 'Set completo de batería acústica para diversos estilos musicales.',
    },
  ];

  for (const instrumento of instrumentos) {
    await prisma.instrumento.create({
      data: instrumento,
    });
  }

  console.log('Base de datos poblada con éxito');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });