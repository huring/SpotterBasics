import {SessionString} from './session.sessionstring';



/**
 * Shot
 * 
 * @export
 * @class Shot
 * @extends {SessionString}
 * @classdesc {Simple class to describe a single shot}
 */

export class Shot extends SessionString {
    public ShotID: Number;
    public ShotTime: Date;
    public UserID: Number;
    public ShotMedia: String;
    public shotData: Array<ShotMetadata>;
}

let s = new Shot();

enum MetadataTypes {
    TEMPERATURE,
    WINDSPEED,
    PRESSURE,
    VELOCITY
};

class ShotMetadata {
    public value: {key:MetadataTypes, value:String};
}

let sm = new ShotMetadata();

sm.value = {
    key: MetadataTypes.TEMPERATURE,
    value: '24'
}

s.shotData.push(sm);

console.log(sm);