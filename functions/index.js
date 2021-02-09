const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51IGTJ2KLNuy7LR1e1YbByT5QSe4ISNFV1hJr9lZEq2KYsQWEuvz3LGvOgOWKQ2dlBgr4LLBh5tqbeIi7MjaWlws3009NWAGihc"
  );

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
	const total = request.query.total;
  
	console.log("Payment Request Recieved!! for this amount >>> ", total);
  
	const paymentIntent = await stripe.paymentIntents.create({
	  amount: total, // subunits of the currency
	  currency: "usd",
	});
  
	// OK - Created
	response.status(201).send({
	  clientSecret: paymentIntent.client_secret,
	});
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
//http://localhost:5001/clone-c91ab/us-central1/api
