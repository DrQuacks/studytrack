import "dotenv/config";
import connectDB from "./utils/db";
import User from "./models/User";
import LearningPath from "./models/LearningPath";

const seed = async () => {
  try {
    await connectDB();

    // Clear existing data (optional for dev environments)
    await User.deleteMany({});
    await LearningPath.deleteMany({});

    // Create User
    const user = new User({
      username: "Test User",
      email: "testuser@example.com",
      password: "abcd"
    });
    await user.save();

    // Create Learning Path
    const learningPath = new LearningPath({
      title: "Full-Stack Web Dev",
      description: "A comprehensive path to learn web development",
      owner: user._id,
      topics: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    });
    await learningPath.save();

    console.log("✅ Seeding complete!");
    console.log("User ID:", user._id);
    console.log("Learning Path ID:", learningPath._id);

    process.exit(0);
  } catch (err) {
    console.error("❌ Seeding error:", err);
    process.exit(1);
  }
};

seed();