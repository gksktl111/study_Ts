//* 프로미스

const promise = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    //* resolve(10);
    reject("실패!");
  }, 3000);
});

//* promise.then((response) => {
//*   console.log(response * 10);
//* });

//* promise.catch((error) => {
//*   if (typeof error === "string") console.log(error);
//* });

//* 프로미스를 반환하는 함수의 타입을 정의

interface Post {
  id: number;
  title: string;
  content: string;
}

//* 함수의 반환값 타입을 명시
//* 선언 부분에 지정해 주는게 가독성이 좋음
function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: "게시글 제목", content: "게시글 내용" });
    }, 3000);
  });
}

const postRequest = fetchPost();

postRequest.then((post) => {
  post.id;
});
