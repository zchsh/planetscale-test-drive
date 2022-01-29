/**
 * Alias any so we can assess and track usage of any
 */
type $TSFixMe = any;

/**
 * Namespace for NodeJS,
 * so that process.env can be documented
 */
namespace NodeJS {
  interface ProcessEnv {
    /** A connection URL for the PlanetScale MySQL database. This URL includes the user, password, host, and name of the database to connect to. */
    DB_URL: string;
  }
}
