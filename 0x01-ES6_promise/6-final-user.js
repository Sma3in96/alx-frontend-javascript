import singUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const list = [];
  Promise.allSettled([
    singUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((res) => {
    res.forEach((ele) => {
      console.log(ele);
      if (ele.status === 'fulfilled') {
        list.push({
          status: ele.status,
          value: ele.value,
        });
      } else {
        list.push({
          status: ele.status,
          value: ele.reason,
        });
      }
    });
  });

  return list;
}
