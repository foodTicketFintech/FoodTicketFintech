exports.onError = (error) => {
  res.status(409).json({
    message: error.message + "Error !! ⛔",
  });
};
