// 列表是一组有序的数据。每个列表中的数据项称为元素。
// 根据里自己里面所存的数据不同，而有不同的类型。
// 存相册的叫相册列表，存联系人的叫联系人列表。


// 此时的列表不能通过 list[1] 这样出现索引值，我们应该把这个索引值给隐藏起来。
// 但是我们还又必须提供一些可以迭代的方法

// 发动你智慧的脑袋，思考一下, 列表要存取一系列的数据，底层我们还是要通过数组实现的。
// 只是不向外面暴露索引值即可。
// 所以我们内部要有一个私有的存放数据的数组，和记录索引值的私有成员

/*
 * 实现一个列表类
 * private data Array<T> = []
 * private index = 0
 *
 * 首先我们封装一些对于 data 操作的方法
 *
 * 0、查找 element 所在的位置
 * find(ele: T): number
 *
 * 1、判断 element 是否存在列表中
 * contains(ele: T) : boolean
 *
 * 2、得到 index 位置上面的元素
 *
 * 依赖外部 index -> get(index: number) : T
 *
 * 不依赖外部 index -> get() : T
 *
 * 这里我们禁止外部传入索引，当然如何做，你要考虑怎样的逻辑适合你的业务，
 * 反正我是不推荐你使用依赖外部传入 index ，因为你那样做还不如直接用数组
 * 这里我们应该通过内部的 private 的 index 来控制返回哪一个位置上的元素
 *
 * 3、删除 element 元素
 * remove(ele: T) : boolean
 *
 * 这里也不是传入的 index，
 *
 * 4、添加 element 到列表后面
 * add(ele: T) : void
 *
 * 5、在 after 元素后面插入 element 元素
 * insert(ele: T, after: T) : boolean
 *
 * 6、置空数组
 * reset() : boolean
 *
 * 对 index 进行操作的一些方法
 *
 * 7、得到当前的 index 值
 * get pointer() : number
 * 这里我们可以通过 getter 实现
 *
 * 8、设置 index 到某一位置
 * set pointer(value)
 * 这里我们可以通过 setter 实现
 *
 * 9、重置 index 为开始的位置
 * start() : void
 *
 * 10、重置 index 的位置为末尾
 * end() : void
 *
 * 11、index 后移一位
 * next() : void
 *
 * 12、index 向前移动一位
 * prev() : void
 */


class List<T> {
  private _data: Array<T> = [];
  private _index: number;

  set pointer(v: number) {
    this._index = v;
  }

  get pointer(): number {
    return this._index;
  }

  find(ele: T): number {
    return this._data.findIndex(v => v === ele);

    // [4, 6, 7, 12].findIndex(v => v % 2 !=0 ) // 2
  }

  contains(ele: T): boolean {
    return Boolean(this.find(ele));
  }

  get() : T{
    if(typeof this._data[this._index] !== 'undefined') {
      return this._data[this._index];
    }
  }

  remove(ele: T) : boolean{
    let position = this.find(ele);

    // [4, 6, 7, 12].splice(2,1) => [ 7 ]

    if (position > -1) return !!this._data.splice(position, 1);

    return false;
  }

  add(ele: T) : void{
    this._data.push(ele);

    // this._data = [...this._data, ele]

    // this._data = this._data.concat(ele);

    // this._data.reverse().unshift(ele), this._data.reverse()

    // this._data = this._data.reduceRight((prev, curr) => prev.push(curr), prev , [ele]) ; this._data.reverse()
  }

  insert(ele: T, after: T): boolean {
    let position = this.find(after);
    if(position == 0) {
      this._data.unshift(ele)
      return true
    }
    else if(position > 0 && position < this._data.length) {
      this._data.splice(position - 1, 0, ele)
      return true;
    }
    return false;

  }

  reset(){
    this._index = 0;
    this._data = [];
  }

  start(){
    this._index = 0
  }

  end(){
    this._index = this._data.length - 1;
  }

  prev(){
    if(this._index >= 0 ) {
      this._index--
    }
  }

  next(){
    if(this._index <= this._data.length) {
      this._index ++
    }
  }

  iterator(dir: ">>>" | "<<<") : boolean {

    if(dir === ">>>") {
      // 从前到后
      return this._index < this._data.length ?  true : false;
    }else{
      // 从后到前
      return this._index >= 0 ? true : false;
    }

  }

}

let list = new List<string>()

list.add("-.-")
list.add("=.=")
list.add(">_<")

for (list.start(); list.iterator(">>>"); list.next()) {
  console.log(list.get());
}

console.log(list.pointer);

for (list.end(); list.iterator("<<<"); list.prev()) {
  console.log(list.get());
}

console.log(list.pointer);



// 什么是列表 ?
// 对于你业务需求的封装，存什么东西，就是什么东西列表。
