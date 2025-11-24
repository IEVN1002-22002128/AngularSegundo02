export class Multiplicacion {
  x1:number=0;
  y1:number=0;
  x2:number=0;
  y2:number=0;
  operacion:number=0
  res:number=0;

  calcular(): void {
    let num1 = this.x2 - this.x1;
    let num2 = this.y2 - this.y1;

    this.operacion = (Math.pow(num1, 2) + Math.pow(num2, 2));
    this.res = Math.sqrt(this.operacion);

  }


}
