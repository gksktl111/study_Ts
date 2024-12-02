//* 인덱스드 엑세스 타입

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

//* 타입에서 내가 원하는 프로퍼티의 타입만 추출가능 (인덱스드 엑세스 타입)

//* 만약 내가 객체 타입의 내부 타입을 가져오고 싶다면 아래처럼 내부 타입도 엑세스 할수있다
//* Post['author']["id"] (number 타입을 엑세스함)
function printAuthorInfo(author: Post['author']) {
  console.log(`${author.name} - ${author.id}`);
}

const post: Post = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '박민규',
  },
};

printAuthorInfo(post.author);

type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

const postList: PostList[number] = {
  title: '게시글 제목',
  content: '게시글 본문',
  author: {
    id: 1,
    name: '박민규',
  },
};

function printAuthorInfo2(author: PostList[number]['author']) {
  console.log(`${author.name} - ${author.id}`);
}

//* 튜플로 사용

type Tup = [number, string, boolean];

type Tup0 = Tup[0]; // *number
type Tup1 = Tup[1]; // *string
type Tup2 = Tup[2]; // *boolean
//* type Tup3 = Tup[3]; // *에러
