export class Todo {
   public id: number;
   public texto: string;
   public completada: boolean;

   constructor(texto: string) {
      this.texto = texto;
      this.id = Math.random();
      this.completada = false;
   }
}