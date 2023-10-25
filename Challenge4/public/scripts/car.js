class Car {
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {

    const date = new Date(this.availableAt);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();
    const time = date.toLocaleTimeString();

    return `
      <div class="card" style="width: 285px; height: 583px; margin: auto;">
        <img src="${this.image}" class="card-img-top img-fluid" alt="car" style="max-height: 200px;">
        <div class="card-body">
          <h5 class="card-title">${this.manufacture} ${this.model}</h5>
          <p class="card-text"><b>Rp ${this.rentPerDay} / hari</b></p>
          <p class="card-text">${this.description}</p>
          <p class="card-text"><i class="fa fa-user-circle" style="opacity: 65%;"></i>&nbsp;&nbsp;${this.capacity} Orang</p>
          <p class="card-text"><i class="fa fa-gear" style="opacity: 65%;"></i>&nbsp;&nbsp;${this.transmission}</p>
          <p class="card-text"><i class="fa fa-calendar-o" style="opacity: 65%;"></i>&nbsp;&nbsp;${day}/${month}/${year}</p>
          <p class="card-text"><i class="fa fa-clock-o" style="opacity: 65%;"></i>&nbsp;&nbsp;${time}</p>
          <button class="btn btn-banner btn-success" style="width: 250px; height:35px; position: absolute; bottom: 20px;">Pilih Mobil</button>
        </div>
      </div>
    `;
  }

}