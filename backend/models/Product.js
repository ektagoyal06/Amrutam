// Product Schema & Model
const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    category: { type: String },
    collection: { type: String },  // <-- add this
    image: { type: String },       // <-- add this
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
