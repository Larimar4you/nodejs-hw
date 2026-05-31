import { Schema, model } from 'mongoose';

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    tag: {
      type: String,
      required: true,
      enum: [
        'Todo',
        'Work',
        'Personal',
        'Meeting',
        'Shopping',
        'Travel',
        'Health',
        'Finance',
        'Ideas',
        'Important',
      ],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

export const Note = model('Note', noteSchema);
