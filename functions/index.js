const functions = require("firebase-functions");
const express = require("express");
const shortid = require("shortid");
const Razorpay = require("razorpay");
// const stripe = require("stripe")("sk_test_51J7uhbSI5Fq9of
// yyENtBFGFd2Lv0wOgUYA2WHr0RzZe3hBiePGGnwlmfdPCiCVJCSgzFUTYsAtOl
// W3kmdEeffiQu003NOhoePI");

const app = express();
const cors = require("cors");
app.use(cors({origin: true}));
app.use(express.json());

// rzp_test_y3e0iCGIVua2gp
// HtM8IOuDYpMbmJJdU1Vai6lR
const razorpay = new Razorpay({
  key_id: "rzp_live_ahbxFGQ2PnsjH0",
  key_secret: "LDQVZ5GNwRxDskrp6gxcBADX",
//   key_id: "rzp_test_y3e0iCGIVua2gp",
//   key_secret: "HtM8IOuDYpMbmJJdU1Vai6lR",
});
app.get("*", (req, res) => {
  res.status(404).send("404, Not founded.");
});


app.post("/razorpay", async (req, res) => {
  try {
    const amountt =req.body.amounttt;
    const paymentcapture = 1;
    const amount = amountt;
    const currency = "INR";
    const options = {
      amount: (amount*100).toString(),
      currency,
      receipt: shortid.generate(),
      
    };
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.send(response);
  } catch (err) {
    console.log(err);
  }
}
);

// app.listen(1337, ()=>{
//   console.log("listen on 1337")
// })

// app.post("/payments/create", async (req, res) => {
//   try {
//     const {amount, shipping} = req.body;
//     const paymentIntent =await stripe.paymentIntents.create({
//       shipping,
//       amount,
//       currency: "inr",
//       description: "asondk",
//     });

//     res
//         .status(200)
//         .send(paymentIntent.client_secret);
//   } catch (err) {
//     res
//         .status(500)
//         .json({
//           statusCode: 500,
//           message: err.message,
//         });
//   }
// });

exports.api = functions.https.onRequest(app);

