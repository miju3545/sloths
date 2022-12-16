## 포트폴리오 플랫폼(My Side Project 1 - Profolio Platform for the Lazy Developers)

개발 일지든 블로그든 귀찮은 개발자들을 위해 코드 흔적을 손쉽게 남길 수 있는 플랫폼을 만들어 보자!

### Sloth Project Front

#### 📌 설정

- react, typescript
- react-query, redux
- scss, styled-components, storybook
- jest

#### 📌 폴더 구조

```
- src
  - pages(api)
    - sloths: 유저
    - foliages: 포트폴리오
    - settings: 설정
    - chats: 채팅
  - components
  - utils
  - redux
    - actions
    - contants
      - ActionTypes.ts
    - reducers

```

**_type을 자동으로 만들어 주는 typeGenerator 함수를 직접 만들어보면 좋을 것 같다!_**

#### back

- nest
- typeORM
- mysql
