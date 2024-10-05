class Heap {
  constructor() {
    this.data = [];
  }
  getLeftChildIndex(i) {
    return 2 * i + 1;
  }
  getRightChildIndex(i) {
    return 2 * i + 2;
  }
  getParentIndex(i) {
    return Math.floor(i - 1 / 2);
  }

  swap(i1, i2) {
    let temp = this.data[i1];
    this.data[i1] = this.data[i2];
    this.data[i2] = temp;
  }

  insert(key) {
    this.data[this.data.length] = key;
    heapifyUp();
  }

  heapifyUp() {
    let currentIndex = this.data.length - 1;

    while (
      this.data[currentIndex] > this.data[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  delete() {
    const maxvalue = this.data[0];
    this.data[0] = this.data[this.data.length - 1];
    this.data.length--;
    this.heapifyDown();
    return maxvalue;
  }

  heapifyDown() {
    let currentIndex = 0;

    while (this.data[this.getLeftChildIndex(currentIndex)] !== undefined) {
      let biggestIndex = this.data[this.getLeftChildIndex(currentIndex)];
      if (
        this.data[this.getRightChildIndex(currentIndex)] !== undefined &&
        this.data[this.getRightChildIndex(currentIndex)] >
          this.data[this.getLeftChildIndex(currentIndex)]
      ) {
        let biggestIndex = this.data[this.getRightChildIndex(currentIndex)];
      }
      if (this.data[currentIndex] < this.data[biggestIndex]) {
        this.swap(currentIndex, biggestIndex);
        currentIndex = biggestIndex;
      }
    }
  }
}
