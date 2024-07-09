import { model, Schema, model, models } from 'mongoose';

const PropertySchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    description: {
      type: string,
    },
    location: {
      street: {
        type: string,
      },
      city: {
        type: string,
      },
      state: {
        type: string,
      },
      zipcode: {
        type: string,
      },
    },
    beds: {
      type: Number,
      required: true,
    },
    squareFeet: {
      type: Number,
      required: true,
    },
    amenities: [{ type: String }],
    rates: {
      nightly: {
        type: Number,
      },
      weekly: {
        type: Number,
      },
      monthly: {
        type: Number,
      },
    },
    seller_info: {
      name: {
        type: String,
      },
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    images: [{ type: String }],
    is_featured: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Property = models.Property || model('Property', PropertySchema);

export default Property;
