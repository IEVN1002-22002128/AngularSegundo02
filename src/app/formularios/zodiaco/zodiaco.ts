export class Zodiaco{
  nombre:string='';
  paterno:string='';
  materno:string='';
  sexo:string='';
  dia:number=0;
  mes:number=0;
  año:number=0;
  edad:number=0;
  chino:string='';
  imagen:string=''

    calcularEdad() {
    let hoy = new Date();
    this.edad = hoy.getFullYear() - this.año;

    if (this.mes > hoy.getMonth() + 1 || (this.mes === hoy.getMonth() + 1 && this.dia > hoy.getDate()))
      {
      this.edad--;
    }
  }

  calcularChino() {
    let signos = [
      { nombre: "Rata", imagen: "https://th.bing.com/th/id/R.02ea900e657f33ee09fbe820ad815e12?rik=EFacA7NtKIee7Q&pid=ImgRaw&r=0" },
      { nombre: "Buey", imagen: "https://th.bing.com/th/id/R.d101313a9e39c03c5871428e1c16fc32?rik=zRwtWgwS3MAtjg&pid=ImgRaw&r=0" },
      { nombre: "Tigre", imagen: "https://tse2.mm.bing.net/th/id/OIP.Cpr15daemJmblg1sn6TlhwHaHa?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { nombre: "Conejo", imagen: "https://tse4.mm.bing.net/th/id/OIP.HFNkYBxGwImwehBj11Nf3QHaEo?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { nombre: "Dragón", imagen: "https://highonbooks.co/wp-content/uploads/2023/04/Smaug-The-Dragon-Antagonist-The-Hobbit-scaled.webp" },
      { nombre: "Serpiente", imagen: "https://tse4.mm.bing.net/th/id/OIP.ELuuyBX-KUguNmIB9iuPDwHaEB?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { nombre: "Caballo", imagen: "https://www.soilsolutions.com/wp-content/uploads/2010/12/equestrian.jpg" },
      { nombre: "Cabra", imagen: "https://tse4.mm.bing.net/th/id/OIP.lGHG-_5DQy10FYzY69I_mwHaE8?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3" },
      { nombre: "Mono", imagen: "https://cdn0.bioenciclopedia.com/es/posts/3/5/0/mono_53_orig.jpg" },
      { nombre: "Gallo", imagen: "https://assets.tvnotas.com.mx/dims4/default/463e9f7/2147483647/strip/true/crop/1200x740+0+0/resize/2335x1440!/quality/90/?url=https%3A%2F%2Fk3-prod-tvnotas.s3.us-west-2.amazonaws.com%2Fbrightspot%2F5e%2F79%2F1835ad3a46528350149de0da5bd4%2Fdiseno-sin-titulo-4.jpg" },
      { nombre: "Perro", imagen: "https://th.bing.com/th/id/R.8ab0c7f5436b1980dfedb5114105c123?rik=DiDqBv5edQPytA&riu=http%3a%2f%2fimg3.wikia.nocookie.net%2f__cb20140527125026%2fscoobydoo%2fimages%2f5%2f53%2fScooby-Doo.png&ehk=ek9Jr8yB2XNuuG5PzEsCum4boGVPHWyzxuQ2HQKfAtw%3d&risl=1&pid=ImgRaw&r=0" },
      { nombre: "Cerdo", imagen: "https://wallpapercave.com/wp/wp7218455.jpg" }
    ];

    let nuevoAño = (this.año - 1900) % 12;

    this.chino = signos[nuevoAño].nombre;
    this.imagen = signos[nuevoAño].imagen;

  }

}
