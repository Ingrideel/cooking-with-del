import { ExtractJwt, Strategy } from "passport-jwt";

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};
export const passportStrategy = new Strategy(opts, (jwt_payload, done) => {
  if (jwt_payload) {
    return done(null, jwt_payload);
  }

  return done(null, false);
});
