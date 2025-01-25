import { UserLogin } from "../interfaces/UserLogin";


const login = async (userInfo: UserLogin) => {
  try {
    // Use the `userInfo` parameter directly
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'An error occurred during login');
    }

    const data = await response.json();
    console.log('Login successful:', data);
    return data; // Return the server's response data
  } catch (error) {
    if (error instanceof Error) {
      console.error('Login failed:', error.message);
    } else {
      console.error('Login failed:', error);
    }
    throw error; // Re-throw the error for the caller to handle
  }
};

export { login };
