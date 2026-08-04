import { z } from "zod";

const text = (label: string, max = 200) =>
  z.string().trim().min(1, `${label} is required`).max(max, `${label} is too long`);

export const scheduleSchema = z.object({
  name: text("Name", 120).refine((value) => value.length >= 2, "Name is too short"),
  email: z.string().trim().email("Valid email required").max(320, "Email is too long"),
  phone: text("Phone", 40).refine((value) => value.length >= 7, "Phone number required"),
  message: text("Project notes", 4000).refine(
    (value) => value.length >= 10,
    "Tell us a bit about your project",
  ),
  location: z.string().trim().max(200, "Location is too long").optional(),
  timeline: z.string().trim().max(200, "Timeline is too long").optional(),
});

export const newsletterSchema = z.object({
  email: z.string().trim().email("Valid email required").max(320, "Email is too long"),
});

export const partnerSchema = z.object({
  name: text("Name", 120).refine((value) => value.length >= 2, "Name is too short"),
  company: text("Company", 160).refine((value) => value.length >= 2, "Company is too short"),
  role: text("Role", 120).refine((value) => value.length >= 2, "Role is too short"),
  email: z.string().trim().email("Valid email required").max(320, "Email is too long"),
  phone: text("Phone", 40).refine((value) => value.length >= 7, "Phone number required"),
  message: text("Practice details", 4000).refine(
    (value) => value.length >= 10,
    "Tell us about your practice",
  ),
});

export const submitBodySchema = z.object({
  type: z.enum(["schedule", "newsletter", "partner"]),
  payload: z.record(z.unknown()),
});
