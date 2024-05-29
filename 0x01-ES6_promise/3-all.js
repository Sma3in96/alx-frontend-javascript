import { uploadPhoto, createUser } from './utils';

export default async function handleProfileSignup() {
  await Promise.all([createUser(), uploadPhoto()])
    .then((values) => {
      console.log(`${values[1].body} ${values[0].firstName} ${values[0].lastName}`);
    })
    .catch(() => console.log('Signup system offline'));
}
