/* eslint-disable no-restricted-syntax */
// eslint-disable-next-line no-unused-vars
const listWithOneBlog = [
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5
  }
];

const emptyList = [];

const biggerList = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 7
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 5
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 12
  },
  {
    _id: '5a422b891b54a676234d17fa',
    title: 'First class tests',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll',
    likes: 10
  },
  {
    _id: '5a422ba71b54a676234d17fb',
    title: 'TDD harms architecture',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html',
    likes: 0
  },
  {
    _id: '5a422bc61b54a676234d17fc',
    title: 'Type wars',
    author: 'Robert C. Martin',
    url: 'http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html',
    likes: 2
  }
];

const equalLikes = [
  {
    _id: '5a422a851b54a676234d17f7',
    title: 'React patterns',
    author: 'Michael Chan',
    url: 'https://reactpatterns.com/',
    likes: 14
  },
  {
    _id: '5a422aa71b54a676234d17f8',
    title: 'Go To Statement Considered Harmful',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
    likes: 14
  },
  {
    _id: '5a422b3a1b54a676234d17f9',
    title: 'Canonical string reduction',
    author: 'Edsger W. Dijkstra',
    url: 'http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html',
    likes: 4
  }
];

const dummy = (blogs) => 1;

const totalLikes = (blogs) => {
  let likes = 0;
  for (const blog of blogs) {
    likes += blog.likes;
  }

  return likes;
};

const favoriteBlog = (blogs) => {
  let currentMax = -9999;
  let blogMax = {};
  for (const blog of blogs) {
    if (blog.likes > currentMax) {
      blogMax = {
        title: blog.title,
        author: blog.author,
        likes: blog.likes
      };
      currentMax = blog.likes;
    }
  }

  return blogMax;
};

const findLikes = (blogs, title) => {
  for (const blog of blogs) {
    if (blog.title === title) {
      return blog.likes;
    }
  }
};

const mostBlogs = (blogs) => {
  let authors = {};
  let maxAuthor = '';
  let currentMax = -999;

  blogs.forEach((blog) => {
    let currentAuthor = blog.author;

    if (Object.keys(authors).includes(currentAuthor)) {
      authors[`${currentAuthor}`] += 1;
    } else {
      authors[`${currentAuthor}`] = 1;
    }

    if (authors[`${currentAuthor}`] > currentMax) {
      maxAuthor = currentAuthor;
      currentMax = authors[`${currentAuthor}`];
    }
  });

  return {
    author: maxAuthor,
    blogs: currentMax
  };
};

const mostLikes = (blogs) => {
  let authors = {};
  let maxAuthor = '';
  let currentMax = -999;

  blogs.forEach((blog) => {
    let currentAuthor = blog.author;

    if (Object.keys(authors).includes(currentAuthor)) {
      authors[`${currentAuthor}`] += blog.likes;
    } else {
      authors[`${currentAuthor}`] = blog.likes;
    }

    if (authors[`${currentAuthor}`] > currentMax) {
      maxAuthor = currentAuthor;
      currentMax = authors[`${currentAuthor}`];
    }
  });

  return {
    author: maxAuthor,
    likes: currentMax
  };
};

module.exports = {
  listWithOneBlog,
  emptyList,
  biggerList,
  equalLikes,
  dummy,
  totalLikes,
  favoriteBlog,
  findLikes,
  mostBlogs,
  mostLikes
};
