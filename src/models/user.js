import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    username: { type: String, required: false },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },

    avatar: {
      type: String,
      required: false,
      default: 'https://ac.goit.global/fullstack/react/default-avatar.jpg',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

userSchema.methods.toJSON = function () {
  const obj = this.toObject();
  delete obj.password;
  return obj;
};

userSchema.pre('save', function () {
  if (!this.username) {
    this.username = this.email;
  }
});

export const User = model('User', userSchema);
