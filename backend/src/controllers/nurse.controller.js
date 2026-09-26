import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getNurses = async (req, res) => {
  const nurses = await prisma.nurse.findMany();
  res.json(nurses);
};
