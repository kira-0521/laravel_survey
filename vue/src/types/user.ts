export interface User {
    data: Partial<UserData>;
    token: string;
}

interface UserData {
    name: string;
    email: string;
    imageUrl: string;
}
