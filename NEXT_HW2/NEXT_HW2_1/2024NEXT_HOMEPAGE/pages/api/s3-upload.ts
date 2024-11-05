import { APIRoute } from "next-s3-upload";
// export { APIRoute as default } from "next-s3-upload";
export default APIRoute.configure({
  key(req, filename) {
    let studentNumber = req.body.studentNumber;
    let email = req.body.email;
    let splitted = filename.split(".");
    return `recruit/${studentNumber}-${email}.${splitted[splitted.length - 1]}`;
  },
});
