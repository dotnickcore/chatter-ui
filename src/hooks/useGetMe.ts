import { gql, useQuery } from "@apollo/client";
import { User } from "../models/User";

// Define the query for getting user info
const GET_ME = gql`
  query Me {
    me {
      _id
      email
    }
  }
`;

const useGetMe = () => {
  // Destructure the result from useQuery with appropriate types
  const { data, loading, error } = useQuery<{ me: User }>(GET_ME);

  return { data, loading, error };
};

export { useGetMe };