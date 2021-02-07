import joi from "joi";

const createMessageSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().email().required(),
  message: joi.string().required().max(512),
});

export { createMessageSchema };
