export const constants = {
  SUPPORTED_DATABASE: {
    IN_MEMORY: 'in-memory',
    MONGO: 'mongo',
  },
}

export default {
  database: {
    driver: process.env.NODE_ENV === 'test' ? constants.SUPPORTED_DATABASE.IN_MEMORY : null,
    dialect: process.env.DATABASE_DIALECT || constants.SUPPORTED_DATABASE.MONGO,
    url: process.env.DATABASE_URI || '',
  },
  server: {
    port: process.env.PORT || '3200',
  },
}
