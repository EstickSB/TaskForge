import express from "express";


import palabraRoutes from '../routes/palabra.routes.js'

const app = express();

app.use(express.json());
app.use("/api", palabraRoutes);

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
