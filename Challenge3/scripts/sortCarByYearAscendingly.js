function sortCarByYearAscendingly(cars) {
  // Clone array untuk menghindari side-effect
  const result = [...cars];

  // algoritma Bubble Sort
  const n = result.length;
  let swapped;

  // Tambahkan variabel untuk menandai apakah array sudah terurut
  let isSorted = false;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (result[i].year > result[i + 1].year) {
        // Tukar posisi
        const temp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = temp;
        swapped = true;
      }
    }

    // tidak ada pertukaran posisi, maka array urut
    if (!swapped) {
      isSorted = true;
    }
  } while (!isSorted);

  // Mengembalikan array hasil sorting secara ascending
  return result;
}