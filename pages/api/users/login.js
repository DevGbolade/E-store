import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../../models/User";
import db from "../../../utils/db";
import { signToken } from "../../../utils/auth";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const user = await User.findOne({ email: req.body.email });
    await db.disconnect();
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = signToken(user);
      const userData = {
        token,
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      };
      res.send(userData);
    } else {
      res.status(401).send({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.log("ERROR", error);
    res.send({ error: true });
  }
});

export default handler;
