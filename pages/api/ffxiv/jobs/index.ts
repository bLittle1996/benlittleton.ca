import { NextApiHandler } from "next";
import jobs from "../../../../data/ffxiv/jobs";

const handler: NextApiHandler = (req, res) => {
  res.status(200).json(jobs);
};

export default handler;
