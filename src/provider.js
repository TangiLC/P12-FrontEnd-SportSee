import React, {useState} from "react";
export const UserContext = React.createContext();

const UserProvider = props => {
  const [bonjourProps, setBonjourProps] = useState({});
  const [counterProps, setCounterProps] = useState([]);
  const [sessionProps, setSessionProps] = useState([]);
  const [performProps, setPerformProps] = useState([]);
  const [todayScProps, setTodayScProps] = useState(null);
  const [security, setSecurity] = useState(null);

    return (
        <UserContext.Provider
            value={{
              bonjourProps, setBonjourProps ,
              counterProps, setCounterProps ,
              sessionProps, setSessionProps ,
              performProps, setPerformProps ,
              todayScProps, setTodayScProps ,
              security, setSecurity ,
           }}
        >
            {props.children}
        </UserContext.Provider>
    );
};

export default UserProvider;

