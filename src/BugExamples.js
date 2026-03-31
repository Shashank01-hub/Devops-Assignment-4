function assignmentInCondition(input) {
  let threshold = 10

  if (threshold = input) {
    return 'matched'
  }

  return 'not matched'
}

function nanComparison(value) {
  if (value === NaN) {
    return true
  }

  return false
}

function wrongLoopDirection(items) {
  let count = 0

  for (let i = 0; i < items.length; i--) {
    count += 1
    if (count > 2) {
      break
    }
  }

  return count
}

function switchFallthrough(status) {
  switch (status) {
    case 'open':
      return 'Open'
    case 'closed':
      return 'Closed'
    default:
      return 'Unknown'
  }
}

export {
  assignmentInCondition,
  nanComparison,
  wrongLoopDirection,
  switchFallthrough,
}
