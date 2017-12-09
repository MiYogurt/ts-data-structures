class NSet{
    dataSource: any[] = [];
    add(data){
        if (this.dataSource.indexOf(data) < 0) {
            this.dataSource.push(data);
            return true;
        }
        return false;
    }
    remove(data){
        const pos = this.dataSource.indexOf(data);
        if (pos > 0) {
            this.dataSource.splice(pos, 1);
            return true;
        }
        return false;
    }
    show(){
        return this.dataSource;
    }
    contains(data){
        return Boolean(this.dataSource.find(v => v === data));
    }
    union(set: NSet) {
        let tempSet = new NSet();
        Object.assign(tempSet.dataSource, this.dataSource);
        set.dataSource.forEach(value => {
            if (!tempSet.contains(value)) {
                tempSet.dataSource.push(value)
            }
        })
        return tempSet;
    }
    defference(set: NSet){
        let tempSet = new NSet();
        this.dataSource.forEach(value => {
            if (!set.contains(value)) {
                tempSet.dataSource.push(value)
            }
        });
        return tempSet;
    }
}


let set_a = new NSet();
set_a.add("1233")
set_a.add("1333")

let set_b = new NSet();
set_b.add("a")
set_b.add("b")

let set_c = set_a.union(set_b);
console.log(set_c.show());
