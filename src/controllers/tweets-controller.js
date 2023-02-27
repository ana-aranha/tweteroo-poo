import { usuarios } from "../services/tweetero.js";
import { tweets, Tweet } from "../services/tweetero.js";

async function postTweet(req,res){
  const { tweet, username } = req.body;

  if (!username || !tweet) {
    return res.status(400).send('Todos os campos são obrigatórios!');
  }

  //todo: find userAvatar
  const { avatar }  = usuarios.find(user => user.username === username);

  console.log(avatar)

  const newTweet = new Tweet(username, tweet, avatar)
  tweets.push(newTweet);

  res.status(201).send('OK, seu tweet foi criado');
}

async function getTweets(req,res){
  const { page } = req.query;

  if (page && page < 1) {
    res.status(400).send('Informe uma página válida!');
    return;
  }
  const limite = 10;
  const start = (page - 1) * limite;
  const end = page * limite;

  if (tweets.length <= 10) {
    return res.send(reverseTweets());
  }

  res.status(200).send([...tweets].reverse().slice(start, end));
}

async function getUserTweets(req,res){
  const { username } = req.params;

  const tweetsDoUsuario = tweets.filter(t => t.username === username);

  res.status(200).send(tweetsDoUsuario);
}

function reverseTweets() {
  return [...tweets].reverse();
}

export {postTweet, getTweets, getUserTweets}