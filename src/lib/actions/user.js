// IMPORT USER FROM MODELS
import User from "../models/user.model";

// IMPORT CONNECT FROM MONGOOSE
import { connect } from "../mongodb/mongoose";

// EXPORT CREATE USER HANDLER
export const createOrUpdateUser = async (
  // CLERK INFORMATION
  id,
  first_name,
  last_name,
  image_url,
  email_addresses
) => {
  try {
    // CONNECT TO MONGODB
    await connect();

    // CREATE OR UPDATE USER
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          clerkId: id,
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
    console.error("Error: Could not create or update user:", error);
  }
};

// EXPORT DELETE USER HANDLER
export const deleteUser = async (id) => {
  try {
    // CONNECT TO MONGODB
    await connect();

    // DELETE USER
    await User.deleteOneAndDelete({ clerkId: id });
  } catch (error) {
    console.error("Error: Could not delete user:", error);
  }
};
