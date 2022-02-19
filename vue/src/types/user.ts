export interface User {
    data: Partial<UserData>;
    token: string | null;
}

interface UserData {
    name: string;
    email: string;
    imageUrl: string;
}
