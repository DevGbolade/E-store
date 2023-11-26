import mongoose from "mongoose";

const orderSchema = new mongoose.Schema(
  {
    businessID: { type: Number, required: true },
    amount: { type: Number, required: true },
    date: { type: Date },
    status: {
      enum: ["PENDING", "PROCESSING", "COMPLETED", "CANCELED"],
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Transaction =
  mongoose.models.Transaction || mongoose.model("Transaction", orderSchema);
export default Transaction;
