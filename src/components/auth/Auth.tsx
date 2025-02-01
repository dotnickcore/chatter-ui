import { Stack, TextField, Button} from "@mui/material"
import { useEffect, useState } from "react";
import { useGetMe } from "../../hooks/useGetMe";
import { useNavigate } from "react-router-dom";

interface AuthProps {
    submitLabel: string;
    onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
    children: React.ReactNode;
    error?: string;
}

const Auth = ({ submitLabel, onSubmit, children, error }: AuthProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { data } = useGetMe();
    const navigate = useNavigate();

    useEffect(() => {
        if (data) {
            navigate('/')
        }
    }, [data, navigate])

    return (
        <Stack 
        spacing={3} 
        sx={{ 
            height: "100vh", 
            maxWidth: {
                xs: "70%",
                md: "30%",
            }, 
            margin: "0 auto", 
            justifyContent: 'center' 
        }}
        >
            <TextField 
                type="email" // Input type (email ensures proper formatting)
                label="Email"  // Adds a floating label above the field
                variant="outlined" // Uses the outlined style
                value={email} // Controlled input: The value is set from state 
                error={!!error}
                helperText={error}
                onChange={(event) => setEmail(event.target.value)} //  setEmail(event.target.value)}	Updates state 'email' whenever the user types.
            />
            <TextField 
                type="password" 
                label="Password" 
                variant="outlined" 
                value={password}
                error={!!error}
                helperText={error}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant="contained" onClick={() => onSubmit({ email, password })}>{submitLabel}</Button>
            {children}
        </Stack>
    );
}

export default Auth;