const useIsAuth = () => Boolean(sessionStorage.getItem("auth"));

export default useIsAuth;