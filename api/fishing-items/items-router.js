const router = require("express").Router();
const model = require("./items-model");

router.get("/", (req, res) => {
  model
    .getItems()
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.json(err.mesage);
    });
});
router.get("/:item_id", (req, res) => {
  const { item_id } = req.params;
  model
    .getItemById(item_id)
    .then((items) => {
      res.status(200).json(items);
    })
    .catch((err) => {
      res.json(err.mesage);
    });
});

module.exports = router;
