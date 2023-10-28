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
  try {
    await pool.query('CREATE TABLE IF NOT EXISTS counts (id SERIAL PRIMARY KEY, count INTEGER NOT NULL)')
    await pool.query('INSERT INTO counts (count) VALUES (0)')
    res.status(200).json({ message: 'Database initialized' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error initializing database' })
  }
}