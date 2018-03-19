class LocalStorage {
  saveState(state) {
    return new Promise((resolve, reject) => {
      localStorage.setItem('state', JSON.stringify(state));
      resolve();
    });
  }
  loadState() {
    return new Promise((resolve, reject) => {
      try {
        let state = JSON.parse(localStorage.getItem('state'));

        return resolve(state);
      } catch (e) {
        reject(e);
      }

    });
  }
}

export default new LocalStorage();