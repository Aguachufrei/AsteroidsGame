/*
  - asteroidSpeed
  - backgroundColor
  - turnSpeed
  - aceleration
  - deceleration
  - shootInterval
  - asteroidSpeed
*/
const levelsInfo = [
  {
    title: "Level 1",
    song: "The Asteroid Chase",
    characteristics: {
      backgroundColor: "#000000",
      asteroidSpeed: 4,
    },
    waves: [
      {
        title: "Wave 1",
        messages: [
          ["Level 1", 1000],
          ["Welcome to the game! Use \u{1F130}\u{1F146}\u{1F133} or \u2347\u2350\u2348 to move.", 1000],
          ["Asteroids incoming!, use spacebar to shoot them ", 1000]],
        asteroids: [1, 0, 0, 0, 0],
        //message: ["Get ready for your first wave of asteroids!", 3000],
      },
      {
        title: "Wave 2",
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
        asteroids: [2, 0, 0, 0, 0],
      },
    ]
  },

  {
    title: "Level 2",
    song: "The Asteroid Chase",
    characteristics: {
      playerAceleration: 1.2,
      backgroundColor: "#004040",
    },
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 2", 1000],
          ["The universe is a dangerous place, watch out for those asteroids!", 3000],
          ["Wave 1", 1000],
          ["Remember, universe means void \n void means braking is a challenge by itself", 4000],
        ]
      },
      {
        title: "Wave 2",
        asteroids: [0, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["Be careful! the big brother is coming", 3000],
        ]
      },
    ]
  },
  {
    title: "Level 3",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        laserBeams: {
          timeRandomness: 20/* % */,
          period: 5000 /* ms */,
          focus: "playerFocused",
          amount: "infinite",
          delay: 500 /* frames, cs probably */,
        },
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 4",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 5",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 6",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 7",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 8",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 9",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 10",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 11",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 12",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 13",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 14",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 15",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 16",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
  {
    title: "Level 17",
    song: "The Asteroid Chase",
    waves: [
      {
        title: "Wave 1",
        asteroids: [2, 0, 0, 0],
        messages: [
          ["Level 3", 1000],
          ["The asteroid belt is no place for the faint of heart. \nStay focused!", 4000],
          ["Wave 1", 1000],
          ["Asteroids incoming!, use spacebar to shoot them", 3000],
        ],
      },
      {
        title: "Wave 2",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 2", 1000],
          ["More asteroids incoming!", 3000],
        ],
      },
      {
        title: "Wave 3",
        asteroids: [1, 1, 0, 0],
        messages: [
          ["Wave 3", 1000],
          ["More asteroids incoming!", 3000],
        ],
      }
    ]
  },
]