import { sendEmail } from "../middleware/email-middleware.js";

const contactUs = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;
     console.log(res.body)
    sendEmail(name, email, subject, message);
     res.status(200).json({
        message: "Contact sent",
      });
  } catch (error) {
    console.log("Internal Server Error", error);
    res.status(500).json("Internal Server Error");
  }
};

export { contactUs };
