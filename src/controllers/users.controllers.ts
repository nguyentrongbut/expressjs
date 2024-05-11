import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body
  if (email === 'cloly@gmail.com' && password === '1233') {
    return res.status(200).json({
      message: 'Login Success'
    })
  }
  return res.status(400).json({
    error: 'Login failed'
  })
}
