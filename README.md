## 포트폴리오 플랫폼( Profolio Platform for the Lazy Developers)

게으른 개발자들을 위한 프로폴리오 플랫폼 프로젝트

### Sloth Project Front

#### 📌 설정

- react, typescript
- react-query, redux, redux-thunk
- scss, emotion, storybook
- jest

#### 📌 플로

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
