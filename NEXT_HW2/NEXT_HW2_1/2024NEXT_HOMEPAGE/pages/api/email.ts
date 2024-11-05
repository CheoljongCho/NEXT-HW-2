import { google } from "googleapis";
type SheetForm = {
  name: string;
  email: string;
  studentNumber: string;
  phone: string;
  message: string;
  file: string;
  url: string;
};

async function handler(req: any, res: any) {
  if (req.method === "POST") {
    const body = req.body as SheetForm;
    // console.log(body);

    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_CLIENT_EMAIL,
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: [
          "https://www.googleapis.com/auth/drive",
          "https://www.googleapis.com/auth/drive.file",
          "https://www.googleapis.com/auth/spreadsheets",
        ],
      });
      const sheets = google.sheets({
        auth,
        version: "v4",
      });

      const response = await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SHEET_ID,
        range: "A1:G1",
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              body.name,
              body.studentNumber,
              body.email,
              body.phone,
              body.message,
              body.file,
              body.url,
            ],
          ],
        },
      });
      res.status(200).json({ data: response.data });
    } catch (err: any) {
      res.status(500).json({
        message: err.message ?? "뭔가 잘못되었습니다. Something went wrong",
      });
    }
  }
}

export default handler;
