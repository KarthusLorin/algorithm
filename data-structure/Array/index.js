class MyArray {

  // 传入数组的容量capacity构造Array
  constructor (capacity = 10) {
    this.data = {}
    for (let i = 0; i < capacity; i++) {
      this.data[i] = undefined
    }
    // size是有效长度
    this.size = 0
  }

  // 获取数组中的元素个数
  getSize () {
    return this.size
  }

  // 获取数组的容量
  getCapacity () {
    return this.data.length
  }

  // 返回数组是否为空
  isEmpty () {
    return this.size === 0
  }

  // 向所有元素后添加一个新元素
  addLast (e) {
    this.add(this.size, e)
  }

  // 在所有元素前添加一个新元素
  addFirst (e) {
    this.add(0, e)
  }

  // 在第index个位置插入一个新元素e
  add (index, e) {
    if (this.size === this.data.length) {
      throw new Error('Array is full')
    }

    if (index < 0 || index > this.size) {
      throw new Error('Require index >= 0 and index <= size')
    }

    for (let i = this.size - 1; i >= index; i--) {
      this.data[i + 1] = this.data[i]
    }

    this.data[index] = e
    this.size++
  }

  // 获取index索引位置的元素
  get (index) {
    if (index < 0 || index >= this.size) {
      throw new Error('No Index')
    }
    return this.data[index]
  }

  // 修改index索引位置的元素为e
  set (index, e) {
    if (index < 0 || index >= this.size) {
      throw new Error('No Index')
    }
    this.data[index] = e
  }

  // 转为字符串
  toString () {
    let string = ''
    for (let i = 0; i < this.size; i++) {
      string += this.data[i]
      if (i !== this.size - 1) {
        string += ','
      }
    }
    return string
  }

}

let arr = new MyArray(10)
arr.addFirst(1)
arr.addLast(32)
arr.addFirst(2)
console.log(arr.toString())
console.log(arr)
