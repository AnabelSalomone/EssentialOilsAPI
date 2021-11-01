const EssentialOilsSchema = require("../models/essential-oils");

const getEssentialOils = (req, res, next) => {
  const oils = EssentialOilsSchema.find()
    .then((data) => res.status(200).json(data))
    .catch((err) => consle.log(err));
};

module.exports = getEssentialOils;
