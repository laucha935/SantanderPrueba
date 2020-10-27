

export class Evento {

        id: number;
        titulo: string;
        fechaEvento: string;
        desc: string;
        check: boolean = false;
        asist:boolean = false;
        asistentes: string[];

        constructor( titulo:string, fechaEvento: string, desc: string) {

            this.titulo = titulo;
            this.fechaEvento = fechaEvento;
            this.desc = desc;
            this.id = new Date().getTime();
            this.check = false;
            this.asistentes = [];
            
            
        }

        

          
}