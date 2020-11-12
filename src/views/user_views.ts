import User from '../models/User';

export default {
  render(user: User) {
    return {
      name: user.name,
      email: user.email,
      image_path: `http://192.168.1.105:3000/uploads/${user.image_name}`
    };
  }
};
