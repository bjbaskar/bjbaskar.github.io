import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({ message: "Hello from Next.js!" });
}
// import fs from "fs";
// import path from "path";

// export default function handler(req: any, res: any) {
//   const filePath = path.join(
//     process.cwd(),
//     "../../components/code/pycode/Singleton.py"
//   );
//   console.log("filePath", filePath);
//   fs.readFile(filePath, "utf8", (err, data) => {
//     if (err) {
//       res.status(500).json({ error: "Could not read the file." });
//       return;
//     }
//     res.status(200).json({ content: data });
//   });
// }
