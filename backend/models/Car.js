const { model, Schema } = require('mongoose')

const CarSchema = new Schema(
  {
    description: String,
    make: String,
    model: String,
    id: Number,
    km: Number,
    estimatedate: String,
    imageURL: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
)

module.exports = model('Cars', CarSchema)
