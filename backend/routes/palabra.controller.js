import { prisma } from "../src/db.js"

export const palabrasGet = async (req, res) => {
  try {
    const palabras = await prisma.palabras.findMany();
    res.json(palabras);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener las palabras", detalles: error.message });
  }
};

export const palabraGet = async (req, res) => {
  const { id } = req.params;
  try {
    const palabra = await prisma.palabras.findUnique({
      where: { id: parseInt(id) }
    });
    if (!palabra) {
      return res.status(404).json({ error: "Palabra no encontrada" });
    }
    res.json(palabra);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener la palabra", detalles: error.message });
  }
};


export const palabraPost = async (req, res) => {
  const { palabra, letras } = req.body;
  try {
    const nuevaPalabra = await prisma.palabras.create({
      data: { palabra, letras }
    });
    res.status(201).json(nuevaPalabra);
  } catch (error) {
    res.status(500).json({ error: "Error al crear la palabra", detalles: error.message });
  }
};

export const palabraUpdate = async (req, res) => {
  const { id } = req.params;
  const { palabra, letras } = req.body;
  try {
    const palabraActualizada = await prisma.palabras.update({
      where: { id: parseInt(id) },
      data: { palabra, letras }
    });
    res.json(palabraActualizada);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar la palabra", detalles: error.message });
  }
};

export const palabraDelete = async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.palabras.delete({
      where: { id: parseInt(id) }
    });
    res.json({ mensaje: "Palabra eliminada con éxito" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar la palabra", detalles: error.message });
  }
};
