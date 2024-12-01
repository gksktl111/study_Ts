/**
 * 서로소 유니온 타입
 * 교집합이 없는 타입(서로소 집합)들로만 만든 유니온 타입을 말함
 */

type Admin = {
  // * 리터럴 타입으로 타입을 지정해서 교집합이 생길수 없게됨(never)
  // * 이런 tag 프로퍼티의 타입을 리터럴 타입을 만들어서 서로 다다르게 정의를 해주면 서로소 집합의 관계를 갖게됨
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

// * 그렇게 만들어진 서로소 관계의 타입들을 묶어서 유니온 타입으로 만들었기때문에
// * User는 서로소 유니온 타입이 됨
type User = Admin | Member | Guest;

// * Admin -> {name}님 현재까지 {kickCount}명 강퇴했습니다.
// * Member -> {name}님 현재까지 {point}점 획득하였습니다.
// * Guest -> {name}님 현재까지 {visitCount}번 방문하였습니다.

function login(user: User) {
  switch (user.tag) {
    case 'ADMIN': {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case 'MEMBER': {
      console.log(`${user.name}님 현재까지 ${user.point}점 획득하였습니다.`);
      break;
    }
    case 'GUEST': {
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하였습니다.`
      );
      break;
    }
  }
}

/**
 *  복습겸 한가지 더 사례
 */

// ** 비동기 작업의 결과를 처리하는 객체

type LoadingTask = {
  state: 'LOADING';
};

type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

// *  로딩 중 -> 콘솔에 로딩중 출력
// *  실패 -> 콘솔에 에러 메세지 출력
// *  성공 -> 콘솔에 성공 데이터 출력

type AsyncTask = LoadingTask | FailedTask | SuccessTask;

function processResult(task: AsyncTask) {
  switch (task.state) {
    case 'LOADING': {
      console.log('Loading....');
      break;
    }
    case 'FAILED': {
      console.log(`${task.error.message} 에러 발생`);
      break;
    }
    case 'SUCCESS': {
      console.log(`${task.response.data} 성공`);
      break;
    }
  }
}

const loading: AsyncTask = {
  state: 'LOADING',
};

const failed: AsyncTask = {
  state: 'FAILED',
  error: {
    message: 'ERROR MESSAGE',
  },
};

const success: AsyncTask = {
  state: 'SUCCESS',
  response: {
    data: 'SUCCESS DATA',
  },
};
