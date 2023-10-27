// synchronous
/*   console.log("I");
console.log("eat");
console.log("ice cream");
console.log("with");
console.log("a spoon"); */

// one after the other

/*  console.log("I");
console.log("eat");
setTimeout(() => {
  console.log("ice cream");
}, 0);
console.log("with");
console.log("a spoon");    */ // first synchronous code is executed and after the completion of synchronous code settimeout is executed

// callback       -> nest a function inside another function

/* function one(call) {
  console.log("step 1 completed");
  call;
}
function two() {
  console.log("step 2");
}

// one(two);  
one(two()); // this is call back    */

/* let order = (a) => {
  setTimeout(() => {
    console.log("order placed");
    a();
  }, 2000);
};

let production = () => {
  console.log("production has been started");
  setTimeout(() => {
    console.log("fruit has been chopped");
    setTimeout(() => {
      console.log("water and ice has been added");
      setTimeout(() => {
        console.log("start the machine");
        setTimeout(() => {
          console.log("select container");
          setTimeout(() => {
            console.log("select toppling");
            setTimeout(() => {
              console.log("ice cream is ready to serve"); // this format is callback hell
            }, 2000);
          }, 3000);
        }, 2000);
      }, 1000);
    }, 1000);
  }, 2000);
}; // the above format is called call back hell

order(production);   */

/* let is_shop_open = true;
let ordertaken = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("shop is closed"));
    }
  });
};

ordertaken(2000, () => {
  console.log(` Shop is ${is_shop_open}ed`);
}); */

// const mypromise = new Promise((resolve, reject) => {
//   let num = Math.floor(Math.random() * 2);
//   if (num == 0) {
//     resolve();
//   } else {
//     reject();
//   }
// });

// mypromise
//   .then(() => {
//     console.log("success");
//     // return resolve();
//   })
//   .then(() => {
//     console.log("success 2");
//   })
//   .catch(() => {
//     console.log("failure");
//   })
//   .finally(() => {
//     console.log("completed");
//   });

// let order = (time, work) => {
//   setTimeout(() => {
//     work();
//   }, time);
// };
// order(2000, () => {
//   console.log("order placed");
//   resolve();
// })
//   .then(() => {
//     order(3000, () => {
//       console.log("production started");
//     });
//   })
//   .catch(() => {
//     console.log("closed");
//   });

const a = 10;

let mypromise = new Promise((resolve, reject) => {
  if (a > 5) {
    resolve("a greater than 5");
  } else {
    reject("a less or equal to 5");
  }
});
mypromise
  .then((data) => {
    //data is info written in resolve
    console.log(data);
    return data;
  })
  .then((dat) => {
    // dat is the value which is returned in above then
    console.log(dat);
  })
  .catch((error) => {
    // error is info written in reject
    console.log(error);
  });

//async await
async function yodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

yodo();

//promise
fetch("https://jsonplaceholder.typicode.com/todos/1").then((data) => {
  console.log(data);
});
