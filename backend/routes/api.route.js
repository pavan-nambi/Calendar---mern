const router = require("express").Router();
const { google } = require("googleapis");

const CLIENT_ID =
  "464003919671-a2aukfoovtj228c99ojef1g1083i9mdp.apps.googleusercontent.com";
const CLIENT_SECRET = "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8";

const oauth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  "http://localhost:3000"
);
// const scopes = [
//   "openid email profile https://www.googleapis.com/auth/calendar",
// ];
// const url = oauth2Client.generateAuthUrl({
// 'online' (default) or 'offline' (gets refresh_token)
// access_type: "offline",

// If you only need one scope you can pass it as a string
//   scope: scopes,
// });
// console.log(url);
router.get("/", async (req, res, next) => {
  res.send({ message: "Ok api is working 🚀" });
});

router.post("/create-tokens", async (req, res, next) => {
  try {
    const { code } = req.body;
    console.log("code is ", code);
    const { tokens } = await oauth2Client.getToken(code);

    console.log(tokens);
    res.send(tokens);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
