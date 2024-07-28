import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;

// In-memory data store
let posts = [
  {
    id: 1,
    title: "Building a Self-Reliant India",
    content:
      "The vision of a self-reliant India, or 'Atmanirbhar Bharat,' is one of the most crucial endeavors of our time. This initiative aims to make India economically self-sufficient by promoting local manufacturing, innovation, and sustainable practices. By reducing our dependency on foreign goods and services, we can build a stronger and more resilient economy that supports the aspirations of our people.",
    author: "Narendra Modi",
    date: "2020-05-12T11:45:00Z",
  },
  {
    id: 2,
    title: "Accelerating the World's Transition to Sustainable Energy",
    content:
      "At Tesla, our mission is to accelerate the world's transition to sustainable energy. We believe that the faster the world stops relying on fossil fuels and moves towards a zero-emission future, the better. Our innovative electric vehicles, solar energy products, and energy storage solutions are designed to make this transition easier for everyone. The more people who join us on this journey, the sooner we can achieve a sustainable future.",
    author: "Elon Musk",
    date: "2021-03-10T12:00:00Z",
  },
  {
    id: 3,
    title: "Digital India: Transforming Governance and Society",
    content:
      "Digital India is an ambitious initiative that seeks to transform India into a digitally empowered society and knowledge economy. Through the implementation of e-governance, digital infrastructure, and citizen-centric services, we are working to ensure that the benefits of digital technology reach every corner of our nation. This initiative is not just about technology; it’s about bridging the digital divide and empowering every Indian citizen.",
    author: "Narendra Modi",
    date: "2022-07-01T10:00:00Z",
  },
  {
    id: 4,
    title: "Harnessing the Power of AI for the Benefit of Humanity",
    content:
      "Artificial Intelligence holds immense potential for the future of humanity. At Neuralink, we are working on developing advanced brain-machine interfaces that could one day help individuals with neurological conditions and enhance human capabilities. Our goal is to create a symbiotic relationship between the human brain and AI, enabling us to tap into unprecedented levels of intelligence and innovation.",
    author: "Elon Musk",
    date: "2023-06-15T08:30:00Z",
  },
];

let lastId = 4;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Working");
});

//GET All posts
app.get("/posts", (req, res) => {
  res.json(posts);
});

//GET a specific post by id
app.get("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id); //parseInt to change it in int
  const foundPost = posts.find((post) => post.id === id); //using find loope
  if (!foundPost) return res.status(404).json({ message: "post not found" });
  res.json(foundPost);
});

//POST a new post
app.post("/posts", (req, res) => {
  const newpost = {
    id: lastId + 1,
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
    date: new Date(),
  };
  posts.push(newpost);
  res.json(posts);
});

//PATCH a post when you just want to update one parameter
app.patch("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id); //parseInt to change it in int
  const foundIndex = posts.findIndex((post) => post.id === id);
  if (foundIndex === -1)
    return res.status(404).json({ message: "post not found" });
  if (req.body.title) posts[foundIndex].title = req.body.title;
  if (req.body.content) posts[foundIndex].content = req.body.content;
  if (req.body.author) posts[foundIndex].author = req.body.author;
  res.json(posts[foundIndex]);
});

//DELETE a specific post by providing the post id.
app.delete("/posts/:id", (req, res) => {
  const id = parseInt(req.params.id); //parseInt to change it in int
  const foundIndex = posts.findIndex((post) => post.id === id);
  if (foundIndex === -1)
    return res.status(404).json({ message: "post not found" });
  posts.splice(foundIndex, 1);
  res.json({ message: "page deleted" });
  // res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`API is running at http://localhost:${port}`);
});
