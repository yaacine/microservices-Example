export const config = {
  "dev": {
    "username": process.env.Postgres_username,
    "password": process.env.Postgres_password,
    "database": process.env.Postgres_database,
    "host": process.env.Postgres_host,
    "dialect": process.env.Postgres_dialect,
    "aws_region": process.env.Postgres_aws_region,
    "aws_profile": process.env.Postgres_aws_profile,
    "aws_media_bucket": process.env.Postgres_aws_media_bucket
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt":{
    "secret" :"helloworld"
  }
}