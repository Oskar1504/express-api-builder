const fs = require("fs");
const path = require("path");

console.log(__dirname)

let used_packages = fs.readFileSync(__dirname + "\\template\\used_packages.txt").toString()

module.exports = () => {
    var args = process.argv.splice(process.execArgv.length + 2);

    var folder = args[0];
    folder = "./" + folder

    
    let mp = args[1]
    mp != undefined ? used_packages = mp.split(",").join(" ") : console.log("[INFO]: use comma seperated package names as second parameter to install them (using default atm)")

    if(folder != undefined){
        if(folder != "undefined"){
            
            let folders = [
                ["server"],
                ["server","router"],
                ["server","helper"],
                ["server","data"]
            ]

            fs.mkdirSync(folder , { recursive: true })

            folders.forEach(route => {
                fs.mkdirSync( [folder, ...route].join("/")  , { recursive: true })
            })

            let files = [
                {
                    name: ".env",
                    path: [""],
                    content: "PORT=42111"
                },
                {
                    name: ".env-template",
                    path: [""],
                    content: "PORT=42111"
                },
                {
                    name: ".gitignore",
                    path: [""],
                    content: fs.readFileSync(__dirname + "\\template\\.gitignore").toString()
                },
                {
                    name: "app.js",
                    path: ["server"],
                    content: fs.readFileSync(__dirname + "\\template\\server\\app.js").toString()
                },
                {
                    name: "api.js",
                    path: ["server","router"],
                    content: fs.readFileSync(__dirname + "\\template\\server\\router\\api.js").toString()
                },
                {
                    name: "Response.js",
                    path: ["server","helper"],
                    content: fs.readFileSync(__dirname + "\\template\\server\\helper\\Response.js").toString()
                },
                {
                    name: "init.sh",
                    path: [""],
                    content: parseInitCmdContent()
                }
            ]

            files.forEach(file => {
                fs.writeFileSync([folder, ...file.path].join("/") + "/" + file.name, file.content)
            })


        }else{
            console.log("Parameter 1 isnt allowed to be empty")
        }
    }else{
        console.log("At least one parameter required. (foldername)")
    }

    console.log("created all files")
}

function parseInitCmdContent(){
    let template = fs.readFileSync(__dirname + "\\template\\init.sh").toString()
    let content = template.replace("<PACKAGES>", used_packages)
    return content
}