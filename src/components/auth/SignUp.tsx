import { Link } from "react-router-dom";
import { Link as MUILink } from "@mui/material";
import Auth from "./Auth";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useState } from "react";
import { extractErrorMessage } from "../../utils/errors";
import { useLogin } from "../../hooks/useLogin";

const SignUp = () => {
    const [createUser] = useCreateUser();
    const [error, setError] = useState("");
    const { login } = useLogin();

    return (
        <>
            <Auth 
                submitLabel="Sign Up"
                error={error}
                onSubmit={async ({ email, password }) => {
                
                try {
                    await createUser({
                        variables: {
                            createUserInput: {
                                email,
                                password
                            }
                        }
                    });
                    
                    await login({ email, password })

                    setError("");
                } catch (err) {
                    // console.log(err)
                    const errorMessage = extractErrorMessage(err);

                    if (errorMessage) {
                        setError(errorMessage);
                        return;
                    }
                    setError("Unknown error occured")

                    throw err;
                }
                
            }}>
                <Link to={'/login'} style={{ alignSelf: 'center' }}>
                    <MUILink>Log In</MUILink>
                </Link>
            </Auth>
        </>
    )
};

export default SignUp;