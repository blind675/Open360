import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    url: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    iconImg: { type: String, required: false },
    tagLine: { type: String, required: true },
    description: { type: String, required: true },
    backgroundImg: { type: String, required: false },
    progress: { type: String, required: true },
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
