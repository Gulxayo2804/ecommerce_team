const User = require('../../models/User')

exports.dashboard = async (req, res, next) => {
  const admins = await User.find()
  const user = req.session.admin; // admin session
  res.render("./admin/dashboard", { layout: "./admin_layout", user,admins});
};
