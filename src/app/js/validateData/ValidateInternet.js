// check if download speed and upload speed are positive numbers (floats)

const ValidateInternet = (pro) => {
  const downloadSpeed = pro.internet_test.download_speed
  const uploadSpeed = pro.internet_test.upload_speed

  let invalid = ""

  if (typeof downloadSpeed !== 'number' ||
    typeof uploadSpeed !== 'number' ||
    downloadSpeed < 0 ||
    uploadSpeed < 0) {
    console.log('Invalid internet test. Attributes aren´t positive floats')
    invalid += 'Invalid internet test. Attributes aren´t positive floats. '
  }
  return invalid    
}
module.exports = ValidateInternet