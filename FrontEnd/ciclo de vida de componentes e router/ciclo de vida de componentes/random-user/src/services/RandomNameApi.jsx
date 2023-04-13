const URL = 'https://api.randomuser.me/';

export const randomNameApi = async () => {
  const response = await fetch(URL);
  return response
}