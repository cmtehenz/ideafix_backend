import { celebrate, Joi, Segments } from "celebrate";

export default celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    description: Joi.string().required(),
  },
});
