class App {
  constructor() {
    this.clearButton = document.getElementById("clear-btn");
    this.loadButton = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
    this.onSubmitFormFilter = document.getElementById('form_filter_submit');
    this.onSelectedDriverType = document.getElementById('tipe_driver');
    this.onSelectedBookingDate = document.getElementById('tanggal_booking');
    this.onSelectedTimeBooking = document.getElementById('waktu_booking');
    this.onSelectedTotalPassenger = document.getElementById('total_penumpang');
  }

  async init() {
    await this.load();

    // Register click listener
    // this.clearButton.onclick = this.clear;
    // this.loadButton.onclick = this.run;
    this.onSubmitFormFilter.addEventListener("submit", this.onFilteredCar, true);
  }

  run = () => {
    console.log("BEFORE :", Car.list.length);
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.classList.add("col");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  onFilteredCar = async(event) => {
    this.clear();
    const filteredCar = await Binar.listCars(data =>  {
      // jumlah penumpang
      var passangerCapacity = this.onSelectedTotalPassenger.value;
      // tanggal + waktu 
      var dateTime = new Date(this.onSelectedBookingDate.value + "T" + this.onSelectedTimeBooking.value);

      return (data.availableAt >= dateTime) && (data.capacity >= passangerCapacity);
    });
    Car.init(filteredCar);
    this.run();

    event.preventDefault();
  }

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}