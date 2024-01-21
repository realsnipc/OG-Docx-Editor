import mongoose from "mongoose";

const documentSchema = new mongoose.Schema(
  {
    content: { type: String, required: true },
    author: { type: String, default: "Unknown" },
  },
  {
    timestamps: true,
  }
);

const documentModel = new mongoose.model("Document", documentSchema);

export default documentModel;
