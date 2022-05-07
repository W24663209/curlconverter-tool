let curlconverter = require('curlconverter');
let fs = require('fs');

fs.readFile('../static/input.txt', 'utf-8', function (err, data) {
    if (err) {
        console.error(err);
    } else {
        let result = curlconverter.toPython(data);
        console.log(result)
        fs.writeFile('../static/out.txt', result, function (err) {
            if (err) {
                return console.error(err);
            }
            console.log("数据写入成功！");
            console.log("--------我是分割线-------------")
            console.log("读取写入的数据！");
        });
    }
});
