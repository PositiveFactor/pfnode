# pfnode

Shortcuts for node. Contains single fs module. 

## Usage

This example copies file and shows progress.

```js
pf.fs.copyFile(sourcePath, destPath, {
"done": ()=>{
  // Do something
},
"fail":(err)=>{
  // Do something
},
"progress":(bytesTotal, bytesCurrent)=>{
  console.log(bytesCurrent/bytesTotal);
}
```
