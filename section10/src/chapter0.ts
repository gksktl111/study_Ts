// 맵드 타입 기반의 유틸리티 타입

// 기본 순회 구문
// [P in K]: T

/**
 * Partial<T>
 * -> 부분적인, 일부분의
 * -> 특정 객체 타입의 모든 프로퍼티를 선택적 프로퍼티 ( ? 달린거) 로 바꿔주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// 맵드 타입으로 만듬
type Partial<T> = {
  // key 쪽에 ? 를 추가
  [key in keyof T]?: T[key];
};

const draft: Partial<Post> = {
  title: '제목 나중에 짓자',
  content: '초안...',
};

/**
 * Required<T>
 * -> 필수의, 필요한
 * -> 특정 객체 타입의 모든 프로퍼티를 필수 프로퍼티로 바꿔주는 타입
 */

type Required<T> = {
  // key 쪽에 ? 를 제거
  [key in keyof T]-?: T[key];
};

const withThumbnailPost: Required<Post> = {
  title: '한입 타스 후기',
  tags: ['ts'],
  content: '',
  // 원래는 선택적 프로퍼티지만 Required 타입으로 인해 필수 프로퍼티로 변경됨
  thumbnailURL: 'https://...',
};

/**
 * Readonly<T>
 * -> 읽기 전용의, 변경이 불가능한
 * -> 특정 객체 타입의 모든 프로퍼티를 읽기 전용 프로퍼티로 바꿔주는 타입
 */

type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};

const readonlyPost: Readonly<Post> = {
  title: '보호된 게시글',
  tags: ['readonly'],
  content: '',
};

// readonlyPost.title = '여기는 변경 불가능';
