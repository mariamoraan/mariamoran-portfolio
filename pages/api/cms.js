import * as contentful from 'contentful';

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = contentful.createClient({
    space: space,
    environment: 'master', // defaults to 'master' if not set
    accessToken: accessToken,
  });

export const fetchGraphQL = async(query, collection, preview = false) => {
    return fetch(
        `https://graphql.contentful.com/content/v1/spaces/${space}/`,
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${
            preview
                ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
                : accessToken
            }`,
        },
        body: JSON.stringify({ query }),
        }
        
    ).then((response) => response.json())
    .then(({ data, errors }) => {
        if (errors) {
          console.error(errors);
        }
        return data;

      });
}