import { NextApiRequest, NextApiResponse } from "next";
import { createContact } from "../contacts";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    try {
      const newContactData = req.body;

      if (!newContactData.name) {
        return res.status(400).json({ error: "Name is required" });
      }

      const newContact = await createContact(newContactData);
      res.status(201).json(newContact);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
