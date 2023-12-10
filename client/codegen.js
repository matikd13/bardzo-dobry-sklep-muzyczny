const config = {
  schema: [
    {
      [process.env.VITE_GQL_URI]: {
        headers: {
          test: 'test',
        },
      },
    },
  ],

  documents: ['src/**/*.{ts,tsx}'],
  generates: {
    './src/generated/graphql.tsx': {
      schema: 'graphql/client-schema.graphql',
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        avoidOptionals: {
          field: true,
        },
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        defaultScalarType: 'string',
        scalars: { numeric: 'number', jsonb: 'string' },
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
