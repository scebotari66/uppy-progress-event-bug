import Uppy from "@uppy/core";
import Dashboard from "@uppy/dashboard";
import XHR from "@uppy/xhr-upload";

import "@uppy/core/dist/style.min.css";
import "@uppy/dashboard/dist/style.min.css";

const uppy = new Uppy()
  .use(Dashboard, { inline: true, target: "body" })
  .use(XHR, {
    endpoint: "https://xhr-server.herokuapp.com/upload",
    formData: true,
    fieldName: "file",
    allowedMetaFields: false,
    timeout: 0,
    shouldRetry: () => false,
  });

uppy.on("progress", () => console.log("progress"));
uppy.on("complete", () => console.log("complete"));
