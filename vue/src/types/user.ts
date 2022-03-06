export interface User {
    data: UserData;
    token: string;
}

export interface UserData {
    name: string;
    email: string;
    imageUrl: string;
}
