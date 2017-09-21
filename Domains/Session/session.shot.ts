import { SessionString } from '../Session/session.sessionstring';

export class Shot extends SessionString {
    public ShotID: Number;
    public ShotTime: Date;
    public UserID: Number;
    public ShotMedia: String;
    public shotMetadata: Array<ShotMetadataItem>;
}

let s = new Shot();

enum Metadata {
    TEMPERATURE,
    WINDSPEED,
    PRESSURE
};

class ShotMetadataItem {
    public Type: Metadata;
    public Payload: {key:Number, value:String};
}

let sm = new ShotMetadataItem();

sm.Type = Metadata.TEMPERATURE;
sm.Payload = {
    key: 1,
    value: 'foo'
};