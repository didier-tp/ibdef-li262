export interface LoginResponse {
    username: string;
    status: boolean;
    message : string;
    token : string;
    roles:string;
}

/*
{
    "username": "admin1",
    "status": true,
    "message": "successful login",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0IjoiYWRtaW4xIiwicm9sZXMiOiJhZG1pbiIsImlhdCI6MTU3Njc1MDYxOSwiZXhwIjoxNTc2NzU3ODE5LCJpc3MiOiJodHRwOi8vd3d3Lm15Y29tcGFueSJ9.IB4do_3qWsrKSxshaVEESHVP-bkIy4uQTB-HfvvfXFI",
    "roles": "admin"
}
*/