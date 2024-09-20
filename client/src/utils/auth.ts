import { JwtPayload, jwtDecode } from 'jwt-decode';
import { UserData } from '../interfaces/UserData';

class AuthService {
  getProfile() {
    // TODO: return the decoded token
    return jwtDecode<UserData>(this.getToken());
  }

  loggedIn() {
    // TODO: return a value that indicates if the user is logged in
    const jwt = this.getToken();
    return !!jwt && !this.isTokenExpired(jwt);
  }
  
  isTokenExpired(jwt: string) {
    // TODO: return a value that indicates if the token is expired
    try {

    
    const decode = jwtDecode<JwtPayload>(jwt);
    console.log(decode);

    if (decode?.exp && decode?.exp < Date.now()) {
      return true;
    }
  } catch (error) {
    return false;
  }
}

  getToken(): string {
    // TODO: return the token
    const loggedUser = localStorage.getItem('id_token') || '';
    return loggedUser
  }

  login(idToken: string) {
    // TODO: set the token to localStorage
    // TODO: redirect to the home page
    localStorage.setItem('id_token', idToken);
    window.location.assign('/')
  }

  logout() {
    // TODO: remove the token from localStorage
    // TODO: redirect to the login page
    localStorage.removeItem('id_token');
    window.location.assign('/');
  }
}

export default new AuthService();
