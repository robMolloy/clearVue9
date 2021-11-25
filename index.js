const defaultMessage = "Console cleared in 'src/boot/clearConsole.js' - may not show boot errors";

const onStatusChange = (status, msg) => {
  if (status !== 'prepare') return;

  console.clear();
  if(msg !== '') console.warn(msg || defaultMessage);
};

/**
 * 
 * @param {module} mod - the Vue module
 * @param {String} msg - the message after console clear, change to '' to remove warning
 */
export const clearConsole = (mod, msg) => {
  if(!mod) {
    console.error("module must be passed!");
    throw new Error;
  }
  if (mod.hot) {
    mod.hot.accept(); // already had this init code
    mod.hot.addStatusHandler((status) => onStatusChange(status, msg));
  }
};
