function getRandomTime() {
  return Math.round(Math.random() * 2000);
}

// user
// setTimeout(() => {
//     console.log('one');
// }, );

// // posts
// setTimeout(() => {
//     console.log('two');
// }, Math.round(Math.random() * 5000));

// // post comments
// setTimeout(() => {
//     console.log('three');
// }, Math.round(Math.random() * 5000));

// new Promise((res) => {
//   const rndTime = getRandomTime();

//   setTimeout(() => {
//     console.log("one");
//     res();
//   }, rndTime);
// })
//   .then(() => {
//     const rndTime = getRandomTime();

//     return new Promise((res) => {
//         setTimeout(() => {
//             console.log("two");
//             res(10);
//           }, rndTime);
//     });
//   })
//   .then((val) => {
//     const rndTime = getRandomTime();
//     console.log(val);
//     setTimeout(() => {
//       console.log("three");
//     }, rndTime);
//   });

// pending
// rejected
// fullfilled

// const p1 = new Promise((res, rej) => {
//     console.log('PERED');
//     rej();
// }).then((val) => {
//     console.log('POTOM!', val);
//     return val * 2;
// })
// .catch((err) => {
//     console.log('ERROR', err);
//     return 'VALUE FROM CATCH'
// })
// .then((val) => {
//     console.log('POTOM2!', val);
//     throw 'asdasdasd'
//     return 100;
// })
// .then((val) => {
//     removePreloader();
//     console.log('AFTER FINALLY', val);
// })
// .catch(() => {
//     removePreloader();
// })

// console.log(1);

// setTimeout(() => {
//   console.log(2);
// }, 0);

// new Promise((res) => {
//   console.log(3);

//   setTimeout(() => {
//     console.log(4);
//     res();
//     console.log(5);
//   }, 0);

// }).then(() => {
//   console.log(6);
// });

// console.log(7);

// async function bar () {}

// const p1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(new Error('ERR'));
//   }, getRandomTime())
// })
// .then((result) => {
//   console.log(result);

//   return  30;
// })
// .catch(() => {})

// const foo = async () => {
//   let result;
//   try {
//     result = await p1;
//   } catch (err) {
//     console.log(err);
//   }

//   console.log(result);
// };

// foo()

// const p1 = new Promise((res) => {
//   setTimeout(() => {
//     res(1);
//   }, getRandomTime());
// });

// const p2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej(2);
//   }, getRandomTime());
// });

// const p3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     res(3);
//   }, getRandomTime());
// });

// const foo = async () => {
//   const res = await Promise.allSettled([p1,p3, p2]);

//   console.log(res.filter());
// };

// JavaScript Object Notation

// const zapakovka = JSON.stringify(person);

// const rozpakouka = JSON.parse(zapakovka);

// const personCopy = JSON.parse(JSON.stringify(p1));

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then((rawData) => {
//   return rawData.json();
// })
// .then((data) => {
//   console.log(data);
// });

// const getPosts = async (postNumber) => {
//   const rawData = await fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`);
//   const post = await rawData.json();

//   console.log(post);
// };

// const postNumber = prompt('which post do u wanna see?');

// getPosts(postNumber);

const post = {
  blabla: 2
};


const sendPost = async () => {
  const rawData = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
      "Date":" Mon, 18 Jul 2016 16:06:00 GMT"
    },
    body: JSON.stringify(post)
  });

  const data = await rawData.json();

  console.log(data);
};

sendPost();
