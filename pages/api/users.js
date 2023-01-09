import dbConnect from "../../lib/dbConnect";
import User from "../../models/User";
import bcrypt from 'bcrypt'

export default async function handler(req, res) {
  const { method } = req;

  await dbConnect();
  switch (method) {
    case "GET":
      try {
        const users = await User.find({});
        res.status(200).json({ success: true, data: users });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        let user = await User.findOne({ email: req.body.email });
        if (user) {
          return res.status(400).send({error:{message: "That user already exisits!"}});
        } else {
          // Insert the new user if they do not exist yet
          const salt = bcrypt.genSaltSync(10)
          const password = bcrypt.hashSync(req.body.password, salt)
          user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: password
          });
          await user.save();
          res.send(user);
        }
      } catch (error) {
        console.log(error);
        res.status(400).json({error: error});
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
