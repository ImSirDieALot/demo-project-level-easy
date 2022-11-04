import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";

function GetUsers() {
  // useQuery is used to make the GQL Call
  const { error, loading, data } = useQuery(LOAD_USERS);

  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <div>
      {" "}
      {users.map((val) => {
        return (
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <h4 style={{ padding: '10px' }}> {val.firstName} </h4>
            <h4 style={{ padding: '10px' }}> {val.lastName} </h4>
            <h4 style={{ padding: '10px' }}> {val.email}</h4>
            <h4 style={{ padding: '10px' }}> {val.password}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default GetUsers;
