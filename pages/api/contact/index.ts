import { NextApiResponse, NextApiRequest } from "next";
import Message from "models/Message";
import { connectToDatabase } from "config/mongodb";
import { createMessageSchema } from "schemas/Message";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request;
  try {
    switch (method) {
      case "GET":
        await getMessages(response);
        break;
      case "POST":
        await createMessage(request, response);
        break;
      default:
        response
          .status(400)
          .json({ statusCode: 400, message: "invalid method" });
        break;
    }
  } catch (err) {
    console.log(err);
    response
      .status(err.statusCode || 500)
      .json({ statusCode: err.statusCode || 500, message: err.message });
  }
};

export default handler;

const getMessages = async (response: NextApiResponse) => {
  const { db } = await connectToDatabase();
  const messages = await db.collection("messages").find().toArray();

  response.status(201).json({ statusCode: 201, messages });
};

const createMessage = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  const { db } = await connectToDatabase();

  const { error, value } = createMessageSchema.validate(request.body);
  if (error) {
    throw new Object({ statusCode: 400, message: error.details[0].message });
  }

  const message = new Message({ ...value });

  await db.collection("messages").insertOne(message);

  response.status(201).json({ statusCode: 201, message });
};
