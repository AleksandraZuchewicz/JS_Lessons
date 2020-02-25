//File base.js
console.log("in base.js");
// in base js

//File base.js
projectiD = 99;
console.log("in base.js");
// RunTimeError:
//Variable undefined in strict mode

//File base.js
import { projectId } from "module1.js";
console.log("projectiD");
// file.module1.js
projectiD = 99;
// in console will be 99

//File base.js
import { projectId as id, projectName } from "module1.js";
console.log(`${projectName} has id: ${id}`);
// file.module1.js
export let projectiD = 99;
export let projectName = "BuildIt";
// BuildIt has id: 99


//File base.js
import { projectId as id, projectName } from "module1.js";
console.log(`${projectName} has id: ${projectId}`);
// file.module1.js
export let projectiD = 99;
export let projectName = "BuildIt";
// runtime Error: projectId is undefined


//File base.js
console.log('starting in base');
import { projectId } from "module1.js";
console.log('ending in base');
// file.module1.js
export let projectiD = 99;
console.log('in module1')
// in module1
// starting in base 
// ending in base 

//File base.js
import someValue from "module1.js";
console.log(someValue);
// file.module1.js
export let projectiD = 99;
let projectName = 'BuildIt';
export default projectName;
// BuildIt
// without curly brackets value with default keyworld will be called 



