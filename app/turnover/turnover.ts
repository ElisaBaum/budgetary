export const typeDefs = `
  input TurnoverInput {
    date: String!
    amount: Float!
    description: String
    category: String
  }

  type Turnover {
    id: Int!
    date: String!
    amount: Float!
    description: String
    category: String
  }
  
  extend type Query {
    turnovers: [Turnover]
  }
  
  extend type Mutation {
    addTurnover(data: TurnoverInput!): Turnover!
  }
`;

let id = 1;

let turnoverData = [
  {id: id++, date: new Date(), amount: -102.8},
  {id: id++, date: new Date(), amount: 1000.8},
];

// todo possible to combine all resolvers?

export const queries = {
  turnovers: () => turnoverData
};

export const mutations = {
  addTurnover: (root: any, {data}: any) => {
    const turnover = {
      id: id++,
      date: data.date,
      amount: data.amount,
      description: data.description,
      type: data.type,
      category: data.category
    };
    turnoverData.push(turnover);
    return turnover;
  }
};
