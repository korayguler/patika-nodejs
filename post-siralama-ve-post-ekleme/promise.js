const posts = [{ title: 'Post Başlık 1', detail: 'Post Detay 1' }];

const addPost = (post, _process) => {
  return new Promise((resolve, reject) => {
    if (_process) {
      posts.push(post);
      resolve(post);
    } else {
      reject('Error!!!');
    }
  });
};

const listPosts = () => {
  console.log(posts);
};

addPost({ title: 'Sample Post', detail: 'Sample Detail' }, true)
  .then((response) => {
    console.log(response);
    listPosts();
  })
  .catch((error) => console.log(error));
