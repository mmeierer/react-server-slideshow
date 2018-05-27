
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {slide: 1, chapter: 0, author: 'Test User 1', text: 'test comment 1', tag: 'general feedback'},
        {slide: 1, chapter: 0, author: 'Test User 1', text: 'test comment 1', tag: 'general feedback'},
        {slide: 1, chapter: 0, author: 'Test User 1', text: 'test comment 1', tag: 'general feedback'},
        {slide: 2, chapter: 0, author: 'Test User 1', text: 'test comment 1', tag: 'general feedback'},
        {slide: 2, chapter: 0, author: 'Test User 1', text: 'test comment 1', tag: 'general feedback'},
        {slide: 3, chapter: 0, author: 'Test User 1', text: 'test comment 1', tag: 'general feedback'}
      ]);
    });
};
