import Project from "@/lib/db/models/project.model";
import { connectToDatabase } from "@/lib/db/mongoose";
import { scrapeProject } from "@/lib/scraper";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const runtime = "edge";
export const maxDuration = 60; // seconds
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const body = await request.json();
  const projectURL = body.projectURL;

  if (!projectURL) {
    new Response("Missing projectURL field", { status: 400 });
  }

  const scrapedProject = await scrapeProject(projectURL);

  console.log("Connecting to database...");
  await connectToDatabase();

  console.log("Saving or updating project...");
  const newOrUpdatedProject = await Project.findOneAndUpdate(
    { url: scrapedProject.url },
    scrapedProject,
    {
      upsert: true,
      new: true,
    }
  );

  await revalidatePath("/");

  redirect("/");
}
