async function a() {
  try {
    let a = 10;
    if (a >= 10) {
      console.log("a");
      throw new Error("Something went wrong");
    }
    console.log("a");
  } catch (err) {
    console.log(err);
  }
}
a();
