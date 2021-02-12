const { parse } = require("path");

const parseStringToDate = (date) => {
    let strDate = String(date);
    let strDateSplitted = strDate.split(" "); // dd/mm/yyyy, HH:mm
    let leftItems = strDateSplitted[0].split("/");
    if (strDateSplitted.length <= 1)
    {
        return new Date(Number(leftItems[2]), Number(leftItems[1]) - 1, Number(leftItems[0]));
    }
    else
    {
        let rightItems = strDateSplitted[1].split(":");
        return new Date(Number(leftItems[2]), Number(leftItems[1]) - 1, Number(leftItems[0]), Number(rightItems[0]), Number(rightItems[1]));
    }
}

module.exports = {
    parseStringToDate
};