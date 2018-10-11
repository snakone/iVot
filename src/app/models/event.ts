export class Event {

      entityID: string;
      eventName: string;
      eventTime: string;
      eventDescription: string;

      constructor (entityID: string, name: string, time: string, description: string){

        this.entityID = entityID;
        this.eventName = name;
        this.eventTime = time;
        this.eventDescription = description;

      }
}
