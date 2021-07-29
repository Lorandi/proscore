  // improve or deducted score point according to the writing score
  const WritingScore = (pro) => {
    const writingScore = pro.writing_score

    let score = 0
    
    switch (true) {
      case writingScore < 0.3:
        score -= 1
        break
      case writingScore > 0.7:
        score += 2
        break
      default:
        score += 1
        break
    }
    return score
  }

  module.exports = WritingScore