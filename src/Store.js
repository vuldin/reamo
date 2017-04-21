import { observable, toJS } from 'mobx'
import jsonp from 'jsonp'

class Store {
  @observable timer = 0
  @observable posts = []
  redditPostsUrl = 'https://www.reddit.com/r/all.json'

  constructor() {
    setInterval(() => {
      this.timer += 1
    }, 1000)
    this.loadPosts()
    //setInterval( this.loadPosts, 10 * 1000)
  }

  resetTimer() {
    this.timer = 0
  }

  loadPosts = async () => {
    let posts = await this.load(this.redditPostsUrl)
    this.posts = posts
      .filter(d => !d.data.over_18)
      .sort( (a, b) => a.data.score - b.data.score)
      .reverse()
    console.log(toJS(this.posts))
  }
  load(url) {
    return new Promise( (resolve,reject) => {
      jsonp(url, { param: 'jsonp' }, (err, data) => {
        err ? reject(err) : resolve(data.data.children)
      })
    })
  }
}

export default Store
