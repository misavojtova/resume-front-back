import * as Yup from "yup";

const initialValues = {
  image: "",
  description: "",
  liveDemo: "",
  githubRepo: "",
};

const inputFields = [
  {
    label: "Image URL",
    name: "image",
    type: "text",
    placeholder: "URL image...",
  },
  {
    label: "Description",
    name: "description",
    type: "text",
    placeholder: "describe project...",
  },
  {
    label: "Live Demo",
    name: "liveDemo",
    type: "text",
    placeholder: "URL Demo...",
  },
  {
    label: "GitHub Repository",
    name: "githubRepo",
    type: "text",
    placeholder: "URL GitHub Repo...",
  },
];

const validationSchema = Yup.object().shape({
  image: Yup.string().required().max(250),
  description: Yup.string().required().min(10).max(400),
  liveDemo: Yup.string().max(200),
  githubRepo: Yup.string().required().max(200),
});
const updateSchema = Yup.object().shape({
  image: Yup.string().max(250),
  description: Yup.string().min(10).max(400),
  liveDemo: Yup.string().max(200),
  githubRepo: Yup.string().max(200),
});

export { initialValues, validationSchema, inputFields, updateSchema };
