import { API_URL } from "../constants/urls";


const useLogout = () => {
  const logout = async () => {
    try {
      const res = await fetch(`${API_URL}/auth/logout`, {
        method: "POST",
        credentials: "include", // Ensure cookies are sent
      });

      if (!res.ok) {
        throw new Error("Logout failed");
      }

      // Redirect to login page
    } catch (error) {
        console.error("Error logging out:", error);
    }
    };

    return { logout };
};

export { useLogout };