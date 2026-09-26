import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const requestShift = async (req, res) => {
  const { nurseId, date } = req.body;

  const shift = await prisma.shift.create({
    data: {
      nurseId,
      date: new Date(date)
    }
  });

  res.json(shift);
};
