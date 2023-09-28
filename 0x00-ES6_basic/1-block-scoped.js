export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  if (trueOrFalse) {
    // Remove the var declarations inside the conditional block
    task = true;
    task2 = false;
  }

  return [task, task2];
}
