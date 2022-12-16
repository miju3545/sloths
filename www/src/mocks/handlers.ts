import { rest } from 'msw';

let mock_portfolios = Array.from({ length: 20 }).map((_, i) => ({
  id: i + 1,
  category: '개발',
  title: `portfolio${i + 1}`,
  description: `portfolio${i + 1} - description`,
  image: `https://placeimg.com/200/150/${i + 1}`,
  meta: {
    visits: 10,
  },
  clap: false,
  createdAt: new Date(1671193137413 + i * 1000 * 10).toString(),
  updatedAt: new Date(1671193137413 + i * 1000 * 10).toString(),
}));

export const handlers = [
  rest.get('/mock', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json('This is a test.'));
  }),

  rest.get('/portfolios', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ portfolios: mock_portfolios }));
  }),

  rest.get('/portfolios/:id', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(mock_portfolios.find((p) => p.id === +req.params.id)),
    );
  }),

  rest.post('/portfolios/:id/clap', (req, res, ctx) => {
    mock_portfolios.forEach((pfol) =>
      pfol.id === +req.params.id ? (pfol.clap = true) : false,
    );

    return res(
      ctx.status(201),
      ctx.json(mock_portfolios.find((p) => p.id === +req.params.id)),
    );
  }),

  rest.delete('/portfolios/:id/clap', (req, res, ctx) => {
    mock_portfolios = mock_portfolios.filter(
      (pfol) => pfol.id !== +req.params.id,
    );

    return res(ctx.status(304), ctx.json(+req.params.id));
  }),
];
