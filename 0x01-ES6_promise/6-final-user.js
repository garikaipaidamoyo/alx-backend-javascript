import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const promises = [];
  promises.push(signUpUser(firstName, lastName));
  promises.push(uploadPhoto(fileName));

  const results = [];

  for (const promise of promises) {
    try {
      const result = await promise;
      results.push({ status: 'fulfilled', value: result });
    } catch (error) {
      results.push({ status: 'rejected', value: error.message });
    }
  }

  return results;
}
