export const getTest = (req, res) => {
  console.log("detta funkar");

  try {
    res.status(200).json("detta funkar");
  } catch (error) {}
};
