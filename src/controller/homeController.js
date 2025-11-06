const handleHelloWord = (req, res) => {
  return res.send("home.ejs");
};
const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};
module.exports = {
  handleHelloWord,
  handleUserPage,
};
