const fs = require('fs');

const memoData = 'Always go with your passion. Never ask yourself if it`s realistic or not. ';

function memoMaker(directoryName, fileName, data) {
  let combinePath = "./" + directoryName + fileName;
  console.time('메모장 파일 만들기');
  fs.writeFile(`${combinePath}.txt`, data, 'utf-8', (error) => { 
    if (error === true) {
      console.error('this is error');
    }
  });
  console.timeEnd('메모장 파일 만들기');

  // 구분선 ---------------------------------------------
  console.time('JSON 파일 만들기');
  fs.writeFile(`${combinePath}.json`, JSON.stringify(data), 'utf-8', (error) => { 
    if (error === true) {
      console.error('this is error');
    }
  });
  console.timeEnd('JSON 파일 만들기');
}
memoMaker("test", "example-file", memoData);

/*
 * 영역을 명확하게 하기 위해 기명함수 선언방식으로 실행부 작성
 * memoMaker()는 실행만 존재할 뿐, 리턴이 없는(undefined) 전형적인 동작용 함수
 * 실행부는 file system모듈이 지원하는 주요 메서드 중 하나인 writeFile()메서드를 붙여 '쓰기(write)' 작업을 진행하도록 처리하는 과정으로 크게 두 개의 파일을 만들어 내도록 구성 
 * 하나는 일반 메모장 파일인 .txt 확장자/ 다른하나는 .json 확장자
 * console.time() 기능을 활용해서 언제 실행이 되었는지 실측한 데이터를 확인해서 실행의 차이를 분석 >>> 사람이 인지 할 수 없을 정도로 빠른 실행 속도라서 순서나 속도를 분석하여 동기 작업을 하려면 반드시 필요한 방법이다. 
 * 체감의 문제보다도, 하단부의 기능이 상단부 보다 먼저 실행이 되었다는 것은 비동기 처리방식으로 처리 하면 안되는 작업을 처리했을때 위험해진다. 
 * 이럴때 프로미스로 핸들링을 하게 될 경우 비동기 처리는 매우 좋은 성능을 보인다. 
 * 
 * nods.js가 지원하는 표준 모듈의 메서드를 사용하여 시간소요를 파악해 본다.
 * 
 * 
 * 
 */