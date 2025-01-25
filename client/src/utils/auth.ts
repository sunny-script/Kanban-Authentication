import { JwtPayload, jwtDecode } from 'jwt-decode';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    const token = this.getToken();
    return token ? jwtDecode<JwtPayload>(token) : null;
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }
  
  isTokenExpired(token: string) {
    // TODO: return a value that indicates if the token is expired
    try {
      const decoded = jwtDecode<JwtPayload>(token);
      if (!decoded.exp) {
        return false; // If the token does not have an expiration, assume it's valid
      }
      const currentTime = Math.floor(Date.now() / 1000); // Current time in seconds
      return decoded.exp < currentTime; // Compare expiration time with current time
    } catch (error) {
      return true; // If decoding fails, assume the token is expired
    }
  }

  getToken(): string {
    // TODO: return the token
    return localStorage.getItem('jwt') || '';
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    localStorage.setItem('jwt', idToken);
    // TODO: redirect to the home page
    window.location.href = '/';
  }

  logout() {
    // TODO: remove the token from localStorage
    localStorage.removeItem('jwt');
    // TODO: redirect to the login page
    window.location.href = '/login';
  }
}

export default new AuthService();
