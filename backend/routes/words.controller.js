import { prisma } from "../src/db.js";

export const wordsGet = async (req, res) => {
  try {
    const words = await prisma.words.findMany();
    res.json(words);
  } catch (error) {
    res.status(500).json({ error: "Error fetching words"});
  }
};

export const wordGet = async (req, res) => {
  const { id } = req.params;
  try {
    const word = await prisma.words.findUnique({
      where: { id: parseInt(id) }
    });
    if (!word) {
      return res.status(404).json({ error: "Word not found" });
    }
    res.json(word);
  } catch (error) {
    res.status(500).json({ error: "Error fetching the word"});
  }
};

export const wordPost = async (req, res) => {
  const { word, letters } = req.body;
  try {
    const newWord = await prisma.words.create({
      data: { word, letters }
    });
    res.status(201).json(newWord);
  } catch (error) {
    res.status(500).json({ error: "Error creating the word"});
  }
};

export const wordUpdate = async (req, res) => {
  const { id } = req.params;
  const { word, letters } = req.body;
  try {
    const updatedWord = await prisma.words.update({
      where: { id: parseInt(id) },
      data: { word, letters }
    });
    res.json(updatedWord);
  } catch (error) {
    res.status(500).json({ error: "Error updating the word"});
  }
};

export const wordDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.words.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: "Word successfully deleted" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting the word"});
  }
};
