import Uppy from "@uppy/core";
import DragDrop from "@uppy/drag-drop";
import XHR from "@uppy/xhr-upload";

import "@uppy/core/dist/style.min.css";
import "@uppy/drag-drop/dist/style.min.css";
import "./style.css";

const uppy = new Uppy().use(DragDrop, { target: "#drag-drop" }).use(XHR, {
  endpoint: "https://xhr-server.herokuapp.com/upload",
});

uppy.on("progress", () => console.log("progress"));
uppy.on("complete", () => console.log("complete"));

document.getElementById("upload-button").addEventListener("click", () => {
  uppy.upload().then(() => {
    console.log("uploaded");
  });
});
