
exports.dashboard = async (req, res, next) => {
  const user = req.session.admin; // admin session
  res.render("./admin/dashboard", { layout: "./admin_layout", user});
};
exports.login = async (req, res, next) => {
  res.render("./admin/login/index", { layout: "./admin/login/layout" });
};
