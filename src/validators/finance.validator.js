const { z } = require("zod");

exports.createFinance = z.object({
  amount: z.number().positive(),
  type: z.enum(["INCOME", "EXPENSE"]),
  category: z.string(),
  date: z.string().datetime(),
  note: z.string().optional()
});
