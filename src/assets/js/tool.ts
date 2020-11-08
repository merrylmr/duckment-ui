/**
 * 存储localStorage
 * @param {string} name key name
 * @param {string} content value
 */
export function setLocalStore(name, content) {
  if (!name) return
  if (content === undefined) {
    localStorage.removeItem(name)
    return
  }
  try {
    window.localStorage.setItem(name, JSON.stringify(content));
  } catch (e) {
    console.error(`set local Storage fail. ${e}`)
  }
}


/**
 * 获取localStorage
 * @param {string} name key name
 */
export function getLocalStore(name) {
  if (!name) return
  let value = localStorage.getItem(name)
  if (value !== undefined) {
    try {
      value = JSON.parse(value)
    } catch (e) {
      if (e.name === 'SyntaxError') {
        console.error(`can't parse [${name}]: ${value}`)
        localStorage.removeItem(name)
      } else {
        console.error(e)
      }
      value = undefined
    }
  }
  return value
}


/**
 * 删除localStorage
 */
export function removeLocalStore(name) {
  if (!name) return;
  try {
    window.localStorage.removeItem(name)
  } catch (e) {
    console.error(e)
  }
}
