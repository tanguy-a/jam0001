const execSync = require("children_process");

const path = process.argv[0];

const mockedParsing = {
    "sum": {
      "variables": {
        "a": {
          "frequency": 300
        },
        "b": {
          "frequency": 122
        }
      },
      "effects": {
        "return": {
          "params": "fade 0.4 2 0.5"
        }
      }
    }
  }
  

const fd = open(path);

