import aScore from "./data/a";
import bScore from "./data/b";
import cScore from "./data/c";

import calculation from "./function/calculateAverage";

const result = calculation(aScore, bScore, cScore);
document.querySelector("#result").innerHTML = `결과값 : ${result}`;
