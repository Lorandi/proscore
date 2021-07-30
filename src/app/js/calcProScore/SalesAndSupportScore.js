const SalesAndSupportScore = (pro) => {
  const sales = pro.past_experiences.sales
  const support = pro.past_experiences.support
  let score = 0
// improve score if Pro has past expirience on sales
  if (sales) score += 5

  // improve score if Pro has past expirience on support
  if (support) score += 3
  return score
}
module.exports = SalesAndSupportScore
