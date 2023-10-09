import { NextApiRequest, NextApiResponse } from "next";
import { deleteContact } from "../contacts";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "DELETE") {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({ error: "Invalid Contact ID" });
      }

      // Call the deleteContact function with the received ID
      await deleteContact(id);

      // Respond with a success message or appropriate response
      res.status(200).json({ message: "Contact deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
};
