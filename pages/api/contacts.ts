import { NextApiRequest, NextApiResponse } from "next";

const backendUrl = "https://contacts-backend-hhfn.onrender.com";

// fetch all contacts
export async function getContacts() {
  try {
    const response = await fetch(`${backendUrl}/`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching contacts:", error);
    throw error;
  }
}

// fetch a single contact by ID
export const getContactById = async (id: string) => {
  const response = await fetch(`${backendUrl}/${id}`);
  const data = await response.json();
  return data;
};

// create a new contact
export const createContact = async (contactData: any) => {
  const response = await fetch(`${backendUrl}/addContact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });
  const data = await response.json();
  return data;
};

// update a contact by ID
export const updateContact = async (id: string, contactData: any) => {
  const response = await fetch(`${backendUrl}/updateContact/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactData),
  });
  const data = await response.json();
  return data;
};

// delete a contact by ID
export const deleteContact = async (id: string) => {
  const response = await fetch(`${backendUrl}/deleteContact/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

// API route to get all contacts
export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const contacts = await getContacts();
    res.status(200).json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
