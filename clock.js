const fs = require("fs");

exports.clocker = function(){
    let clock_content = fs.readFileSync("./clock/clock-skeleton.html","UTF-8");
    console.log(clock_content);
};

