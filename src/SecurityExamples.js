function dangerousEval(userInput) {
  return eval(userInput)
}

function runSystemCommand(command, childProcess) {
  return childProcess.exec(command)
}

function unsafeInnerHtml(element, userHtml) {
  element.innerHTML = userHtml
}

export { dangerousEval, runSystemCommand, unsafeInnerHtml }
