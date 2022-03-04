module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c668f6f17fa309b68f5f6f148b2a5365'),
  },
});
