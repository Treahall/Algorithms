
const netlifyAuth = {
    isAuthenticated: false,
    user: null,
    netlifyIdentity: window.netlifyIdentity,
    initialize(callback) {
      
        this.netlifyIdentity.on('init', (user) => {
        callback(user)
      })
      this.netlifyIdentity.init()
    },
    authenticate(callback) {
      this.isAuthenticated = true
      this.netlifyIdentity.open()
      this.netlifyIdentity.on('login', (user) => {
        this.user = user
        callback(user)
        this.netlifyIdentity.close()
      })
    },
    signout(callback) {
      this.isAuthenticated = false
      this.netlifyIdentity.logout()
      this.netlifyIdentity.on('logout', () => {
        this.user = null
        callback()
      })
    },
  }
  
  export default netlifyAuth