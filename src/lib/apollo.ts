import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qn255f46br01xl7q1vamo4/master',
  cache: new InMemoryCache()
})