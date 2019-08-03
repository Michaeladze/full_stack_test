const Users = require('../database/users.schema');

const login = (req, res) => {
  const user = new Users({
    login: req.body.login,
    password: req.body.password
  });

  user.save()
    .then(data => {
      res.json({
        status: true,
        data: data
      })
    })
    .catch(error => {
      res.json({
        status: false,
        error: error
      })
    })
};

module.exports = {
  login
};
