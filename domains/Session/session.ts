// Base class for shooting session
import { User } from '../User/user';

export class Session {

    public Started: Date;
    public Stopped: Date;
    public Duration: TimeRanges;
    public Users: Array<User>;
    public Strings: Array<String>;

}

var session = new Session();