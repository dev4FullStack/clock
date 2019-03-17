const fs = require("fs");

let clock = function(path="./public"){
    return clock_content = fs.readFileSync(path+"/clock/clock-skeleton.html","UTF-8");
};



exports.clocker = clock;


