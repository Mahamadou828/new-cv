/**
 * Function that verify correct are email ?
 * @param {String} email email to verify
 * @returns {Boolean}
 */
export default function VerifyEmail(email) {
  return /.+@.+\.(gmail|com)/.test(email);
}
