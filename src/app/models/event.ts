export class Event {

      id: string;
      auth: string;
      name: string;
      icon: string;
      description: string;
      pdfFile: string;
      eventDate: string;

      constructor (id: string, auth: string, name: string, icon: string,
                   description: string, eventDate: string){

        this.id = id;
        this.auth = auth;
        this.name = name;
        this.icon = icon;
        this.eventDate = eventDate;
        this.description = description;

      }
}
