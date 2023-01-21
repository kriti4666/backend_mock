const { Schema, model } = require("mongoose");
const reportSchema = new Schema({
    cards: String

});

const ReportModel = model("report", reportSchema);
module.exports = ReportModel;