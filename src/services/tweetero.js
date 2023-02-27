const usuarios = [];
const tweets = [];

class User {
  constructor(username, avatar) {
    this.username = username;
    this.avatar = avatar;
  }
}

class Tweet {
  constructor(username, tweet, avatar) {
    this.username = username;
    this.tweet = tweet;
    this.avatar = avatar;
  }
}

export { usuarios, tweets, User, Tweet };