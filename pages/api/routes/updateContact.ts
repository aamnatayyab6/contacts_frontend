import { updateContact } from "../contacts";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "PUT") {
    try {
      const updatedContactData = req.body; // Get updated contact data from the request body
      const updatedContact = await updateContact(updatedContactData);
      res.status(200).json(updatedContact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
