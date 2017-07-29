'use strict';

angular.module('7minWorkout')                                                            
  .controller('WorkoutController', ['$scope', '$interval', function ($scope, $interval) {
    var resetExercise;
    var workoutPlan;

    var startExercise = function(exercisePlan) {
      $scope.currentExercise = exercisePlan;
      $scope.currentExerciseDuration = 0;
      $interval(function() {
        $scope.currentExerciseDuration += 1;
      }, 1000, $scope.currentExercise.duration);
    };

    var createWorkout = function() {
      var workout = new WorkoutPlan({
        name: "7minWorkout",
        title: "7 Minute Workout",
        restBetweenExercise: 10
      });

      workout.exercises.push({
        details: new Exercise({
          name: "jumpingJacks",
          title: "jumpingJacks",
          description: "Jumping Jacks",
          image: "img/JumpingJacks.png",
          videos: [],
          procedure: ""
        }),
        duration: 30
      });

      return workout;
    }

    var startWorkout = function() {
      workoutPlan = createWorkout();
      restExercise = {
        details: new Exercise({
          name: "rest",
          title: "Rest!",
          description: "Reset a little bit!",
          image: "img/rest.png"
        }),
        duration: workoutPlan.resetBetweenExerciese
      }
      startExercise(workoutPlan.exercises.shift());
    }

    var init = function() {
      startWorkout();
    };
  }]);
