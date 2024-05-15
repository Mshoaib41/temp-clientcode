const { Settings } = require("../../models");


async function create(req, res, next) {
  try {
    const setting =  await Settings.findOneAndUpdate(
      {}, 
      { $set: {...req.body} }, 
      { new: true, upsert: true  } 
    )

    res.json({
      status: 200,
      message: "Setting updated successfully",
      data: setting,
    });
  } catch (error) {
    return next(error);
  }
}


module.exports = {create}