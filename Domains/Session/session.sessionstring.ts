import { User } from '../User/user';
import { Session } from '../Session/session';
import { Shot } from '../Session/session.shot';

export class SessionString extends Session {

    public ID: Number;
    public Shooter: User;
    public Shots: Array<Shot>;

}