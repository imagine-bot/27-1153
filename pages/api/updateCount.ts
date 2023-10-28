import type { NextApiRequest, NextApiResponse } from 'next'
import { Pool } from 'pg'

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
})

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { count } = req.body;

  try {
    await pool.query('UPDATE counts SET count = $1 WHERE id = 1', [count])
    res.status(200).json({ message: `Count updated to ${count}` })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error updating count' })
  }
}