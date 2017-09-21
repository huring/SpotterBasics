// Base user class

export class User {
    public ID: Number;
    public userName: String;
    public avatar: URL;
    public description: String;
    public firstName: String;
    public lastName: String;
    public socialMediaAccounts: Array<{}>;
    public weapons: Array<Weapon>;
}

var user = new User();
