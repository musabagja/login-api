const errorHandler = (err, req, res, next) => {
  let status;
  let message;

  console.log(err)

  switch(err.name) {
    case 'NoUsername':
      status = 400;
      message = 'Please fill your username';
      break;
    case 'Unregistered':
      status = 401;
      message = `Username isn't registered yet`;
      break;
    case 'WrongPassword':
      status = 401;
      message = `Wrong Password`;
      break;
    case 'ScanNumberRegistered':
      status = 400;
      message = 'Scan number has already been inputed';
      break;
    case 'Unauthorized':
      status = 401;
      message = 'You are unauthorized';
      break;
    case 'NoScanNumber':
      status = 400;
      message = 'No scan number detected';
      break;
    default:
      status = 500;
      message = 'Internal Server Error';
  }

  res.status(status).json({
    code: status,
    message
  })
}

module.exports = errorHandler