import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
        },

        price: {
            type: Number,
            required: true,
        },

        image: {
            type: String,
            required: true,
        },
    },

    {
        timestamps: true, //created, updated
    }

)

const Product = mongoose.model("Product", productSchema);

export default Product;

// Why we did not use moongose.Schema () => {} - because it is not just calling we are creating 

// why the export is at the end and what is default? 

// is the "product schema in  const Product = mongoose.model("Product", productSchema) is fixed ? where it came from;

