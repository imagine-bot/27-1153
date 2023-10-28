import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { count } = req.body;

  // Here you would typically update the count in your database
  // For the sake of this example, we'll just return a success message

  res.status(200).json({ message: `Count updated to ${count}` });
}