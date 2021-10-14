export const getVideo = async (req, res) => {
  try {
    //Lägg till kod för att skicka tillbaka yt-länk från databasen
    res.status(200).json('test');
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
