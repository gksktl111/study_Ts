/**
 * Pick<T, K>
 * -> 뽑다, 고르다
 * -> 특정 프로퍼티만 골라서 타입을 만들어주는 타입
 */

interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

// K를 제한해 T로 들어오는 객체타입의 키값들을 추출한 유니온 타입의 서브타입, 프로퍼티 키만 들어올수 있게함
type Pick<T, K extends keyof T> = {
  // 즉 현재 Post 객체 타입 기준
  // K extends 'title' | 'content' | 'tags' | 'thumbnailURL' 가 keyof T 가 됨 여기서 타입 변수에 K에 할당된 값을 대입해 보면
  // 'title' | 'content' extends 'title' | 'content' | 'tags' | 'thumbnailURL' 이 되고 이는 참이 됨

  [key in K]: T[key];
};

// 'title' | 'content' 프로퍼티만 불러와서 사용
const lagacyPost: Pick<Post, 'title' | 'content'> = {
  title: '한입 타스 후기',
  content: '초안...',
};

/**
 * Omit<T, K>
 * -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티를 제외하고 타입을 만들어주는 타입
 */

// Pick할 프로퍼티가 많아질 경우 반대로 Omit을 사용하면 편함

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T = Post, K = 'title'
// Pick<Post, Exclude<keyof Post, 'title'>>
// Pick<Post, Exclude<'title' | 'content' | 'tags' | 'thumbnailURL', 'title'>>

// 결과
// Pick<Post, 'content' | 'tags' | 'thumbnailURL'>

const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [],
};

/**
 * Record<K, V>
 * -> 기록하다, 만들다
 * -> 객체의 프로퍼티 키와 값의 타입을 지정하여 객체 타입을 만들어주는 타입
 * 실무에서 매우 많이 사용함 익숙해질것
 */

// K 는 어떤 객체의 key를 추출해놓은 유니온 타입이라는 뜻
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
  watch: {
    url: string;
  };
};

// 위와 똑같은 객체 타입으로 만들어짐
// 첫번째 타입 변수로 객체 타입의 키값들을 유니온 타입으로 정의하고
// 두번째 타입 변수로 객체 타입의 키값에 할당될 값의 타입을 정의함
// 유지보수가 매우 쉬워짐 (수정, 추가, 삭제)
type Thumbnail = Record<
  'large' | 'medium' | 'small' | 'watch',
  { url: string; width: number; height: number }
>;
