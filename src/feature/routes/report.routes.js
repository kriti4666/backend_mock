const express = require("express")
const ReportModel = require("../modal/report.modal")

const app = express.Router();

app.get("/", async (req, res) => {
    const report = await ReportModel.find();
    res.send(report);

});

app.post("/", async (req, res) => {
    try {
        const { title } = req.body
        const report = new ReportModel({ title });
        await report.save();
        return res.send({ msg: "success" })
    } catch (error) {
        return res.send({msg: error})
    }
})

module.exports = app;
