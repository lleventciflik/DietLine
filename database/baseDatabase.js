const fs = require('fs');
const flatted = require('flatted');

class baseDatabase {
    constructor(model) {
        this.model = model;
        this.filename = this.model.name.toLowerCase();
    }

    save (objects) {
        fs.writeFileSync(`${__dirname}/${this.filename}.json`, flatted.stringify(objects, null, 2))
    }

    load() {
        const file = fs.readFileSync(`${__dirname}/${this.filename}.json`, 'utf8')
        const objects = flatted.parse(file)

        return objects.map(this.model.create);
    }

    insert(object){
        const objects = this.load();

        this.save(objects.concat(object));
    }

    remove (index)  {
        const objects = this.load();

        objects.splice(index, 1);

        this.save(objects);
    }
}

module.exports = baseDatabase;