export default {
  host: process.env.MAIL_HOST,
  port: process.env.REDIS_PORT,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  },
  default: {
    from: 'Equipe GoBarber <no-reply@gobarber.com>'
  }
};
