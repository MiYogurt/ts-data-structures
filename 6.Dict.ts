namespace Dict1 {
  export class Dict{
    dataStore = new Array()

    add(k, v){
      this.dataStore[k] = v
    }

    find(k){
      return this.dataStore[k];
    }

    remove(k){
      delete this.dataStore[k];
    }

    toString(){
      Object.keys(this.dataStore).forEach((propName) => {
        console.log(this.dataStore[propName]);
      })
    }

    count(){
      return Object.keys(this.dataStore).length
    }

    showAll(){
      let sored = Object.keys(this.dataStore).sort();
      for (let v of sored){
        console.log(v);
      }
    }

  }
}


let dict = new Dict1.Dict()

dict.add('name', 'yugo');

dict.add('email', '173xxxx@qq.com');

console.log("i find the email is " + dict.find('email'));

// dict.remove('email')

dict.toString()

console.log(dict.count());

dict.showAll()