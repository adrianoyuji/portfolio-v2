import { NextApiResponse, NextApiRequest } from "next";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request;
  try {
    switch (method) {
      case "GET":
        await getMessages(request, response);
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
    response
      .status(err.statusCode || 500)
      .json({ statusCode: err.statusCode || 500, message: err.message });
  }
};

export default handler;

const getMessages = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  response.status(201).json({ statusCode: 201, A: "xasda" });
};

const createMessage = async (
  request: NextApiRequest,
  response: NextApiResponse
) => {
  response.status(201).json({ statusCode: 201, a: "xasda" });
};
