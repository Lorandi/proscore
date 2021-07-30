  // check if age is a integer and bigger than zero
  const Age = (pro) => {
    const age = pro.age
    let invalid = ''

    if (typeof age !== 'number' || !Number.isInteger(age) || age < 0) {
      console.log('Invalid age: Attributes aren´t a integer equal or greater than 0 ')
      invalid += 'Invalid age: Attributes aren´t a integer equal or greater than 0 .'
    }
    return invalid
  }

  module.exports = Age