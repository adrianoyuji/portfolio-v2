import { NextApiResponse, NextApiRequest } from "next";
import fs from "fs";
import path from "path";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request;
  try {
    switch (method) {
      case "GET":
        await downloadResume(response);
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

const downloadResume = async (response: NextApiResponse) => {
  const file_path = path.join(
    __dirname,
    process.cwd() + "/public/resume/",
    "Adriano Vasconcelos - CV.pdf"
  );
  const stat = fs.statSync(file_path);
  response.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Length": stat.size,
  });

  const readStream = fs.createReadStream(file_path);
  readStream.pipe(response);
};
