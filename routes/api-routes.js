const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get("/api/Workouts", (req, res) => {
  Workout.find({})
    .sort({ day:1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/Workouts/:id", (req, res) => {
  Workout.findOneAndUpdate(
  {_id: req.params.id},
  {$push: {exercises: req.body}
  }).then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.post("/api/Workouts/", ({ body }, res) => {
  Workout.create(body
  ).then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req,res) => {
  Workout.find({})
  .then(dbWorkout => {
      console.log(dbWorkout);
      res.json(dbWorkout);
  })
      .catch(err => {
          // If an error occurs, send the error to the client
          res.json(err);
      })
})

module.exports = router;