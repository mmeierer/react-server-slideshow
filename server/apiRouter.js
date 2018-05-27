import express from 'express';
// initialize the application and create the routes
const router = express.Router();
const knex = require('../src/DB/knex');

// const comments = [
//   {
//     author: 'Test1',
//     text: 'Test comment',
//     date: Date.now(),
//     tag: 'general feedback',
//     slide: 1,
//     chapter: 0
//   },
//   {
//     author: 'Test2',
//     text: 'Test comment',
//     date: Date.now(),
//     tag: 'mistake',
//     slide: 2,
//     chapter: 0
//   },
//   {
//     author: 'Test3',
//     text: 'Test comment',
//     date: Date.now(),
//     tag: 'improvement',
//     slide: 3,
//     chapter: 0
//   }
// ]

router.get('/comments/:chapter', async (req, res) => {
  // DB connection
  const comments = await knex('comments')
    .select('*')
    .where('chapter', req.params.chapter)

  res.status(200).send(comments);

});

router.post('/comments', async (req, res) => {
  // DB connection

  await knex('comments')
    .insert({
      author  : req.body.author,
      text    : req.body.text,
      tag     : req.body.tag,
      chapter : req.body.chapter,
      slide   : req.body.slide
    })
  const comments = await knex('comments')
    .select('*')
    .where('chapter', req.body.chapter)
  res.status(201).send(comments);

});

module.exports = router;
