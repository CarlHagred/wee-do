export const getVideoUrl = async (req, res) => {
  try {
    //qrkoden som skickas i requesten nås med req.query.qr
    //TODO Lägg till kod för att skicka tillbaka yt-länk från databasen
    res.status(200).json(req.query.qr);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  try {
    //qrkoden som skickas i requesten nås med req.query.qr
    //TODO Lägg till kod för att skicka tillbaka yt-länk från databasen
    res.status(200).json(req.query.qr);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
