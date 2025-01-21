// IMPORTS
import User from "../../../../lib/models/user.model";
import { connect } from "../../../../lib/mongodb/mongoose";
import { clerkClient, currentUser } from "@clerk/nextjs/server";

export const PUT = async (req) => {
  const user = await currentUser();
  const client = await clerkClient();

  try {
    await connect();
    const data = await req.json();
    if (!user) {
      return {
        status: 401,
        body: { error: "Unauthorized" },
      };
    }
    const existingUser = await User.findById(user.publicMetadata.userMongoId);
    if (existingUser.favs.some((fav) => fav.movieId === data.movieId)) {
      const updatedUser = await User.findByIdAndUpdate(
        user.publicMetadata.userMongoId,
        { $pull: { favs: { movieId: data.movieId } } },
        { new: true }
      );
      //  1:54:22 GO BACK 5 MINUTES TO CATCH YOURSELF UP
    }
  } catch (error) {
    console.error(error);
    return {
      status: 500,
      body: { error: "Internal Server Error" },
    };
  }
};
