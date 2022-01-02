import { NextApiHandler } from "next";
import jobs from "../../../../../data/ffxiv/jobs";

const handler: NextApiHandler = (req, res) => {
  const jobAbbreviation = req.query.abbr as string; // cast because we know we don't have multi params for this parameter
  const job = jobs.find(
    (job) => job.abbreviation.toLowerCase() === jobAbbreviation.toLowerCase()
  );

  if (!job) {
    res.status(404).json(`Unknown job ${jobAbbreviation.toUpperCase()}`);
  }

  return res.status(200).json(job);
};

export default handler;
