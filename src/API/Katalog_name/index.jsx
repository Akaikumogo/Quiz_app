import api from "../axios";

const useUserAPI = () => {
  const signIn = async (data) => api.post("/user/signin", data);
  return {
    signIn,
  };
};

export default useUserAPI;
// ============================================
// const {signIn} = useUserApi()              |
//signIn(body)                                |
// .then((res) => {                           |
//     console.log(res.data);                 |
//   })                                       |
//   .catch((err) => {                        |
//    console.log(err)                        |
//   });                                      |
// ============================================
