import Candy from "../models/Candys";

export const getAll = async (req, res) => {
  try {
    const candys = await Candy.findALL();
    res.render("/", { candys });
  } catch (err) {
    res.status(500).send({ err: err.message });
  }
};
