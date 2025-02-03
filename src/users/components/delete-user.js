const deleteUser = require('../models/delete-user-model');

const deleteRouter = (req,res) => {
  {
    const id = req.params.id;
    deleteUser((error, results) => {
      if (error) {
        console.log(error);
        res.status(404).send("Cannot delete user");
      } else {
        res.status(200).send("Delete user successful");
        res.json(results);
      }
    }, id);
  }
};

module.exports = deleteRouter;