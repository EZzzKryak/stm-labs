export interface User {
    cell: string;
    dob: Dob;
    email: string;
    gender: string;
    id: Id;
    location: Location;
    login: Login;
    name: Name;
    nat: string;
    phone: string;
    picture: Picture;
    registered: Dob;
}

interface Dob {
    age: number;
    date: string;
}
interface Id {
    name: string;
    value: string;
}
interface Login {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
}
interface Name {
    first: string;
    last: string;
    title: string;
}
interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}
interface Street {
    name: string;
    number: number;
}
interface Timezone {
    description: string;
    offset: string;
}
interface Coordinates {
    latitude: string;
    longitude: string;
}
interface Location {
    city: string;
    country: string;
    state: string;
    postcode: number;
    street: Street;
    timezone: Timezone;
    coordinates: Coordinates;
}