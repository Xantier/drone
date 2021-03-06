module.exports = (drone) => {
  const stableFlightParams = {
    yaw: 0,
    pitch: 0,
    roll: 0,
    altitude: 0,
  };

  return {
    takeoff: () => {
      drone.takeoffOrLand();
    },

    land: () => {
      drone.takeoffOrLand();
    },

    stabilize: () => {
      drone.setFlightParams(stableFlightParams);
    },

    goForward: () => {
      drone.setFlightParams(Object.assign({}, stableFlightParams, {pitch: 100}));
    },

    goBackwards: () => {
      drone.setFlightParams(Object.assign({}, stableFlightParams, {pitch: -100}));
    },

    goRight: () => {
      drone.setFlightParams(Object.assign({}, stableFlightParams, {roll: 100}));
    },

    goLeft: () => {
      drone.setFlightParams(Object.assign({}, stableFlightParams, {roll: -100}));
    },
    getReady: () => {
      drone.setFlightParams(stableFlightParams);
    }
  }
};
