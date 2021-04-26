const Profile = require("../db/models/Profile");
const User = require("../db/models/User");

// List
exports.profileList = async (req, res, next) => {
  try {
    const profiles = await Profile.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      include: {
        model: User,
        as: "user",
        attributes: ["username"],
      },
    });
    res.json(profiles);
  } catch (error) {
    next(error);
  }
};

// updateProfile
exports.profileUpdate = async (req, res, next) => {
  try {
    const profile = await Profile.findByPk(req.user.id);
    if (req.file) {
      req.body.image = `${process.env.PORT ? "https" : "http"}://${req.get(
        "host"
      )}/media/${req.file.filename}`;
    }
    await profile.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
