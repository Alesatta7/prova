module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '17d2a217169e7b45f936c8436706c211'),
  },
});
