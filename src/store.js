class MyStoreClass {
  constructor () {
    this.randomNumber = 0
  }
}

export const MyStore = new Proxy(new MyStoreClass(), {
  set: function (target, key, value) {
    target[key] = value;
    let data = { key: key, value: value };
    const changeEvent = new CustomEvent('storeChanged', { detail: data });
    window.dispatchEvent(changeEvent);
    return true;
  }
});
