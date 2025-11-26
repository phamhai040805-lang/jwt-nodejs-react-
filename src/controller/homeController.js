import mysql from "mysql2";
// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "jwt",
});
const handleHelloWord = (req, res) => {
  return res.render("home.ejs");
};
const handleUserPage = (req, res) => {
  return res.render("user.ejs");
};

const handleCreateNewUser = (req, res) => {
  // 1. Lấy dữ liệu từ request body
  let email = req.body.email;
  let password = req.body.password;
  let username = req.body.username;

  // 2. Thực thi truy vấn SQL
  // Giả sử 'connection' là đối tượng kết nối database của bạn (ví dụ: mysql2)
  connection.query(
    "INSERT INTO users (email, password, username) VALUES (?, ?, ?)",
    [email, password, username],
    function (err, results, fields) {
      // 3. Xử lý lỗi (Error Handling)
      if (err) {
        console.log(err);
      }

      // 4. Phản hồi thành công (Success Response)
      // Bạn có thể gửi một thông báo hoặc dữ liệu kết quả (results)
      return res.send("handleCreateNewUser");
    }
  );

  // Lưu ý: Dòng này sẽ được chạy ngay lập tức nếu dùng callback,
  // nhưng tốt hơn là nên gửi phản hồi bên trong callback (như ở trên).
  // return res.send("handleCreateNewUser");
};

// Xuất (Export) hàm để có thể sử dụng ở các file khác (ví dụ: routes)
module.exports = {
  handleCreateNewUser,
};
module.exports = {
  handleHelloWord,
  handleUserPage,
  handleCreateNewUser,
};
