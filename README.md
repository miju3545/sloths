## 포트폴리오 플랫폼(My Side Project 1 - Profolio Platform for the Lazy Developers)

개발 일지든 블로그든 귀찮은 개발자들을 위해 코드 흔적을 손쉽게 남길 수 있는 플랫폼을 만들어 보자!

### Sloth Project Front

#### 📌 설정

- react, typescript
- react-query, redux, redux-thunk
- scss, styled-components, storybook
- jest

#### 📌 플로우

```
- sloth: creator, viewer

- sloth > portfolios > project, articles/blog, github
        > bookmarks
        > thumbsup(like)
        > stamps
        > following/follows
```

#### 📌 폴더 구조

```
- src
  - pages(api)
    - sloths: 유저
    - portfolios: 포트폴리오
    - projects: 프로젝트
    - blogs: 블로그
    - settings: 설정
  - components
  - utils
  - context 👉🏻 session api
    - SessionContext
  - modules 👉🏻 redux로 state/middleware api
    - portfolio
    - github
    - sloth


```

**_type을 자동으로 만들어 주는 typeGenerator 함수를 직접 만들어보면 좋을 것 같다!_**

#### back

- nest
- typeORM
- mysql(db)
- firebase
- heroku, vercel(배포)
