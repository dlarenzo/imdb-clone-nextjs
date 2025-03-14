// IMPORT USER FROM MODELS
import User from "../models/user.model";

// IMPORT CONNECT FROM MONGOOSE
import { connect } from "../mongodb/mongoose";

// EXPORT CREATE USER HANDLER
export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses
) => {
  try {
    await connect();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
          email: email_addresses[0].email_address,
        },
      },
      { upsert: true, new: true }
    );
    return user;
  } catch (error) {
    console.log("Error: Could not create or update user:", error);
  }
};
export const deleteUser = async (id) => {
  try {
    // CONNECT TO MONGODB
    await connect();
    // DELETE USER
    await User.findOneAndDelete({ clerkId: id });
  } catch (error) {
    // LOG ERROR
    console.log("Error: Could not delete user:", error);
  }
};
