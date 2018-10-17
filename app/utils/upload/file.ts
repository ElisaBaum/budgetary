export const typeDefs = `
  scalar Upload
  
  type File {
    filename: String!
    mimetype: String!
    encoding: String!
  }
  
  extend type Mutation {
    singleUpload(file: Upload!): File!
  }
`;

export const mutations = {
  async singleUpload(parent: any, { file }: any) {
    const { stream, filename, mimetype, encoding } = await file;

    // 1. Validate file metadata.

    // 2. Stream file contents into local filesystem or cloud storage:
    // https://nodejs.org/api/stream.html

    // 3. Record the file upload in your DB.
    // const id = await recordFile( … )

    return { stream, filename, mimetype, encoding };
  }
};