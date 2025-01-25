import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

interface JwtPayload {
  username: string;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  // TODO: verify the token exists and add the user data to the request object
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from Authorization header.

  if (!token) {
    return res.status(401).json({ message: 'Access Denied: No Token Provided' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    (req as any).user = decoded; // Attach the decoded token to the request object.
    return next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or Expired Token' });
  }
};

export default authenticateToken;

/*

fetch('/endppoint', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json', // Tell the server we are sending JSON
    'Authorization': `Bearer ${token}`, // Send the token along with the request
  },
  body: JSON.stringify({ key: 'value' }), // Send the data as JSON
})
  */