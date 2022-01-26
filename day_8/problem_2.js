/**
 * takes two strings and returns the number of characters that *don't* occour in both strings
 * @param {string} str1
 * @param {string} str2
 */
const diffCount = (str1, str2) => {
  let count = 0;

  str1.split("").forEach((char) => {
    if (!str2.includes(char)) {
      count += 1;
    }
  });

  return count;
};

/**
 * @param {string} input
 */
const main = (input) => {
  const OUTPUT_LEN = 4;
  let count = 0;

  input
    .trim()
    .split("\n")
    .forEach((line) => {
      const [combinations, output] = line.split(" | ");

      const comboMap = {};
      const digitMap = {};

      const comboArray = combinations.split(" ");

      comboArray.forEach((combo) => {
        if (combo.length === 2) {
          comboMap[combo] = 1;
          digitMap[1] = combo;
          return;
        }

        if (combo.length === 4) {
          comboMap[combo] = 4;
          digitMap[4] = combo;
          return;
        }

        if (combo.length === 3) {
          comboMap[combo] = 7;
          digitMap[7] = combo;
          return;
        }

        if (combo.length === 7) {
          comboMap[combo] = 8;
          digitMap[8] = combo;
          return;
        }
      });

      // finding 6
      // look for six letter combos with one character diff with 1
      for (combo of comboArray) {
        if (combo.length === 6 && diffCount(digitMap[1], combo) === 1) {
          comboMap[combo] = 6;
          digitMap[6] = combo;
        }
      }

      // finding 0
      // look for six letter combos with one character diff with 4
      for (combo of comboArray) {
        if (
          combo.length === 6 &&
          combo !== digitMap[6] &&
          diffCount(digitMap[4], combo) === 1
        ) {
          comboMap[combo] = 0;
          digitMap[0] = combo;
        }
      }

      // finding 9
      // look for six letter that are not 6 or 0
      for (combo of comboArray) {
        if (
          combo.length === 6 &&
          combo !== digitMap[6] &&
          combo !== digitMap[0]
        ) {
          comboMap[combo] = 9;
          digitMap[9] = combo;
        }
      }

      // finding 5
      // look for five letter combos with one character diff with 6
      for (combo of comboArray) {
        if (combo.length === 5 && diffCount(digitMap[6], combo) === 1) {
          comboMap[combo] = 5;
          digitMap[5] = combo;
        }
      }

      // finding 3
      // look for five letter combos with one character diff with 9
      for (combo of comboArray) {
        if (
          combo.length === 5 &&
          combo !== digitMap[5] &&
          diffCount(digitMap[9], combo) === 1
        ) {
          comboMap[combo] = 3;
          digitMap[3] = combo;
        }
      }

      // finding 2
      // look for five letter that are not 5 or 3
      for (combo of comboArray) {
        if (
          combo.length === 5 &&
          combo !== digitMap[5] &&
          combo !== digitMap[3]
        ) {
          comboMap[combo] = 2;
          digitMap[2] = combo;
        }
      }

      const sortedComboMap = {};
      Object.keys(comboMap).forEach((key) => {
        const sorted = key.split("").sort().join("");
        sortedComboMap[sorted] = comboMap[key];
      });

      let outputNumber = 0;
      output.split(" ").forEach((combo, index) => {
        const sorted = combo.split("").sort().join("");

        outputNumber +=
          sortedComboMap[sorted] * Math.pow(10, OUTPUT_LEN - index - 1);
      });

      count += outputNumber;
    });

  return count;
};

main(`
be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb | fdgacbe cefdb cefbgd gcbe
edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec | fcgedb cgb dgebacf gc
fgaebd cg bdaec gdafb agbcfd gdcbef bgcad gfac gcb cdgabef | cg cg fdcagb cbg
fbegcd cbd adcefb dageb afcb bc aefdc ecdab fgdeca fcdbega | efabcd cedba gadfec cb
aecbfdg fbg gf bafeg dbefa fcge gcbea fcaegb dgceab fcbdga | gecf egdcabf bgf bfgea
fgeab ca afcebg bdacfeg cfaedg gcfdb baec bfadeg bafgc acf | gebdcfa ecba ca fadegcb
dbcfg fgd bdegcaf fgec aegbdf ecdfab fbedc dacgb gdcebf gf | cefg dcbef fcge gbcadfe
bdfegc cbegaf gecbf dfcage bdacg ed bedf ced adcbefg gebcd | ed bcgafe cdgba cbgef
egadfb cdbfeg cegd fecab cgb gbdefca cg fgcdab egfdb bfceg | gbdfcae bgc cg cgb
gcafb gcf dcaebfg ecagb gf abcdeg gaef cafbge fdbac fegbdc | fgae cfgab fg bagce
`);

module.exports = main;
