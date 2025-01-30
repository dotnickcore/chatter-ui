import { Stack, TextField, Button} from "@mui/material"
import { useState } from "react";

interface AuthProps {
    submitLabel: string;
    onSubmit: (credentials: { email: string; password: string }) => Promise<void>;
    children: React.ReactNode;
}

const Auth = ({ submitLabel, onSubmit, children }: AuthProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

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
                onChange={(event) => setEmail(event.target.value)} //  setEmail(event.target.value)}	Updates state 'email' whenever the user types.
            />
            <TextField 
                type="password" 
                label="Password" 
                variant="outlined" 
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            />
            <Button variant="contained" onClick={() => onSubmit({ email, password })}>{submitLabel}</Button>
            {children}
        </Stack>
    );
}

export default Auth;