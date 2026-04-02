const { z } = require("zod");

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[0-9]/, "Password must contain at least one number")
  .regex(/[^A-Za-z0-9]/, "Password must contain at least one special character");

// ✅ Email validation
const emailSchema = z
  .string()
  .email("Invalid email format");

// ✅ Register validation schema
const registerSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),

  email: emailSchema,

  password: passwordSchema,

  role: z
    .enum(["VIEWER", "ANALYST", "ADMIN"])
    .optional()
});

module.exports = {
  registerSchema
};