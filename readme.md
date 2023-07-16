<-- NOTES APP -->

1. fs Module - File System
   -> Other Useful Package (fs-extra)

2. chalk Module - Styling The Output in Terminal/Console
   -> Other Useful Packages (figlet, cli-progress)

3. process.argv - Command Line Arguments
   -> This gives array of length minimum 2 where
   -> 1st represents the path of node js
   -> 2nd represents the path of project
   -> other's represents the input
   -> node app.js <input_here> <input_here>
   -> example : node app.js add --title="Things to buy"
   -> --title is the key and "Things to buy" is the value
4. yargs Module - Create Commands
   -> Other Useful Packages (commander.js)

5. detect changes - nodemon (NOT USED IN NOTES APP)
   -> npm install nodemon --save-dev/-D (FOR DEV DEPENDENCY)

<-- NODE WEB SERVER -->

1. create webserver with http module
2. fs Module - File System
   -> __dirname - provide absolute path without file name (/home/lokesh/Projects/Projects/Node Js/web-server)
   -> __filename - provide absolute path with file name (/home/lokesh/Projects/Projects/Node Js/web-server/app.js)
3. path Module - Manipulating the path
   -> join()

<-- NODE BASIC -->

1. readline Module - Waiting For Input
   -> Other Useful Packages (inquirer, propts)
   -> process.stdout, process.stderr, process.stdin

2. FileSystem
3. Custom Events
4. Streams Basic

<-- NODE ADVANCE -->

1. Cluster
2. Streams
