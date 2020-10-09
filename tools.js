module.exports = {
  print: (text, time) => {

    if (!time) {
      console.log(text);
      return Promise.resolve();
    }

    return new Promise(resolve => {
      setTimeout(() => {
        console.log(text);
        return resolve();
      }, time);
    });
  }
}
