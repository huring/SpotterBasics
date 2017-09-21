import { SessionString } from '../Session/session.sessionstring';

export class Shot extends SessionString {
    public ShotID: Number;
    public ShotTime: Date;
    public UserID: Number;
    public ShotMedia: String;
}

let s = new Shot();